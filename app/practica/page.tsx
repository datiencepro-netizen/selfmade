import type { Metadata } from "next";
import { Playground } from "@/components/practice/Playground";

export const metadata: Metadata = {
  title: "Práctica — Compilador integrado",
  description:
    "Resuelve ejercicios con Python ejecutándose en tu navegador y recibe feedback automático sobre cada caso de prueba.",
};

export default function PracticaPage() {
  return <Playground />;
}
