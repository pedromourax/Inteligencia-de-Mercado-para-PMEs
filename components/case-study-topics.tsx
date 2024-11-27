"use client";

import { Card } from '@/components/ui/card';
import { TrendingUp, Star } from 'lucide-react';

const topTopics = [
  { topic: 'Zara', value: 97 },
  { topic: 'Trousers', value: 6 },
  { topic: 'Dress', value: 4 },
  { topic: 'Perfume', value: 4 },
  { topic: 'Lojas Renner', value: 3 },
  { topic: 'Handbag', value: 2 },
  { topic: 'Renner', value: 2 },
  { topic: 'Jeans', value: 2 },
  { topic: 'Jacket', value: 2 },
  { topic: 'Blouse', value: 2 }
];

const risingTopics = [
  { topic: 'Cobra Kai', value: 'Breakout' },
  { topic: 'YouCom', value: 'Breakout' },
  { topic: 'Off-White', value: '+450%' },
  { topic: 'Zara Home', value: '+350%' },
  { topic: 'Vanilla', value: '+300%' },
  { topic: 'Wide-leg jeans', value: '+300%' },
  { topic: 'ZARA Home', value: '+250%' },
  { topic: 'Slim-fit pants', value: '+150%' },
  { topic: 'Linen', value: '+140%' },
  { topic: 'Cargo pants', value: '+120%' }
];

function TopicList({ title, topics, icon: Icon }: { 
  title: string; 
  topics: { topic: string; value: string | number }[];
  icon: React.ElementType;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <ul className="space-y-2">
        {topics.map((item) => (
          <li key={item.topic} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{item.topic}</span>
            <span className="font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyTopics() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Tópicos Relacionados</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <TopicList 
            title="Tópicos Mais Buscados" 
            topics={topTopics}
            icon={Star}
          />
        </Card>
        <Card className="p-6">
          <TopicList 
            title="Tópicos em Ascensão" 
            topics={risingTopics}
            icon={TrendingUp}
          />
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="font-semibold">Análise de Produtos</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Calças e vestidos lideram as buscas por categorias</li>
            <li>Crescimento notável em acessórios e perfumes</li>
            <li>Forte interesse em peças básicas e versáteis</li>
            <li>Tendência de crescimento em moda sustentável</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Tendências Emergentes</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Aumento significativo em buscas por Zara Home</li>
            <li>Crescimento em categorias específicas como wide-leg jeans</li>
            <li>Interesse crescente em marcas de luxo e colaborações</li>
            <li>Expansão para novos segmentos de mercado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}