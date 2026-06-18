import type { Metadata } from "next";
import AcademiaSidebar from "@/components/academia/Sidebar";
import AcademiaTopbar from "@/components/academia/Topbar";

export const metadata: Metadata = {
  title: "Academia · Self-made",
};

export default function AcademiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper flex">
      <AcademiaSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AcademiaTopbar />
        <main className="flex-1 px-6 py-8 max-w-3xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
