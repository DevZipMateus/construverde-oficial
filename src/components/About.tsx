import { Target, Eye, Heart, Sparkles, Users, Leaf, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valores = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Compromisso com práticas e produtos que respeitam o meio ambiente.",
  },
  {
    icon: Shield,
    title: "Qualidade",
    description: "Oferecer apenas soluções eficazes e seguras para manutenção de piscinas.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Clareza nos preços, informações e relacionamento com clientes.",
  },
  {
    icon: Sparkles,
    title: "Inovação",
    description: "Buscar constantemente novas tecnologias e produtos que facilitem a vida dos clientes.",
  },
  {
    icon: Users,
    title: "Proximidade",
    description: "Atendimento humano, personalizado e voltado para a confiança de longo prazo.",
  },
  {
    icon: Heart,
    title: "Responsabilidade",
    description: "Garantir que cada entrega contribua para saúde, lazer e bem-estar das famílias.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-section-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Conheça a Construverde
          </h2>
          <p className="text-lg text-muted-foreground">
            ConstruVerde – Soluções inteligentes para piscinas e para o meio ambiente.
          </p>
        </div>

        {/* Historia */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Nossa história</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Uma empresa jovem com propósito
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A ConstruVerde nasceu em 2024 com o propósito de oferecer soluções práticas e 
                sustentáveis para manutenção de piscinas. A ideia surgiu da percepção de que muitas 
                famílias e condomínios buscavam não apenas produtos de qualidade, mas também uma 
                empresa que transmitisse confiança, proximidade e responsabilidade ambiental.
              </p>
              <p>
                No início, a empresa começou com um portfólio enxuto de produtos essenciais para 
                o tratamento da água. O foco era garantir clareza, segurança e economia para os 
                clientes. Rapidamente, a ConstruVerde conquistou espaço na região, destacando-se 
                pelo atendimento personalizado e pela transparência nos preços.
              </p>
              <p>
                Hoje, um ano depois, a ConstruVerde já é reconhecida como uma empresa inovadora 
                e comprometida. Seu diferencial está em unir qualidade, sustentabilidade e 
                proximidade com o cliente.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <Card className="bg-card border-0 shadow-lg card-hover">
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-display font-bold text-foreground">Missão</h4>
                    <p className="text-xs text-muted-foreground mt-2">
                      Oferecer soluções sustentáveis e acessíveis
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-0 shadow-lg card-hover">
                  <CardContent className="p-6 text-center">
                    <Eye className="h-8 w-8 text-accent mx-auto mb-3" />
                    <h4 className="font-display font-bold text-foreground">Visão</h4>
                    <p className="text-xs text-muted-foreground mt-2">
                      Ser referência regional em piscinas
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Nossos valores
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <Card
                key={valor.title}
                className="bg-card border border-border/50 shadow-sm card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <valor.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">
                        {valor.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {valor.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
