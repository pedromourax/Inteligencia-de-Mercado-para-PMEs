import { Button } from "@/components/ui/button";
import { LineChart, BarChart2, PieChart } from "lucide-react";

export function Hero() {
  return (
    <div className="relative px-24 max-lg:px-16 max-md:px-3">
      <div className="container flex flex-col items-center gap-4 text-center pt-20 pb-8">
        <div className="flex gap-4">
          <LineChart className="h-12 w-12 text-primary" />
          <BarChart2 className="h-12 w-12 text-primary" />
          <PieChart className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Inteligência de Mercado para PMEs
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Transforme dados em decisões estratégicas. Nossa plataforma oferece
          insights valiosos para impulsionar seu negócio no mercado competitivo.
        </p>
        <div className="flex gap-4 max-md:flex-col">
          <Button size="lg">Começar Gratuitamente</Button>
          <Button size="lg" variant="outline">
            Agendar Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
