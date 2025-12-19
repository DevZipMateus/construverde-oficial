import { Leaf } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Construverde - Materiais de Construção"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/70">
              ConstruVerde – Soluções inteligentes para piscinas e para o meio ambiente.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Empresa sustentável</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>(19) 99786-7681</li>
              <li>construrverde@gmail.com</li>
              <li>Alameda dos Pintassilgos, 110</li>
              <li>Serra Verde, São Pedro - SP</li>
              <li>CEP 13524-640</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Construverde Material de Construção. CNPJ: 55.710.395/0001-08
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
