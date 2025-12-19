import { ArrowRight, Droplets, Leaf, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import heroLogo from "@/assets/hero-logo.png";

const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 via-sky-800/40 to-sky-900/55" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-primary-foreground/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-float" style={{
        animationDelay: "2s"
      }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Soluções sustentáveis para sua piscina
            </span>
          </div>

          {/* Main Title - H1 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 animate-slide-up">
            <img src={heroLogo} alt="Construverde Logo" className="h-20 md:h-20 lg:h-24 w-auto" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center" style={{ color: '#7bff23' }}>
              Construverde
            </h1>
          </div>

          {/* Subtitle - H2 */}
          <h2 className="text-xl md:text-2xl text-primary-foreground/90 font-normal max-w-2xl mx-auto mb-10 animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            Produtos de qualidade para manutenção de piscinas, unindo sustentabilidade, 
            economia e cuidado com o meio ambiente
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/vitrine">
                Compre conosco
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/5519997867681" target="_blank" rel="noopener noreferrer">
                Fale com especialista
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <div className="flex items-center gap-3 justify-center bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20">
                <Droplets className="h-5 w-5 text-accent" />
              </div>
              <span className="text-primary-foreground font-medium">Água cristalina</span>
            </div>
            <div className="flex items-center gap-3 justify-center bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <span className="text-primary-foreground font-medium">Produtos seguros</span>
            </div>
            <div className="flex items-center gap-3 justify-center bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20">
                <Leaf className="h-5 w-5 text-accent" />
              </div>
              <span className="text-primary-foreground font-medium">Sustentável</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-background" />
        </svg>
      </div>
    </section>;
};
export default Hero;