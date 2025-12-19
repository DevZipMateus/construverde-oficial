import { ArrowRight, Sparkles, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VitrineSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#7bff23]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#7bff23]/10 backdrop-blur-sm border border-[#7bff23]/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-[#7bff23]" />
            <span className="text-[#7bff23] text-sm font-medium">
              Novidades em destaque
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-up">
            Conheça nossa{" "}
            <span style={{ color: "#7bff23" }}>Vitrine</span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Explore nossa seleção especial de produtos para manutenção de piscinas. 
            Qualidade, sustentabilidade e os melhores preços você encontra aqui.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#7bff23]/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7bff23]/20">
                <ShoppingBag className="h-6 w-6 text-[#7bff23]" />
              </div>
              <h3 className="text-white font-semibold">Produtos Selecionados</h3>
              <p className="text-slate-400 text-sm">Os melhores itens para sua piscina</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#7bff23]/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7bff23]/20">
                <Sparkles className="h-6 w-6 text-[#7bff23]" />
              </div>
              <h3 className="text-white font-semibold">Ofertas Especiais</h3>
              <p className="text-slate-400 text-sm">Preços imperdíveis toda semana</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#7bff23]/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7bff23]/20">
                <Eye className="h-6 w-6 text-[#7bff23]" />
              </div>
              <h3 className="text-white font-semibold">Fácil Navegação</h3>
              <p className="text-slate-400 text-sm">Encontre o que precisa rapidamente</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              asChild 
              className="group bg-[#7bff23] hover:bg-[#6ae01f] text-slate-900"
            >
              <Link to="/vitrine">
                Compre online
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
