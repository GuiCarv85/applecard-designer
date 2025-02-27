
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Vencimento = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const days = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Escolha o melhor dia</h1>
        </div>

        <p className="text-muted-foreground">
          Selecione a melhor data para o vencimento da sua fatura
        </p>

        <div className="grid grid-cols-4 gap-3">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`p-4 rounded-xl text-center transition-all ${
                selectedDay === day
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-3 pt-6">
          <button
            onClick={() => navigate("/cor-cartao")}
            disabled={!selectedDay}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-center w-full text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Vencimento;
