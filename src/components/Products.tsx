import { Droplet, FlaskConical, Sparkles, Filter, Waves, Package, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import diskPiscina from "@/assets/disk-piscina.jpg";

const produtos = [
  {
    icon: FlaskConical,
    title: "Cloros",
    description: "Cloro granulado, líquido e em pastilhas para tratamento eficaz da água.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Droplet,
    title: "Sulfato de alumínio",
    description: "Produto essencial para clarificação e decantação de impurezas da água.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Clarificantes",
    description: "Deixe sua piscina cristalina com nossos clarificantes de alta qualidade.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Waves,
    title: "Algicidas",
    description: "Previna e elimine algas com produtos seguros e eficientes.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Filter,
    title: "Barrilhas",
    description: "Ajuste o pH da sua piscina para manter a água equilibrada e saudável.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Package,
    title: "Acessórios",
    description: "Peneiras, escovas, aspiradores e tudo mais para limpeza completa.",
    color: "bg-accent/10 text-accent",
  },
];

const segmentos = [
  "Residências",
  "Condomínios",
  "Clubes e academias",
  "Empresas de manutenção",
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Tudo para sua piscina
          </h2>
          <p className="text-lg text-muted-foreground">
            Produtos de qualidade para manutenção completa, desde o tratamento da água 
            até acessórios de limpeza.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {produtos.map((produto, index) => (
            <Card
              key={produto.title}
              className="bg-card-gradient border border-border/50 shadow-sm card-hover group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${produto.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <produto.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {produto.title}
                </h3>
                <p className="text-muted-foreground">
                  {produto.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Segmentos */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Quem atendemos
              </h3>
              <p className="text-muted-foreground mb-6">
                Oferecemos soluções para diversos segmentos, sempre com qualidade e 
                preços competitivos.
              </p>
              <ul className="space-y-3">
                {segmentos.map((segmento) => (
                  <li key={segmento} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">{segmento}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
              <Droplet className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="font-display font-bold text-xl text-foreground mb-2">
                Precisa de ajuda?
              </h4>
              <p className="text-muted-foreground mb-6">
                Entre em contato e receba orientação técnica gratuita sobre o melhor 
                tratamento para sua piscina.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="https://wa.me/5519997867681" target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <img 
            src={diskPiscina} 
            alt="Disk Piscina Construverde - Tudo para sua piscina com entrega em domicílio" 
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
