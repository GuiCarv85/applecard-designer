
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Clock } from "lucide-react";

const Entrega = () => {
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
          <Truck className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Entrega</h1>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-secondary rounded-xl">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Entrega Expressa</h3>
                <p className="text-sm text-muted-foreground">
                  Seu cartão será enviado pelos Correios em até 1 dia útil após a confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/gerente")}
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

export default Entrega;
