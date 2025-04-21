
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
