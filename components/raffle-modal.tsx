"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function RaffleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      alert("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "raffle-participants"), {
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
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
              {/* Logos de las empresas */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <Image
                  src="/logo.png"
                  alt="Melamina Chamorro"
                  width={150}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
                <Image
                  src="/kitchencenter_logo.webp"
                  alt="Kitchen Center"
                  width={150}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </div>
              <DialogTitle className="text-2xl font-bold text-amber-900 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                ¡Sorteo Especial!
                <Sparkles className="w-5 h-5 text-amber-500" />
              </DialogTitle>
              <DialogDescription className="text-amber-700 text-base mt-2">
                Participa en nuestro sorteo exclusivo solo para nuestros clientes, como una manera de agradecerles por permitirnos ser parte de sus hogares y proyectos.
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

              <Button
                type="submit"
                disabled={isSubmitting}
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
