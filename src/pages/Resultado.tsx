
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CardPreview } from "@/components/ui/card-preview";
import { Check, PartyPopper } from "lucide-react";

const Resultado = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto glass p-8 rounded-2xl"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <PartyPopper className="w-8 h-8 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Parabéns! Seu cartão foi aprovado!</h1>
            <p className="text-muted-foreground">
              Seu limite aprovado é de R$ 4.800,00
            </p>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <CardPreview name="Guilherme Amaral Carvalho" />
          </div>

          <div className="space-y-4 w-full max-w-md">
            <h3 className="text-xl font-medium">Benefícios inclusos:</h3>
            <ul className="space-y-3">
              {[
                "Cashback de 2% em todas as compras",
                "Programa de pontos premium",
                "Seguro viagem internacional",
                "Acesso a salas VIP em aeroportos"
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Resultado;
