import SprintCard from "@/components/academia/SprintCard";
import { curriculum } from "@/lib/curriculum";

export default function AcademiaPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-2xl text-ink mb-6">Contenido</h1>

      <div className="space-y-3">
        {curriculum.map((sprint) => (
          <SprintCard key={sprint.id} sprint={sprint} />
        ))}
      </div>
    </div>
  );
}
