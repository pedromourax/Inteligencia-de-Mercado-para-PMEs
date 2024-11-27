"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BarChart2, LineChart, PieChart } from "lucide-react";

export function Navigation() {
  return (
    <header className="sticky px-24 max-lg:px-16 max-md:px-3 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-6 w-6" />
          <span className="text-lg font-bold">Market Intelligence</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium">
            Funcionalidades
          </Link>
          <Link href="#pricing" className="text-sm font-medium">
            Preços
          </Link>
          <Link href="#case-study" className="text-sm font-medium">
            Caso de Uso
          </Link>
          <Link href="#legal" className="text-sm font-medium">
            Legal
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <Button>Começar Agora</Button>
        </div>
      </div>
    </header>
  );
}
