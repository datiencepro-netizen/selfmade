import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceder · Self-made",
  description: "Inicia sesión en tu módulo académico Self-made",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      {children}
    </div>
  );
}
