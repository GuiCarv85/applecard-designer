
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, MapPin, Truck } from "lucide-react";

const Confirmacao = () => {
  const navigate = useNavigate();
  const orderDetails = {
    shipping: {
      method: "Sedex",
      price: 34.90,
      address: "Rua Exemplo, 123 - Bairro - Cidade/UF"
    },
    card: {
      color: "Preto",
      name: "João Silva",
      dueDate: 10
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
          <CheckCircle className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Confirme seu pedido</h1>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Cartão
            </h3>
            <div className="bg-secondary p-4 rounded-xl space-y-2">
              <p>Cor: {orderDetails.card.color}</p>
              <p>Nome: {orderDetails.card.name}</p>
              <p>Vencimento: Todo dia {orderDetails.card.dueDate}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Endereço de entrega
            </h3>
            <div className="bg-secondary p-4 rounded-xl">
              <p>{orderDetails.shipping.address}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              Método de envio
            </h3>
            <div className="bg-secondary p-4 rounded-xl flex justify-between items-center">
              <span>{orderDetails.shipping.method}</span>
              <span className="font-medium">
                R$ {orderDetails.shipping.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t space-y-3">
          <button
            onClick={() => navigate("/pagamento")}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Sim, vou querer!
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

export default Confirmacao;
