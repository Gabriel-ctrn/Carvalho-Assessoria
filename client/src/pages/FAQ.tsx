import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      question: "Consórcio tem juros?",
      answer: "Não! O consórcio não possui juros. Existe apenas a taxa de administração, que é o valor cobrado pela administradora para organizar e gerenciar o grupo. Essa taxa é muito menor que os juros cobrados em financiamentos tradicionais, tornando o consórcio a opção mais econômica para aquisição de bens."
    },
    {
      question: "Posso usar meu FGTS no consórcio de imóvel?",
      answer: "Sim! Você pode usar o FGTS de duas formas: para dar lances nas assembleias (aumentando suas chances de contemplação) ou para amortizar as parcelas mensais após ser contemplado. É uma excelente forma de potencializar seu investimento no consórcio."
    },
    {
      question: "O que acontece se eu for contemplado e não quiser usar o crédito?",
      answer: "Você não é obrigado a usar a carta de crédito imediatamente. Pode aguardar o momento ideal para você, desde que dentro do prazo de vigência do grupo. Outra opção é oferecer o crédito para outra pessoa (transferir a cota), sempre seguindo as regras da administradora."
    },
    {
      question: "O que acontece se eu atrasar uma parcela?",
      answer: "Em caso de atraso, são aplicados juros de mora e multa, conforme estabelecido em contrato. O atraso também pode impedir sua participação nos sorteios até a regularização. É importante manter as parcelas em dia para não perder oportunidades de contemplação e evitar custos extras."
    },
    {
      question: "É seguro? Quem fiscaliza?",
      answer: "Sim, é totalmente seguro! Os consórcios são fiscalizados e regulamentados pelo Banco Central do Brasil, que estabelece regras rígidas para proteger os consorciados. A Ademicon é uma administradora autorizada e fiscalizada pelo Bacen, garantindo transparência e segurança em todas as operações."
    },
    {
      question: "Como funciona o sorteio?",
      answer: "Os sorteios acontecem mensalmente nas assembleias do grupo. O processo é totalmente transparente e auditado, garantindo que todos os participantes ativos tenham as mesmas chances. Você pode acompanhar as assembleias presencialmente ou online, e os resultados são divulgados oficialmente."
    },
    {
      question: "Posso dar lance mesmo sem ter sido sorteado?",
      answer: "Sim! Dar lances é uma das principais vantagens do consórcio. Você pode oferecer um valor extra (lance livre) ou percentual do bem para aumentar suas chances de contemplação. O participante que oferece o maior lance válido do mês é contemplado, permitindo que você antecipe a realização do seu sonho."
    },
    {
      question: "Qual a diferença entre consórcio e financiamento?",
      answer: "A principal diferença é que o consórcio não tem juros, apenas taxa de administração, tornando-o muito mais econômico. No financiamento, você recebe o bem imediatamente mas paga juros altos. No consórcio, você planeja a compra, paga parcelas menores e pode ser contemplado a qualquer momento por sorteio ou lance."
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre consórcios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Dúvidas Comuns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary" data-testid={`accordion-trigger-${index}`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossa equipe está pronta para esclarecer qualquer questão
                </p>
                <Link href="/contato">
                  <Button size="lg" data-testid="button-contact">
                    Entre em Contato
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
