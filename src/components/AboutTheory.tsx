import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutTheory = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Marco Teórico</h2>
      
      <Tabs defaultValue="fogg">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fogg">Modelo de Fogg</TabsTrigger>
          <TabsTrigger value="dopamine">Economía de la Dopamina</TabsTrigger>
          <TabsTrigger value="maquiavelo">Maquiavelo Digital</TabsTrigger>
        </TabsList>
        
        <TabsContent value="fogg" className="mt-4 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">El Modelo de Comportamiento de Fogg (FBM)</h3>
              
              <div className="prose max-w-none">
                <p>
                  Desarrollado por B.J. Fogg de la Universidad de Stanford, este modelo explica que un comportamiento 
                  ocurre cuando tres elementos convergen al mismo tiempo:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <strong className="text-primary">Motivación:</strong> El deseo o razón para realizar la acción. 
                    Las aplicaciones manipulan la motivación a través de recompensas sociales, miedo a perderse algo (FOMO), 
                    o deseos de logro.
                  </li>
                  <li>
                    <strong className="text-primary">Habilidad:</strong> La capacidad y facilidad para realizar la acción. 
                    Las interfaces están diseñadas para ser extremadamente simples, eliminando fricción y esfuerzo.
                  </li>
                  <li>
                    <strong className="text-primary">Disparador:</strong> La señal que indica al usuario que debe actuar ahora. 
                    Las notificaciones, alertas y recordatorios funcionan como disparadores efectivos.
                  </li>
                </ul>
                
                <p className="mt-3">
                  Cuando una aplicación optimiza estos tres elementos, puede influir efectivamente en el comportamiento 
                  del usuario, creando hábitos que benefician a la plataforma pero que el usuario no siempre elige conscientemente.
                </p>
                
                <div className="bg-accent p-4 rounded-lg mt-4">
                  <p className="italic text-sm">
                    "Para que un comportamiento ocurra, debe existir suficiente motivación, suficiente habilidad (simplicidad)
                    y un disparador efectivo. Si falta cualquiera de estos elementos, el comportamiento no ocurrirá."
                    — B.J. Fogg
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dopamine" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Economía de la Dopamina</h3>
              
              <div className="prose max-w-none">
                <p>
                  La dopamina es un neurotransmisor asociado con el placer y la recompensa, fundamental para la formación 
                  de hábitos. Las aplicaciones digitales están diseñadas estratégicamente para activar su liberación:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <strong className="text-primary">Recompensas variables:</strong> La incertidumbre sobre cuándo y qué 
                    recompensa recibiremos (likes, comentarios, notificaciones) genera mayor liberación de dopamina que 
                    las recompensas predecibles.
                  </li>
                  <li>
                    <strong className="text-primary">Bucles de retroalimentación:</strong> Cada interacción con la app genera 
                    una pequeña dosis de dopamina, creando un ciclo de búsqueda constante de más estímulos.
                  </li>
                  <li>
                    <strong className="text-primary">Validación social:</strong> Las reacciones a nuestras publicaciones 
                    activan el sistema de recompensa, creando una dependencia a la aprobación externa.
                  </li>
                </ul>
                
                <p className="mt-3">
                  En comercio electrónico, las ofertas por tiempo limitado y descuentos activan este mismo sistema de recompensa, 
                  generando una sensación de urgencia y satisfacción inmediata al realizar una compra, similar a lo que ocurre 
                  en los juegos de azar.
                </p>
                
                <div className="bg-secondary p-4 rounded-lg mt-4">
                  <p className="italic text-sm">
                    "Las redes sociales no crean adicción por accidente, sino por diseño. Utilizan los mismos mecanismos 
                    neuronales que los casinos para maximizar el tiempo que pasamos en sus plataformas."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="maquiavelo" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Maquiavelo y el Diseño Digital</h3>
              
              <div className="prose max-w-none">
                <p>
                  En su obra "El Príncipe", Nicolás Maquiavelo argumentaba que para mantener el poder, los gobernantes 
                  debían manipular la percepción pública, creando la ilusión de libertad mientras ejercían control.
                </p>
                
                <p className="mt-3">
                  Las aplicaciones digitales modernas operan bajo principios similares:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <strong className="text-primary">Control invisible:</strong> Las mejores manipulaciones son las que el usuario 
                    no percibe como tales. Las aplicaciones presentan opciones que parecen libres, pero están cuidadosamente diseñadas 
                    para guiar hacia comportamientos específicos.
                  </li>
                  <li>
                    <strong className="text-primary">Ilusión de elección:</strong> Al igual que Maquiavelo recomendaba mantener 
                    la apariencia de libertad, las aplicaciones nos hacen sentir que tomamos decisiones cuando en realidad 
                    estamos siguiendo patrones prediseñados.
                  </li>
                  <li>
                    <strong className="text-primary">Explotación de debilidades:</strong> Maquiavelo sugería conocer y explotar 
                    las debilidades humanas; las aplicaciones digitales identifican y aprovechan nuestros sesgos cognitivos y 
                    vulnerabilidades psicológicas.
                  </li>
                </ul>
                
                <div className="bg-destructive/10 p-4 rounded-lg mt-4">
                  <p className="italic text-sm">
                    "Los hombres deben ser adulados o eliminados, porque se vengarán de las ofensas leves, pero no de las graves."
                    — Maquiavelo, adaptado al diseño digital: "Los usuarios deben ser recompensados constantemente o perderán interés, 
                    porque reaccionarán a pequeñas frustraciones abandonando la plataforma, pero tolerarán manipulaciones mayores 
                    si están envueltas en gratificaciones."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AboutTheory;
