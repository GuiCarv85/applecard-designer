
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Award, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";

const Gerente = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl space-y-6"
      >
        <div className="flex items-center gap-3">
          <User className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Sua Gerente Exclusiva</h1>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-16 h-16 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-medium">Ana Silva</h2>
            <p className="text-sm text-muted-foreground">Gerente de Relacionamento</p>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">Melhor Gerente 2023-2024</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm">WhatsApp para contato direto</span>
          </div>
          <Input
            type="tel"
            placeholder="Digite seu WhatsApp"
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/endereco")}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
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

export default Gerente;
