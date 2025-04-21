
const Footer = () => {
  return (
    <footer className="bg-accent py-6 mt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-primary">El Dilema Digital</h2>
            <p className="text-sm text-muted-foreground">
              Un análisis ético sobre diseño persuasivo y manipulación digital
            </p>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p className="text-muted-foreground mb-1">Proyecto académico sobre ética digital</p>
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
