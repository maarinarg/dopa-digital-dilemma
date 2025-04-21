
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Gift, Lock, Star, Gem } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

interface GamesDemoProps {
  setActiveDemoId: (id: string) => void;
}

const GamesDemo = ({ setActiveDemoId }: GamesDemoProps) => {
  const [chestOpened, setChestOpened] = useState(0);
  const [rewards, setRewards] = useState<string[]>([]);
  const [diamonds, setDiamonds] = useState(50);
  const [progress, setProgress] = useState(70);
  const [showExplanation, setShowExplanation] = useState(false);

  // Simular apertura de cofre con recompensa aleatoria
  const handleOpenChest = () => {
    // Gastar diamantes
    setDiamonds(prev => Math.max(0, prev - 25));
    setChestOpened(prev => prev + 1);
    
    // Probabilidad de obtener recompensa buena
    const roll = Math.random() * 100;
    let reward = "";
    
    if (roll < 2) {
      // 2% de probabilidad de premio premium
      reward = "¡Premio legendario! +500 puntos";
      setProgress(100);
    } else if (roll < 15) {
      // 13% de probabilidad de premio bueno
      reward = "¡Premio especial! +100 puntos";
      setProgress(prev => Math.min(100, prev + 30));
    } else {
      // 85% de probabilidad de premio común
      reward = "Premio común. +10 puntos";
      setProgress(prev => Math.min(100, prev + 10));
    }
    
    setRewards(prev => [reward, ...prev].slice(0, 3));
    
    // Si es el primer cofre, mostrar explicación
    if (chestOpened === 0) {
      setTimeout(() => {
        setShowExplanation(true);
      }, 1000);
    }
    
    // Notificar al usuario
    toast({
      title: "Cofre abierto",
      description: reward,
      variant: "default",
    });
    
    // Otorgar diamantes gratis después de varios intentos para incentivar seguir jugando
    if (chestOpened === 2 && diamonds < 25) {
      setTimeout(() => {
        setDiamonds(prev => prev + 30);
        toast({
          title: "¡Regalo especial!",
          description: "Has recibido 30 diamantes gratis",
          variant: "default",
        });
      }, 1000);
    }
  };

  // Función para comprar diamantes
  const handleBuyDiamonds = () => {
    setDiamonds(prev => prev + 100);
    toast({
      title: "Compra realizada",
      description: "Has comprado 100 diamantes",
      variant: "default",
    });
  };

  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <h3 className="font-bold text-lg">TreasureQuest</h3>
        <p className="text-sm opacity-90">Recompensas aleatorias y microtransacciones</p>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Gem className="h-5 w-5 text-blue-500 mr-1" />
            <span className="font-bold">{diamonds}</span>
          </div>
          <Badge className="bg-purple-100 text-primary">
            Nivel: {Math.floor(progress / 20) + 1}
          </Badge>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Progreso de nivel</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="bg-accent rounded-lg p-4 mb-4 text-center">
          <Gift className="h-12 w-12 mx-auto text-primary mb-2" />
          <h3 className="font-medium mb-3">¡Abre un cofre de tesoro!</h3>
          
          <Button 
            onClick={handleOpenChest}
            disabled={diamonds < 25}
            className="w-full mb-2"
          >
            <Gem className="h-4 w-4 mr-2 text-blue-300" />
            Abrir por 25 diamantes
          </Button>
          
          {diamonds < 25 && (
            <Button 
              variant="outline" 
              onClick={handleBuyDiamonds} 
              className="w-full mt-2"
            >
              Comprar 100 diamantes
            </Button>
          )}
        </div>
        
        {rewards.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Últimas recompensas:</h4>
            {rewards.map((reward, index) => (
              <div key={index} className="text-xs p-2 bg-secondary rounded flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                {reward}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[1,2,3].map((level) => (
            <div 
              key={level} 
              className="border rounded-md p-3 text-center flex flex-col items-center"
            >
              <span className="text-xs mb-1">Nivel {level + 3}</span>
              {level <= Math.floor(progress / 20) - 2 ? (
                <Star className="h-5 w-5 text-yellow-500" />
              ) : (
                <Lock className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </CardContent>

      {showExplanation && (
        <CardFooter className="bg-destructive/10 p-3 text-xs">
          <p>
            <strong>Técnica persuasiva:</strong> Las recompensas aleatorias y los sistemas de progresión 
            están diseñados para crear patrones de adicción similar a los de las máquinas tragamonedas, 
            incentivando las microtransacciones.
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default GamesDemo;
