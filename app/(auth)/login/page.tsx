import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
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
          Bienvenido de vuelta
        </h1>
        <p className="text-sm text-ink-faint mb-6">
          Continúa donde lo dejaste
        </p>

        <LoginForm />

        <p className="mt-6 text-center text-xs text-ink-faint">
          ¿No tienes cuenta?{" "}
          <Link
            href="/registro"
            className="text-accent hover:text-accent-ink font-medium transition-colors"
          >
            Crear cuenta
          </Link>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} Self-made · Todos los derechos reservados
      </p>
    </div>
  );
}
