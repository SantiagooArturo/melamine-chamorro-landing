"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Gift, Share2, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function RaffleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasShared, setHasShared] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Verificar si ya participó (guardar en localStorage)
    const hasParticipated = localStorage.getItem("raffle-participated");
    if (!hasParticipated) {
      // Mostrar modal después de 1.5 segundos
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: "Melamina Chamorro - Sorteo Especial",
      text: "¡Participa en el sorteo de Melamina Chamorro! Diseño y fabricación de muebles de alta calidad. 🎁✨",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setHasShared(true);
      } else {
        // Fallback: copiar al portapapeles
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        );
        setHasShared(true);
        alert("¡Enlace copiado! Compártelo con tus amigos por WhatsApp o redes sociales.");
      }
    } catch (error) {
      // El usuario canceló el compartir, pero aún así lo marcamos como compartido
      // para permitir la participación
      if ((error as Error).name !== "AbortError") {
        console.error("Error al compartir:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hasShared) {
      alert("¡Debes compartir con un amigo para participar!");
      return;
    }

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      alert("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "raffle-participants"), {
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        sharedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      });

      localStorage.setItem("raffle-participated", "true");
      setIsSuccess(true);
      
      // Cerrar modal después de 3 segundos
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Hubo un error al registrar tu participación. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
        {!isSuccess ? (
          <>
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <DialogTitle className="text-2xl font-bold text-amber-900 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                ¡Sorteo Especial!
                <Sparkles className="w-5 h-5 text-amber-500" />
              </DialogTitle>
              <DialogDescription className="text-amber-700 text-base mt-2">
                Participa en nuestro sorteo exclusivo. Completa tus datos, comparte con un amigo y podrás ganar increíbles premios.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-amber-900 font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Ej: Juan Pérez García"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="border-amber-300 focus:border-amber-500 focus:ring-amber-500 bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-amber-900 font-medium">
                  Número de Teléfono
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Ej: 999 888 777"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="border-amber-300 focus:border-amber-500 focus:ring-amber-500 bg-white"
                  required
                />
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  onClick={handleShare}
                  variant={hasShared ? "outline" : "default"}
                  className={`w-full ${
                    hasShared
                      ? "bg-green-100 border-green-500 text-green-700 hover:bg-green-200"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  }`}
                >
                  {hasShared ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      ¡Compartido!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartir con un amigo
                    </>
                  )}
                </Button>
                <p className="text-xs text-amber-600 mt-1 text-center">
                  Debes compartir para poder participar
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !hasShared}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 text-lg shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "¡Participar en el Sorteo!"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              ¡Registro Exitoso!
            </h3>
            <p className="text-green-600">
              Ya estás participando en el sorteo. ¡Buena suerte! 🍀
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

