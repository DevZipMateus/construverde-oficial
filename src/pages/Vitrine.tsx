import Header from "@/components/Header";

const Vitrine = () => {

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className="flex-1 pt-20">
        <iframe
          src="https://construrverde.egestor.com.br/vitrine/"
          title="Vitrine Construverde"
          className="w-full h-[calc(100vh-5rem)] border-none"
        />
      </main>
    </div>
  );
};

export default Vitrine;
