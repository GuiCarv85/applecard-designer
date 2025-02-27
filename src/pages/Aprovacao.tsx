
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";

const Aprovacao = () => {
  const navigate = useNavigate();
  const approvedLimit = 4200; // Este valor deve ser calculado baseado na renda informada menos R$300

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto"
        >
          <Sparkles className="w-12 h-12 text-green-500" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">
            Parabéns! Seu cartão foi aprovado!
          </h1>
          <p className="text-2xl text-primary font-medium">
            Limite aprovado: R$ {approvedLimit.toLocaleString('pt-BR')}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Benefícios inclusos:</h3>
          <ul className="space-y-3">
            {[
              "Sem consulta ao SPC/Serasa",
              "Sem anuidade",
              "Cashback em todas as compras",
              "Programa de pontos exclusivo"
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

        <div className="space-y-3">
          <button
            onClick={() => navigate("/beneficios")}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Continuar
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Aprovacao;
