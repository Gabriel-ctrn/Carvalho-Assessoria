import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Car, Briefcase, CheckCircle } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "imoveis",
      icon: Home,
      title: "Consórcio de Imóveis",
      subtitle: "Realize o sonho da casa própria",
      description: "O consórcio de imóveis é a forma mais inteligente de adquirir sua casa, apartamento ou terreno sem pagar juros.",
      canBuy: [
        "Casa própria",
        "Apartamento",
        "Terreno",
        "Construção",
        "Reforma",
        "Imóvel comercial"
      ],
      benefits: [
        "Use seu FGTS para dar lances ou pagar parcelas",
        "Sem juros - apenas taxa de administração",
        "Prazos de até 200 meses",
        "Valor do crédito corrigido pela inflação",
        "Flexibilidade na escolha do imóvel"
      ]
    },
    {
      id: "veiculos",
      icon: Car,
      title: "Consórcio de Veículos",
      subtitle: "Seu carro novo sem juros",
      description: "Troque de carro ou adquira seu primeiro veículo com as melhores condições do mercado.",
      canBuy: [
        "Carros novos ou seminovos",
        "Motos",
        "Caminhões",
        "Veículos utilitários",
        "Frotas empresariais"
      ],
      benefits: [
        "Troque de carro sem juros",
        "Liberdade total de escolha da marca e modelo",
        "Parcelas que cabem no seu bolso",
        "Possibilidade de dar lances para antecipar",
        "Melhor custo-benefício do mercado"
      ]
    },
    {
      id: "servicos",
      icon: Briefcase,
      title: "Consórcio de Serviços",
      subtitle: "Realize seus projetos pessoais",
      description: "Planeje aquele sonho especial sem comprometer seu orçamento com financiamentos caros.",
      canBuy: [
        "Viagens e turismo",
        "Cirurgias plásticas",
        "Intercâmbio e estudos",
        "Festas de formatura",
        "Casamentos",
        "Reformas em geral"
      ],
      benefits: [
        "Planeje sem se endividar",
        "Flexibilidade total de uso",
        "Parcelas acessíveis",
        "Realize múltiplos sonhos",
        "Sem comprometer limite do cartão"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Nossos Consórcios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça em detalhes cada modalidade de consórcio e escolha a ideal para você
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} id={product.id} className="scroll-mt-20" data-testid={`card-product-${product.id}`}>
              <CardHeader className="text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl text-primary mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-lg">{product.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center md:text-left" data-testid={`text-description-${product.id}`}>
                  {product.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">O que você pode adquirir:</h4>
                    <ul className="space-y-2">
                      {product.canBuy.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Vantagens:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <Link href="/contato">
                    <Button size="lg" data-testid={`button-simular-${product.id}`}>
                      Simular Consórcio de {product.title.split(" ")[2]}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto">
            <CardContent className="py-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ficou com alguma dúvida?</h3>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe está pronta para esclarecer todas as suas questões
              </p>
              <Link href="/contato">
                <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90" data-testid="button-contact-cta">
                  Fale Conosco
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
