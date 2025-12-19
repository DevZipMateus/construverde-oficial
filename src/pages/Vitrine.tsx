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
    <div className="h-screen w-full overflow-hidden">
      <Header />
      
      {/* Container do iframe com altura calculada */}
      <main 
        className="relative w-full"
        style={{ height: 'calc(100vh - 80px)', marginTop: '80px' }}
      >
        <iframe
          src="https://construrverde.egestor.com.br/vitrine/"
          title="Vitrine Construverde"
          className="absolute inset-0 w-full h-full border-none"
        />
        {/* Overlay para esconder badge do MonteSite */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background z-10" />
      </main>
    </div>
  );
};

export default Vitrine;
