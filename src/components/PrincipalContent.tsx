
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, ShoppingBag, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PrincipalContent = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState("");

  // Info de los bloques y rutas
  const cards = [
    {
      id: "dopamina",
      title: "Diseño Persuasivo y Dopamina",
      desc:
        "¿Sabías que cada notificación que recibes activa circuitos de recompensa en tu cerebro? Las apps modernas están diseñadas para engancharte, liberando dopamina y generando adicción silenciosa.",
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      color: "from-primary/30 to-accent/80",
      popup: "¡Cuidado! Las notificaciones constantes pueden manipular tu bienestar emocional.",
      to: "/dopamina",
    },
    {
      id: "manipulacion",
      title: "Manipulación Digital",
      desc:
        "Los dark patterns y el scroll infinito no son casualidad: son estrategias diseñadas para mantenerte atrapado y tomar decisiones sin darte cuenta.",
      icon: <Smartphone className="h-12 w-12 text-primary mb-4" />,
      color: "from-pink-200/20 to-purple-200/80",
      popup: "¡Atento! Muchas apps explotan sesgos psicológicos para dirigir tus acciones.",
      to: "/manipulacion",
    },
    {
      id: "demostracion",
      title: "Experimenta las Técnicas de Persuasión",
      desc:
        "Interactúa y descubre en primera persona cómo las apps influyen en tus decisiones. ¡Abre los ojos ante las estrategias ocultas! ",
      icon: <ShoppingBag className="h-12 w-12 mx-auto text-primary mb-4" />,
      color: "from-yellow-100/60 to-primary/40",
      popup: "¡Impactante! Muchos hábitos digitales NO son tan libres como crees.",
      to: "/demostracion",
    },
  ];

  // Click en card: popup y navegación
  const handleCardClick = (card: any) => {
    setClicked(card.id);
    toast({
      title: card.title,
      description: card.popup,
      variant: "default",
    });
    setTimeout(() => navigate(card.to), 900); // Tiempo breve para ver el popup
  };

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 drop-shadow">
          El Dilema Digital
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
          Un análisis interactivo sobre cómo las aplicaciones móviles utilizan técnicas persuasivas para influir en nuestro comportamiento
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {cards.map((card) => (
          <Card
            key={card.id}
            tabIndex={0}
            role="button"
            className={
              `transition-transform hover:scale-105 active:scale-98 cursor-pointer border-0 shadow-lg bg-gradient-to-br ${card.color} glass
               neumor-card relative animate-fade-in 
               hover:ring-4 hover:ring-primary/40 hover:bg-white/50`
            }
            style={{
              boxShadow: "8px 8px 18px #e3dfff, -8px -8px 18px #ffffff, 0 6px 24px rgba(70,18,128,.12)",
              borderRadius: "1.6rem",
              minHeight: "320px"
            }}
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => { if (e.key === "Enter") handleCardClick(card)}}
          >
            <CardContent className="flex flex-col items-center text-center pt-10 pb-8 px-6">
              {card.icon}
              <h2 className="text-2xl font-bold mb-2 text-gradient">{card.title}</h2>
              <p className="text-muted-foreground mb-5">
                {card.desc}
              </p>
              <Button
                variant="link"
                tabIndex={-1}
                className="text-primary flex items-center font-semibold underline-offset-4 hover:underline"
                onClick={e => {e.stopPropagation(); handleCardClick(card)}}
              >
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="absolute right-4 top-5 animate-pulse z-10">
                {(card.id === "dopamina") && (
                  <span className="bg-primary/90 text-xs text-white px-2 py-1 rounded shadow">¡Alerta!</span>
                )}
                {(card.id === "manipulacion") && (
                  <span className="bg-destructive text-xs text-white px-2 py-1 rounded shadow">¡Cuidado!</span>
                )}
                {(card.id === "demostracion") && (
                  <span className="bg-yellow-400/80 text-xs text-black px-2 py-1 rounded shadow">¡Descúbrelo!</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrincipalContent;
