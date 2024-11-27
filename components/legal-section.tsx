import { Shield, Lock, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LegalSection() {
  return (
    <section
      id="legal"
      className="container space-y-6 px-24 max-lg:px-16 max-md:px-3"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Aspectos Legais
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Nossa plataforma segue todas as regulamentações e normas de proteção
          de dados
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Shield className="h-10 w-10 text-primary" />
            <CardTitle>Proteção de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Garantimos total conformidade com a LGPD, incluindo políticas de
              consentimento, anonimização de dados e direitos dos titulares.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Lock className="h-10 w-10 text-primary" />
            <CardTitle>Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Conformidade com normas de comércio eletrônico, contratos digitais
              e práticas de concorrência leal.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-10 w-10 text-primary" />
            <CardTitle>Termos e Políticas</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Termos de uso e políticas de privacidade claros e transparentes,
              garantindo os direitos e responsabilidades dos usuários.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
