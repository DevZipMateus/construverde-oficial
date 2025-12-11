import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import contactPool from "@/assets/contact-pool.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(19) 99786-7681",
    href: "tel:+5519997867681",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "construrverde@gmail.com",
    href: "mailto:construrverde@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Alameda dos Pintassilgos, 110 - Serra Verde, São Pedro - SP, CEP 13524-640",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a sexta: 09h às 17h | Sábado: até 12h",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61566484641076",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/construverde_material",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-section-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Fale conosco
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e encontrar a melhor solução para sua piscina.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <Card key={item.label} className="bg-card border-0 shadow-md card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-muted-foreground font-medium">Siga-nos:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-card shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card with Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={contactPool} 
              alt="Piscina residencial com água cristalina" 
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/40" />
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
                  Atendimento rápido pelo WhatsApp
                </h3>
                <p className="text-primary-foreground/90 mb-8 max-w-md mx-auto">
                  Tire suas dúvidas, faça seu pedido ou solicite um orçamento 
                  diretamente pelo nosso WhatsApp.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <a
                    href="https://wa.me/5519997867681"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
