
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, ShoppingCart, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

interface EcommerceDemoProps {
  setActiveDemoId: (id: string) => void;
}

const EcommerceDemo = ({ setActiveDemoId }: EcommerceDemoProps) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos
  const [stockLeft, setStockLeft] = useState(3);
  const [watching, setWatching] = useState(27);
  const [cartCount, setCartCount] = useState(0);
  const [price, setPrice] = useState(499);
  const [originalPrice, setOriginalPrice] = useState(999);
  const [discount, setDiscount] = useState(50);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Timer que reduce el tiempo restante
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        
        // Aleatoriamente aumenta las personas viendo el producto
        if (Math.random() > 0.9) {
          setWatching(prev => prev + Math.floor(Math.random() * 3) + 1);
        }
        
        // Aleatoriamente reduce el stock
        if (timeLeft % 60 === 0 && stockLeft > 1) {
          setStockLeft(prev => prev - 1);
          toast({
            title: "¡Rápido! ¡Se está agotando!",
            description: `Solo quedan ${stockLeft - 1} unidades disponibles`,
            variant: "destructive",
          });
        }
        
        // Incrementa la urgencia reduciendo el descuento con el tiempo
        if (timeLeft % 90 === 0 && discount > 30) {
          const newDiscount = discount - 5;
          setDiscount(newDiscount);
          setPrice(Math.round(originalPrice * (1 - newDiscount/100)));
          
          toast({
            title: "¡El precio está subiendo!",
            description: `El descuento ha bajado al ${newDiscount}%`,
            variant: "default",
          });
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, stockLeft, discount, originalPrice]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setStockLeft(prev => prev - 1);
    setShowExplanation(true);
    
    toast({
      title: "¡Producto añadido!",
      description: "Has caído en la técnica de urgencia artificial.",
      variant: "default",
    });
    
    if (stockLeft <= 1) {
      // Restablecer la demo después de unos segundos
      setTimeout(() => {
        setStockLeft(3);
        setTimeLeft(300);
        setDiscount(50);
        setPrice(499);
      }, 5000);
    }
  };

  // Formato del tiempo restante
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Calcular descuento remanente
  const discountPercent = Math.round((originalPrice - price) / originalPrice * 100);

  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="bg-gradient-to-r from-red-400 to-orange-300 text-white">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">FlashSale</h3>
          {cartCount > 0 && (
            <Badge className="bg-white text-red-500">{cartCount}</Badge>
          )}
        </div>
        <p className="text-sm opacity-90">Urgencia artificial y escasez</p>
      </CardHeader>

      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-destructive">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Oferta termina en: {formatTime()}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {watching} personas viendo este producto
            </Badge>
          </div>
          
          <Progress value={(timeLeft / 300) * 100} className="h-1" />
        </div>
        
        <div className="bg-accent p-4 rounded-lg mb-4 text-center">
          <h3 className="font-medium mb-2">Smartwatch Ultra X3</h3>
          
          {stockLeft <= 2 && (
            <div className="flex items-center justify-center text-destructive text-xs mb-2">
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span>¡Solo quedan {stockLeft} unidades!</span>
            </div>
          )}
          
          <div className="mb-3">
            <span className="text-2xl font-bold text-primary">{price}€</span>
            <span className="text-sm line-through text-muted-foreground ml-2">{originalPrice}€</span>
            <Badge className="ml-2 bg-destructive">-{discountPercent}%</Badge>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            disabled={stockLeft === 0}
            className="w-full bg-primary hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {stockLeft > 0 ? "¡Comprar ahora!" : "Agotado"}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          <p>
            * Este producto está en oferta por tiempo limitado.
            Los precios pueden subir en cualquier momento.
          </p>
        </div>
      </CardContent>

      {showExplanation && (
        <CardFooter className="bg-destructive/10 p-3 text-xs">
          <p>
            <strong>Técnica persuasiva:</strong> La escasez artificial, contadores regresivos y variación
            de precios están diseñados para generar FOMO (miedo a perderse algo) y provocar compras impulsivas.
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default EcommerceDemo;
