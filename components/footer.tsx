import { BarChart2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t px-24 max-lg:px-16 max-md:px-3">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-6 w-6" />
          <span className="text-lg font-bold">Market Intelligence</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Termos de Uso
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Política de Privacidade
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Contato
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2024 Market Intelligence. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
