
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import PrincipalContent from "@/components/PrincipalContent";
import SocialMediaDemo from "@/components/demos/SocialMediaDemo";
import EcommerceDemo from "@/components/demos/EcommerceDemo";
import GamesDemo from "@/components/demos/GamesDemo";
import AboutTheory from "@/components/AboutTheory";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeDemoId, setActiveDemoId] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container px-4 py-6 md:py-10">
        <PrincipalContent />
        <Tabs defaultValue="demos" className="mt-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="demos">Demostraciones</TabsTrigger>
            <TabsTrigger value="theory">Marco Teórico</TabsTrigger>
            <TabsTrigger value="ethics">Reflexión Ética</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demos" className="mt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Experimenta el Diseño Persuasivo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SocialMediaDemo setActiveDemoId={setActiveDemoId} />
              <EcommerceDemo setActiveDemoId={setActiveDemoId} />
              <GamesDemo setActiveDemoId={setActiveDemoId} />
            </div>
          </TabsContent>
          
          <TabsContent value="theory" className="mt-6">
            <AboutTheory />
          </TabsContent>
          
          <TabsContent value="ethics" className="mt-6 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Reflexión Ética: Persuasión vs. Manipulación</h2>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">El Dilema del Diseñador Digital</h3>
              <p className="mb-4">¿Dónde está la línea entre influir y manipular? La persuasión es una herramienta legítima del diseño y marketing, pero cuando se utiliza para explotar vulnerabilidades psicológicas sin que el usuario sea consciente, entramos en territorio ético cuestionable.</p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                "El mejor control es el que no se percibe como control." — Inspirado en Maquiavelo
              </blockquote>
              
              <p>Al igual que en <em>El Príncipe</em> de Maquiavelo, las aplicaciones modernas a menudo buscan no solo satisfacer necesidades, sino también manipular comportamientos de forma que el usuario no percibe.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-destructive/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-destructive">Prácticas Cuestionables</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Crear artificialmente sensación de urgencia y escasez</li>
                  <li>Diseñar patrones de adicción conscientes</li>
                  <li>Ocultar información relevante para la toma de decisiones</li>
                  <li>Utilizar dark patterns que confunden al usuario</li>
                </ul>
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-primary">Alternativas Éticas</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Diseño centrado en el bienestar del usuario</li>
                  <li>Transparencia en algoritmos y procesos</li>
                  <li>Proporcionar control real sobre la experiencia</li>
                  <li>Crear valor genuino en lugar de dependencia</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        {/* Bloques informativos al final, anclados */}
        <section className="mt-16 space-y-8 mb-12">
          {/* SOBRE EL PROYECTO */}
          <div
            id="sobre-proyecto"
            className="neumor-card glass rounded-2xl p-8 shadow-lg border-0 animate-fade-in"
          >
            <h2 className="text-2xl font-bold mb-3 text-gradient">
              Sobre el Proyecto
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              <strong>El Dilema Digital</strong> explora de forma interactiva y crítica cómo el diseño persuasivo condiciona la experiencia de usuario moderna. Nace con el propósito de generar conciencia sobre los mecanismos psicológicos y tecnológicos que, aunque a menudo invisibles, impactan nuestro día a día digital.
            </p>
            <ul className="list-disc pl-6 text-base">
              <li>
                Divulga conceptos del diseño persuasivo y los efectos en la sociedad.
              </li>
              <li>
                Proporciona ejemplos claros y visuales que ayudan a comprender cómo las apps moldean hábitos.
              </li>
              <li>
                Invita a la reflexión ética y personal sobre cómo interactuamos con la tecnología.
              </li>
            </ul>
          </div>
          {/* RECURSOS */}
          <div
            id="recursos"
            className="neumor-card glass rounded-2xl p-8 shadow-lg border-0 animate-fade-in bg-accent/60"
          >
            <h2 className="text-2xl font-bold mb-3 text-primary">Recursos</h2>
            <ul className="list-disc pl-6 text-base mb-3">
              <li>
                <a
                  href="https://es.bjfogg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >Modelo de Fogg - Behavioral Design</a>
              </li>
              <li>
                <a
                  href="https://www.hookedmodel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >Hooked: How to Build Habit-Forming Products (Nir Eyal)</a>
              </li>
              <li>
                <a
                  href="https://darkpatterns.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >Dark Patterns - Reconociendo manipulaciones en UX</a>
              </li>
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/Nicol%C3%A1s_Maquiavelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >Maquiavelo Digital - El Príncipe aplicado al siglo XXI</a>
              </li>
              <li>
                <a
                  href="https://www.netflix.com/title/81254224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >Documental: El dilema de las redes sociales (Netflix)</a>
              </li>
            </ul>
            <div className="text-base text-muted-foreground">
              Si quieres profundizar más, te recomendamos explorar <strong>libros, documentales y artículos científicos</strong> citados y enlazados anteriormente.
            </div>
          </div>
          {/* CONTACTO */}
          <div
            id="contacto"
            className="neumor-card glass rounded-2xl p-8 shadow-lg border-0 animate-fade-in bg-secondary/60"
          >
            <h2 className="text-2xl font-bold mb-3 text-gradient">Contacto</h2>
            <p className="text-md mb-2 text-muted-foreground">
              ¿Tienes sugerencias, comentarios o quieres colaborar? 
              <span className="block mt-2">
                Puedes escribirme directamente a:{" "}
                <a
                  href="mailto:info@dilemadigital.app"
                  className="underline hover:text-primary transition-colors"
                >info@dilemadigital.app</a>
              </span>
            </p>
            <p className="text-md text-muted-foreground">
              También puedes seguir el proyecto en redes sociales para actualizaciones y futuros desarrollos.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://twitter.com/intent/follow?screen_name=lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Twitter/X
              </a>
              <a
                href="https://discord.gg/URhQyFjuqu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Discord
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
