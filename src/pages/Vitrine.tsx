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
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      <main className="flex-1 overflow-hidden relative">
        <iframe
          src="https://construrverde.egestor.com.br/vitrine/"
          title="Vitrine Construverde"
          className="w-full h-full border-none"
        />
        {/* Overlay para esconder badge do MonteSite */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-background z-10" />
      </main>
    </div>
  );
};

export default Vitrine;
