
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const consejos = [
  "Reflexiona antes de hacer scroll: ¿Realmente lo necesitas?",
  "Activa las notificaciones solo de lo importante.",
  "No te dejes llevar por la urgencia digital: La mayoría de las ofertas no son reales.",
  "¡Recuerda: Tú controlas la tecnología, no al revés!",
];

const DemostracionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 neumor-card bg-white/75 rounded-2xl shadow-lg animate-fade-in">
      <Button variant="ghost" className="mb-7" onClick={() => navigate("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-primary text-transparent bg-clip-text mb-3">¡Abre los ojos!</h1>
      <p className="mb-6 text-lg text-muted-foreground">Has visto cómo las apps pueden condicionar tu comportamiento. ¿Listo para el cambio?</p>
      <div className="bg-gradient-to-r from-yellow-100/50 to-accent/30 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Consejos para protegerte:</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          {consejos.map((c, ix) => (
            <li key={ix} className="font-medium">{c}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6 p-4 rounded-lg bg-primary/10">
        <p className="font-semibold text-lg text-primary">¡Haz tuyo el control digital y comparte el mensaje!</p>
      </div>
    </div>
  );
};

export default DemostracionPage;
