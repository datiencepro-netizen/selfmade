import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Crear cuenta · Self-made",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-block">
          <span className="font-display font-bold text-2xl text-ink tracking-tight">
            self-made
          </span>
        </Link>
        <p className="mt-2 text-sm text-ink-faint">Módulo académico</p>
      </div>

      {/* Card */}
      <div className="bg-card border border-line rounded-2xl p-8 shadow-sm">
        <h1 className="font-display font-semibold text-xl text-ink mb-1">
          Crea tu cuenta
        </h1>
        <p className="text-sm text-ink-faint mb-6">
          Empieza tu camino hacia IT
        </p>

        <RegisterForm />

        <p className="mt-6 text-center text-xs text-ink-faint">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="text-accent hover:text-accent-ink font-medium transition-colors"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
