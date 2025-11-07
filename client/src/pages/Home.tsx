import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home as HomeIcon, Car, Briefcase, Shield, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Happy_family_with_house_keys_fcebf589.png";

export default function Home() {
  const products = [
    {
      icon: HomeIcon,
      title: "IMÓVEIS",
      description: "Casa, apartamento, terreno, construção ou reforma",
      benefits: ["Use seu FGTS", "Sem juros", "Prazos longos"],
      link: "/produtos#imoveis"
    },
    {
      icon: Car,
      title: "VEÍCULOS",
      description: "Carros, motos e caminhões novos ou usados",
      benefits: ["Troque de carro sem juros", "Liberdade de escolha", "Melhor custo-benefício"],
      link: "/produtos#veiculos"
    },
    {
      icon: Briefcase,
      title: "SERVIÇOS",
      description: "Viagens, cirurgias, intercâmbio e mais",
      benefits: ["Planeje sem endividamento", "Flexibilidade total", "Realize seus sonhos"],
      link: "/produtos#servicos"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-background text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Realize seus sonhos sem juros
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-95" data-testid="text-hero-subtitle">
              A melhor assessoria em Consórcios Ademicon
            </p>
            <p className="text-lg mb-8 opacity-90" data-testid="text-hero-description">
              Somos especialistas em crédito para imóveis, veículos e serviços. Parceiros autorizados Ademicon.
            </p>
            
            <Link href="/contato">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto bg-background/95 backdrop-blur-sm text-primary hover:bg-background"
                data-testid="button-hero-cta"
              >
                FAÇA UMA SIMULAÇÃO GRÁTIS
              </Button>
            </Link>

            <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-md" data-testid="badge-trust-ademicon">
                <Shield size={24} />
                <span className="text-sm font-medium">Representante Autorizado Ademicon</span>
              </div>
              <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-md" data-testid="badge-trust-bacen">
                <Shield size={24} />
                <span className="text-sm font-medium">Fiscalizado pelo Banco Central</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-products-title">
              Nossos Produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o consórcio ideal para realizar seu sonho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-product-${product.title.toLowerCase()}`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={product.link}>
                    <Button variant="outline" className="w-full" data-testid={`button-simular-${product.title.toLowerCase()}`}>
                      Simular {product.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
                Quem Somos
              </h2>
            </div>

            <div className="bg-background rounded-lg p-8 md:p-12">
              <p className="text-lg text-center text-foreground mb-6" data-testid="text-about-description">
                Nós somos <strong className="text-primary">Odair José Carvalho</strong> e{" "}
                <strong className="text-primary">Jayme Gabriel Carvalho</strong>, primos e sócios
                apaixonados por planejamento financeiro.
              </p>
              <p className="text-center text-muted-foreground">
                Nossa missão é encontrar o plano perfeito para sua conquista, oferecendo assessoria
                personalizada e transparente em consórcios Ademicon.
              </p>
              <div className="text-center mt-8">
                <Link href="/sobre">
                  <Button variant="default" data-testid="button-about-more">
                    Conheça Nossa História
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Pronto para realizar seu sonho?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Faça uma simulação gratuita e descubra como o consórcio pode transformar seus planos em realidade
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto bg-background text-primary hover:bg-background/90"
              data-testid="button-cta-bottom"
            >
              SIMULAR AGORA
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
