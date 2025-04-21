
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const facts = [
  "El 90% de las apps sociales utilizan algoritmos para maximizar tu tiempo de uso.",
  "¡Los ‘Likes’ liberan dopamina, igual que el chocolate o el juego!",
  "Las notificaciones intermitentes crean dependencia y ansiedad.",
  "En promedio, recibimos 80 notificaciones al día (fuente: RescueTime).",
];

const DopaminaPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 neumor-card bg-white/80 rounded-2xl shadow-lg animate-fade-in">
      <Button variant="ghost" className="mb-7" onClick={() => navigate("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text mb-5">Cómo tu cerebro es hackeado</h1>
      <p className="mb-7 text-lg text-muted-foreground">Las apps explotan los sistemas de recompensa de tu cerebro, liberando dopamina cada vez que recibes un like, un mensaje o una notificación sorpresa. <strong className="font-semibold text-primary">¿Sabías que esta química es la misma que se libera al ganar un premio?</strong></p>
      <div className="bg-gradient-to-r from-primary/20 to-purple-200/15 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Datos reales:</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          {facts.map((fact, ix) => (
            <li key={ix} className="font-medium">{fact}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6 p-4 rounded-lg bg-primary/[.13]">
        <p className="font-semibold text-lg text-primary">¡El primer paso para liberarte es entender que tú eres el producto, y tu atención, el negocio!</p>
      </div>
    </div>
  );
};

export default DopaminaPage;
