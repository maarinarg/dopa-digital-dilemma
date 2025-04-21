
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, ShoppingBag, Smartphone } from "lucide-react";

const PrincipalContent = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          El Dilema Digital
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
          Un análisis interactivo sobre cómo las aplicaciones móviles utilizan técnicas persuasivas para influir en nuestro comportamiento
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-accent p-6">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Diseño Persuasivo y Dopamina</h2>
              <p className="text-muted-foreground">
                Explora cómo las aplicaciones explotan los circuitos de recompensa de nuestro cerebro para mantenernos enganchados, liberando dopamina con cada notificación, like o recompensa.
              </p>
              <Button variant="link" className="mt-4 p-0 text-primary flex items-center">
                Aprender más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-secondary p-6">
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Manipulación Digital</h2>
              <p className="text-muted-foreground">
                Descubre las técnicas que utilizan las aplicaciones para influir en tu comportamiento, desde el scroll infinito hasta los dark patterns de urgencia artificial.
              </p>
              <Button variant="link" className="mt-4 p-0 text-primary flex items-center">
                Explorar ejemplos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-secondary p-8 rounded-lg text-center mt-12">
        <ShoppingBag className="h-12 w-12 mx-auto text-primary mb-4" />
        <h2 className="text-2xl font-bold mb-3">Experimente las Técnicas de Persuasión</h2>
        <p className="max-w-2xl mx-auto mb-6">
          A través de nuestras demostraciones interactivas, podrás experimentar de primera mano cómo estas técnicas influyen en tu percepción y comportamiento digital.
        </p>
        <Button className="bg-primary hover:bg-primary/90">Ver demostraciones</Button>
      </div>
    </div>
  );
};

export default PrincipalContent;
