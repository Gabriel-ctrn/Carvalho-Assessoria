import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Transparência",
      description: "Informações claras e honestas em todas as nossas negociações"
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Seu sucesso é nossa prioridade número um"
    },
    {
      icon: Target,
      title: "Confiança",
      description: "Construindo relacionamentos duradouros baseados em credibilidade"
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
              Sobre Nós
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça nossa história e nossos valores
            </p>
          </div>

          <Card className="mb-12" data-testid="card-our-story">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-primary">
                Nossa História
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-foreground text-center mb-6" data-testid="text-story">
                Somos <strong className="text-primary">Odair José Carvalho</strong> e{" "}
                <strong className="text-primary">Jayme Gabriel Carvalho</strong>, primos e sócios
                unidos pela paixão em planejamento financeiro e pelo desejo de ajudar pessoas a
                realizarem seus sonhos.
              </p>
              <p className="text-muted-foreground text-center">
                Acreditamos que o consórcio é a ferramenta mais inteligente para aquisição de bens,
                pois permite que nossos clientes planejem suas conquistas sem o peso dos juros
                abusivos de financiamentos tradicionais. Como representantes autorizados da Ademicon,
                temos orgulho de oferecer soluções personalizadas que se adaptam à realidade
                financeira de cada cliente.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-mission">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Missão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-mission">
                  Oferecer assessoria personalizada e transparente para a aquisição de bens através
                  de consórcios, facilitando o acesso ao crédito de forma planejada e sem juros.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-vision">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Visão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-vision">
                  Ser a principal referência em consultoria de consórcios Ademicon em nossa região,
                  reconhecidos pela excelência no atendimento e resultados para nossos clientes.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8" data-testid="text-values-title">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-elevate active-elevate-2" data-testid={`card-value-${value.title.toLowerCase()}`}>
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground" data-testid="card-team">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Nossa Equipe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div data-testid="card-team-member-odair">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Odair José Carvalho</h4>
                  <p className="text-sm opacity-90">Consultor Ademicon</p>
                </div>
                <div data-testid="card-team-member-jayme">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Jayme Gabriel Carvalho</h4>
                  <p className="text-sm opacity-90">Consultor Ademicon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
