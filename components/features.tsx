import {
  LineChart,
  BarChart2,
  PieChart,
  Shield,
  Share2,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Coleta de Dados",
    description:
      "Colete dados de redes sociais, pesquisas de mercado e concorrentes para uma análise abrangente.",
    icon: LineChart,
  },
  {
    title: "Análise Preditiva",
    description:
      "Use Big Data e análise preditiva para prever tendências e comportamentos do consumidor.",
    icon: BarChart2,
  },
  {
    title: "Relatórios e Dashboards",
    description:
      "Gere relatórios intuitivos e dashboards personalizados para tomada de decisão informada.",
    icon: PieChart,
  },
  {
    title: "Integração Externa",
    description:
      "Integre com redes sociais, Google Analytics e outras ferramentas de marketing.",
    icon: Share2,
  },
  {
    title: "Proteção de Dados",
    description:
      "Garantimos a conformidade com a LGPD e a segurança dos dados dos seus clientes.",
    icon: Shield,
  },
  {
    title: "Performance Otimizada",
    description:
      "Sistema rápido e eficiente para análise em tempo real do seu mercado.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="container space-y-6 px-24 max-lg:px-16 max-md:px-3"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Funcionalidades Principais
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Nossa plataforma oferece um conjunto completo de ferramentas para
          análise de mercado e tomada de decisão.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
