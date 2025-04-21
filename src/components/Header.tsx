
const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">El Dilema Digital</h1>
          <p className="text-sm opacity-90">Persuasión y Manipulación en el Diseño Digital</p>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm cursor-pointer hover:underline">Sobre el proyecto</span>
          <span className="text-sm cursor-pointer hover:underline">Recursos</span>
          <span className="text-sm cursor-pointer hover:underline">Contacto</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
