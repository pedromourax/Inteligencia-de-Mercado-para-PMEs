import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Básico",
    description: "Ideal para pequenas empresas iniciando sua jornada analítica",
    price: "R$ 99",
    features: [
      "Análise básica de concorrência",
      "Relatórios mensais",
      "Dashboard simplificado",
      "Suporte por email",
    ],
  },
  {
    name: "Avançado",
    description: "Para empresas que buscam análises mais profundas",
    price: "R$ 199",
    features: [
      "Análise avançada de concorrência",
      "Análise de sentimentos",
      "Tendências de mercado",
      "Integração com ferramentas externas",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    description: "Solução completa para máximo insight de mercado",
    price: "R$ 299",
    features: [
      "Todas as funcionalidades do plano Avançado",
      "Consultoria personalizada",
      "API dedicada",
      "Relatórios customizados",
      "Suporte 24/7",
    ],
  },
];

export function PricingPlans() {
  return (
    <section
      id="pricing"
      className="container space-y-6 px-24 max-lg:px-16 max-md:px-3"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Planos e Preços
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Escolha o plano ideal para o seu negócio
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold mb-6">{plan.price}/mês</div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Começar Agora</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
