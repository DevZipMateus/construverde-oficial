import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const navItems = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Sobre",
  href: "#sobre"
}, {
  label: "Produtos",
  href: "#produtos"
}, {
  label: "Contato",
  href: "#contato"
}];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Construverde - Logo da empresa de materiais de construção" className="h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200">
                {item.label}
              </button>)}
            <Button asChild size="lg">
              <a href="https://wa.me/5519997867681" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                Fale conosco
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg">
            <div className="container-custom py-4 flex flex-col gap-2">
              {navItems.map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-foreground/80 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors text-left">
                  {item.label}
                </button>)}
              <Button asChild className="mt-2">
                <a href="https://wa.me/5519997867681" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Fale conosco
                </a>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;