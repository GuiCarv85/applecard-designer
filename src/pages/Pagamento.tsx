
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, DollarSign } from "lucide-react";

const Pagamento = () => {
  const navigate = useNavigate();
  const orderDetails = {
    shipping: {
      price: 34.90
    },
    card: {
      number: "**** **** **** 1234",
      name: "João Silva",
      color: "Preto"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl space-y-6"
      >
        <div className="flex items-center gap-3">
          <DollarSign className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Pagamento</h1>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
            <div className="absolute top-4 right-4">
              <div className="w-12 h-8 bg-yellow-400 rounded-md" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="font-medium mb-2">{orderDetails.card.name}</p>
              <p className="text-sm text-gray-300">{orderDetails.card.number}</p>
            </div>
          </div>

          <div className="bg-secondary p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Valor do frete</span>
              <span className="font-medium">
                R$ {orderDetails.shipping.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Pagar R$ {orderDetails.shipping.price.toFixed(2)}
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

export default Pagamento;
