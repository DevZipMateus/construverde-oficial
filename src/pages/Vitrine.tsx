import Header from "@/components/Header";
import { useEffect } from "react";

const Vitrine = () => {
  useEffect(() => {
    // Lock body scroll when component mounts
    document.body.style.overflow = "hidden";
    
    // Restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header - 80px height */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Iframe container - takes remaining space minus badge (63px) */}
      <div className="flex-1" style={{ height: "calc(100vh - 80px - 63px)" }}>
        <iframe
          src="https://construrverde.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default Vitrine;
