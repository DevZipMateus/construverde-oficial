import Header from "@/components/Header";
import { useEffect } from "react";

const Vitrine = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      
      {/* Container fixo para o iframe - posicionado abaixo do header de 80px */}
      <div className="fixed top-20 left-0 right-0 bottom-0">
        <iframe
          src="https://construrverde.egestor.com.br/vitrine/"
          title="Vitrine Construverde"
          className="w-full h-full border-none"
        />
        {/* Overlay para esconder badge do MonteSite */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background z-10" />
      </div>
    </div>
  );
};

export default Vitrine;
