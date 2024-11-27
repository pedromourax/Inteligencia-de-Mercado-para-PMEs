"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { region: "Distrito Federal", value: 100 },
  { region: "São Paulo", value: 84 },
  { region: "Santa Catarina", value: 67 },
  { region: "Paraná", value: 65 },
  { region: "Minas Gerais", value: 64 },
  { region: "Rio de Janeiro", value: 63 },
  { region: "Goiás", value: 53 },
  { region: "Rio Grande do Sul", value: 52 },
  { region: "Rio Grande do Norte", value: 50 },
  { region: "Pernambuco", value: 50 },
  { region: "Espírito Santo", value: 47 },
  { region: "Paraíba", value: 47 },
  { region: "Ceará", value: 42 },
  { region: "Alagoas", value: 40 },
  { region: "Bahia", value: 38 },
  { region: "Sergipe", value: 36 },
  { region: "Tocantins", value: 35 },
  { region: "Mato Grosso do Sul", value: 32 },
  { region: "Mato Grosso", value: 30 },
  { region: "Piauí", value: 29 },
  { region: "Pará", value: 28 },
  { region: "Acre", value: 28 },
  { region: "Rondônia", value: 26 },
  { region: "Roraima", value: 25 },
  { region: "Amazonas", value: 22 },
  { region: "Maranhão", value: 22 },
  { region: "Amapá", value: 20 },
];

export function CaseStudyRegions() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Interesse por Região</h3>
      <div className="h-[600px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis
              dataKey="region"
              type="category"
              tick={{ fontSize: 12 }}
              width={100}
            />
            <Tooltip
              itemStyle={{ color: "black" }}
              formatter={(value) => [`${value}`, "Interesse"]}
            />
            <Bar
              dataKey="value"
              fill="hsl(var(--primary))"
              radius={[0, 4, 4, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="font-semibold">Principais Insights</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Distrito Federal lidera com maior interesse relativo</li>
            <li>São Paulo apresenta forte presença digital</li>
            <li>Sul e Sudeste mostram interesse consistente</li>
            <li>Norte e Nordeste com potencial de crescimento</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Oportunidades Identificadas</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Expansão estratégica em mercados emergentes</li>
            <li>Campanhas regionalizadas por interesse</li>
            <li>Otimização de estoque por região</li>
            <li>Marketing direcionado por perfil regional</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
