
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const facts = [
  "Scroll infinito: El usuario promedio hace scroll en redes más de 91 metros por día.",
  "Urgencia artificial: Mensajes como 'Te quedan 5 minutos' aumentan compras por impulso en un 26%.",
  "Dark patterns: Muchas apps esconden la opción de cancelar la suscripción de manera intencionada.",
  "El 70% de los usuarios no identifica cuando está siendo manipulado digitalmente.",
];

const ManipulacionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 neumor-card bg-white/80 rounded-2xl shadow-lg animate-fade-in">
      <Button variant="ghost" className="mb-7" onClick={() => navigate("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-destructive to-primary text-transparent bg-clip-text mb-5">El lado oscuro del diseño digital</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Detrás de cada interfaz atractiva, existen técnicas para manipular tu atención y tus decisiones. <span className="text-destructive font-semibold">¡No todo es tan inocente como parece!</span>
      </p>
      <div className="bg-gradient-to-r from-destructive/10 to-accent/30 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Datos que impactan:</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          {facts.map((fact, ix) => (
            <li key={ix} className="font-medium">{fact}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6 p-4 rounded-lg bg-destructive/15">
        <p className="font-semibold text-lg text-destructive">¡Exige transparencia, y protege tu mente y tus datos!</p>
      </div>
    </div>
  );
};

export default ManipulacionPage;
