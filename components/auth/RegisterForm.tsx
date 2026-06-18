"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      router.push("/academia");
    } catch {
      setError("Error al crear la cuenta. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-paper text-ink text-sm placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-paper text-ink text-sm placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-ink mb-1.5">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 8 caracteres"
          className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-paper text-ink text-sm placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 rounded-xl bg-ink text-paper text-sm font-medium hover:bg-ink/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Creando cuenta…" : "Crear cuenta"}
      </button>
    </form>
  );
}
