
const Header = () => {
  // scroll suave a la sección
  const handleScroll = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">El Dilema Digital</h1>
          <p className="text-sm opacity-90">
            Persuasión y Manipulación en el Diseño Digital
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => handleScroll("#sobre-proyecto")}
            className="text-sm cursor-pointer hover:underline bg-transparent border-0 p-0 m-0"
            type="button"
          >
            Sobre el proyecto
          </button>
          <button
            onClick={() => handleScroll("#recursos")}
            className="text-sm cursor-pointer hover:underline bg-transparent border-0 p-0 m-0"
            type="button"
          >
            Recursos
          </button>
          <button
            onClick={() => handleScroll("#contacto")}
            className="text-sm cursor-pointer hover:underline bg-transparent border-0 p-0 m-0"
            type="button"
          >
            Contacto
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
