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
      
      <main className="flex-1 pt-20 overflow-hidden">
        <iframe
          src="https://construrverde.egestor.com.br/vitrine/"
          title="Vitrine Construverde"
          className="w-full h-full border-none"
        />
      </main>
    </div>
  );
};

export default Vitrine;
