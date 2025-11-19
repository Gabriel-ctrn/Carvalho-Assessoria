import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/como-funciona", label: "Como Funciona" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer" data-testid="link-home">
              <div className="text-2xl font-bold text-primary">Carvalho Assessoria</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 cursor-pointer ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/contato">
              <Button variant="default" className="ml-2" data-testid="button-cta-header">
                SIMULAR GRÁTIS
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block px-4 py-3 text-sm font-medium hover-elevate active-elevate-2 rounded-md cursor-pointer ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/contato">
              <Button
                variant="default"
                className="w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-cta-mobile"
              >
                SIMULAR GRÁTIS
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
