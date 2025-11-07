import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, CreditCard, Users, Trophy, Gift, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "Adesão",
      description: "Você escolhe o valor do crédito desejado e entra em um grupo de consórcio. Nossa equipe te ajuda a encontrar o plano ideal para seu perfil e objetivos."
    },
    {
      number: 2,
      icon: CreditCard,
      title: "Pagamento",
      description: "Paga as parcelas mensais, que são significativamente menores que um financiamento tradicional. Sem juros, apenas taxa de administração."
    },
    {
      number: 3,
      icon: Users,
      title: "Assembleias",
      description: "Mensalmente ocorrem assembleias onde são realizados os sorteios e análise de lances. Você pode participar presencialmente ou acompanhar online."
    },
    {
      number: 4,
      icon: Trophy,
      title: "Contemplação",
      description: "Você é contemplado quando é sorteado ou oferece o melhor lance do mês. A partir daí, você tem direito a usar sua carta de crédito."
    },
    {
      number: 5,
      icon: Gift,
      title: "Conquista",
      description: "Recebe a carta de crédito e pode finalmente adquirir o bem dos seus sonhos: imóvel, veículo ou serviço. Missão cumprida!"
    }
  ];

  const glossary = [
    {
      term: "O que é Lance?",
      definition: "É um valor adicional que você oferece para aumentar suas chances de ser contemplado. Pode ser oferecido em dinheiro (lance livre) ou em percentual do valor do bem. Quanto maior o lance, maiores as chances de contemplação."
    },
    {
      term: "O que é Sorteio?",
      definition: "A cada assembleia mensal, são sorteadas cotas do grupo que serão contempladas. É um processo transparente, fiscalizado e todos os participantes têm as mesmas chances de serem sorteados."
    },
    {
      term: "O que é Taxa de Administração?",
      definition: "É o valor que a administradora do consórcio cobra para organizar e gerenciar o grupo. É muito menor que os juros de um financiamento tradicional e já está incluída na parcela mensal. Seja transparente!"
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Como Funciona?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda o passo a passo do consórcio de forma simples e clara
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="mb-12" data-testid="card-what-is">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-primary">
                O que é Consórcio?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-muted-foreground" data-testid="text-what-is">
                É uma compra planejada e colaborativa. Um grupo de pessoas se une com o mesmo
                objetivo: adquirir um bem. Todos contribuem mensalmente e, periodicamente,
                participantes são contemplados para receber a carta de crédito e realizar sua
                compra. É a forma mais econômica de adquirir bens, pois não há incidência de juros.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-center text-foreground mb-8" data-testid="text-steps-title">
            Passo a Passo
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative" data-testid={`card-step-${step.number}`}>
                  <Card className="md:ml-20 hover-elevate active-elevate-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="absolute -left-12 md:left-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1 md:ml-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <step.icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl md:text-2xl text-primary">
                              {step.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8" data-testid="text-glossary-title">
            Glossário Rápido
          </h2>

          <div className="space-y-6">
            {glossary.map((item, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-glossary-${index}`}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">{item.term}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {item.definition}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto">
            <CardContent className="py-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para começar?</h3>
              <p className="text-lg mb-6 opacity-90">
                Faça uma simulação gratuita e veja como é simples realizar seus sonhos
              </p>
              <Link href="/contato">
                <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90" data-testid="button-cta-simulation">
                  Fazer Simulação Grátis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
