import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Consórcios Ademicon</h3>
            <p className="text-sm opacity-90 mb-4">
              Parceiros autorizados Ademicon. Realizando sonhos através de consórcios
              de imóveis, veículos e serviços.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-75">
              <MapPin size={16} />
              <span>Fiscalizado pelo Banco Central do Brasil</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <div className="opacity-90 hover:opacity-100 hover-elevate px-2 py-1 rounded-md inline-block cursor-pointer" data-testid="link-footer-home">
                    Início
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/produtos">
                  <div className="opacity-90 hover:opacity-100 hover-elevate px-2 py-1 rounded-md inline-block cursor-pointer" data-testid="link-footer-produtos">
                    Produtos
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <div className="opacity-90 hover:opacity-100 hover-elevate px-2 py-1 rounded-md inline-block cursor-pointer" data-testid="link-footer-sobre">
                    Sobre Nós
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/como-funciona">
                  <div className="opacity-90 hover:opacity-100 hover-elevate px-2 py-1 rounded-md inline-block cursor-pointer" data-testid="link-footer-como-funciona">
                    Como Funciona
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <div className="opacity-90 hover:opacity-100 hover-elevate px-2 py-1 rounded-md inline-block cursor-pointer" data-testid="link-footer-faq">
                    FAQ
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="opacity-90">WhatsApp: (00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="opacity-90">contato@consorciosademicon.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Consórcios Ademicon. Todos os direitos reservados.</p>
          <p className="mt-2">Odair José Carvalho e Jayme Gabriel Carvalho - Representantes Autorizados Ademicon</p>
        </div>
      </div>
    </footer>
  );
}
