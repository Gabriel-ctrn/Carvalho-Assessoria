import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// We'll submit directly to a Formspree endpoint (no backend needed)
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      objective: undefined,
      creditValue: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
  const endpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT as string) || "https://formspree.io/f/xeonkvga";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          whatsapp: data.whatsapp,
          email: data.email,
          objective: data.objective,
          creditValue: data.creditValue,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText || "Erro no envio");
      }

      toast({
        title: "Simulação enviada com sucesso!",
        description: "Recebemos sua simulação e entraremos em contato em breve.",
      });

      form.reset({
        name: "",
        whatsapp: "",
        email: "",
        objective: undefined,
        creditValue: "",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar simulação",
        description: error.message || "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Faça sua Simulação
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato para oferecer a melhor solução
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Formulário de Simulação</CardTitle>
                  <CardDescription>
                    Preencha seus dados e receba uma proposta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Seu nome completo"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(87) 99127-0108"
                                {...field}
                                data-testid="input-whatsapp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="seu@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="objective"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Qual o seu objetivo? *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-objective">
                                  <SelectValue placeholder="Selecione uma opção" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="imovel" data-testid="option-imovel">Imóvel (casa, apartamento, terreno)</SelectItem>
                                <SelectItem value="veiculo" data-testid="option-veiculo">Veículo (carro, moto, caminhão)</SelectItem>
                                <SelectItem value="servico" data-testid="option-servico">Serviço (viagem, cirurgia, etc)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="creditValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Valor aproximado do crédito *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="R$ 100.000,00"
                                {...field}
                                data-testid="input-credit-value"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit"
                      >
                        {form.formState.isSubmitting ? "ENVIANDO..." : "ENVIAR SIMULAÇÃO"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Outros Contatos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://wa.me/5587991270108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#25D366] text-white rounded-md hover-elevate active-elevate-2"
                    data-testid="link-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">(87) 99127-0108</div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/o.jose_carvalho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-md hover-elevate active-elevate-2"
                    data-testid="link-instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Instagram</div>
                      <div className="text-sm text-muted-foreground">@o.jose_carvalho</div>
                    </div>
                  </a>

                  <a
                    href="mailto:odairsoares822@gmail.com"
                    className="flex items-center gap-3 p-4 bg-card rounded-md hover-elevate active-elevate-2"
                    data-testid="link-email"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">E-mail</div>
                      <div className="text-sm text-muted-foreground">odairsoares822@gmail.com</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="py-6">
                  <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-sm opacity-90">Segunda a Sexta: 7h às 22h</p>
                  <p className="text-sm opacity-90">Sábado: 9h às 19h</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
