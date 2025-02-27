
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Clock, CreditCard } from "lucide-react";

const Beneficios = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Benefícios do Pagamento em Dia
          </h1>
          <p className="text-muted-foreground">
            Mantenha seus pagamentos em dia e aproveite vantagens exclusivas
          </p>
        </div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 p-4 bg-secondary rounded-xl"
          >
            <TrendingUp className="w-10 h-10 text-primary" />
            <div>
              <h3 className="font-medium mb-1">Aumento de Limite</h3>
              <p className="text-sm text-muted-foreground">
                A cada 3 meses de pagamentos em dia, seu limite pode aumentar automaticamente
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 p-4 bg-secondary rounded-xl"
          >
            <Clock className="w-10 h-10 text-primary" />
            <div>
              <h3 className="font-medium mb-1">Flexibilidade no Pagamento</h3>
              <p className="text-sm text-muted-foreground">
                Escolha a melhor data de vencimento para seu cartão
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 p-4 bg-secondary rounded-xl"
          >
            <CreditCard className="w-10 h-10 text-primary" />
            <div>
              <h3 className="font-medium mb-1">Score de Crédito</h3>
              <p className="text-sm text-muted-foreground">
                Melhore seu histórico de crédito e aumente suas chances de aprovação em outros serviços
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/vencimento")}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Escolher data de vencimento
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

export default Beneficios;
