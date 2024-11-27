"use client";

import { TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudyChart } from "./case-study-chart";
import { CaseStudyRegions } from "./case-study-regions";
import { CaseStudyTopics } from "./case-study-topics";

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="container space-y-8 px-24 max-lg:px-16 max-md:px-3"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Caso de Sucesso: Zara Brasil
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Como a Zara utilizou nossa plataforma para otimizar suas estratégias
          de mercado
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Aumento em Vendas</h3>
                <p className="text-2xl font-bold">32%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Novos Clientes</h3>
                <p className="text-2xl font-bold">+15mil</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">ROI</h3>
                <p className="text-2xl font-bold">285%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Desafio</h3>
            <p className="text-muted-foreground">
              A Zara Brasil enfrentava desafios para otimizar seu estoque e
              prever tendências de moda sazonais no mercado brasileiro,
              resultando em sobras de coleções anteriores e perdas de
              oportunidades em novos trends.
            </p>

            <h3 className="text-2xl font-bold">Solução</h3>
            <p className="text-muted-foreground">
              Utilizando nossa plataforma, a Zara conseguiu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Análise preditiva de tendências de moda</li>
              <li>Otimização de estoque baseada em dados históricos</li>
              <li>
                Monitoramento em tempo real do comportamento do consumidor
              </li>
              <li>Ajuste dinâmico de preços baseado na demanda</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Interesse ao Longo do Tempo</h3>
            <CaseStudyChart />
            <p className="text-sm text-muted-foreground">
              Fonte: Google Trends - Últimos 12 meses
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <CaseStudyRegions />
      </Card>

      <Card className="p-6">
        <CaseStudyTopics />
      </Card>

      <Card className="p-6 bg-primary/5">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Resultados</h3>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Após 6 meses utilizando nossa plataforma, a Zara Brasil reportou uma
            redução de 45% no excesso de estoque, aumento de 32% nas vendas e
            melhoria significativa na precisão das previsões de tendências de
            moda.
          </p>
        </div>
      </Card>
    </section>
  );
}
