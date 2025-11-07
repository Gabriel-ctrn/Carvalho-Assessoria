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
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      objective: "",
      creditValue: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Simulação enviada com sucesso!",
        description: "Entraremos em contato em breve através do WhatsApp.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar simulação",
        description: error.message || "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    mutation.mutate(data);
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
                                placeholder="(00) 00000-0000"
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? "ENVIANDO..." : "ENVIAR SIMULAÇÃO"}
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
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#25D366] text-white rounded-md hover-elevate active-elevate-2"
                    data-testid="link-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">(00) 00000-0000</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 bg-card rounded-md">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Telefone</div>
                      <div className="text-sm text-muted-foreground">(00) 0000-0000</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-card rounded-md">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">E-mail</div>
                      <div className="text-sm text-muted-foreground">contato@consorciosademicon.com.br</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="py-6">
                  <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-sm opacity-90">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-sm opacity-90">Sábado: 9h às 13h</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
