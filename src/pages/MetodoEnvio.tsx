
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Package, Rocket } from "lucide-react";

const MetodoEnvio = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const methods = [
    {
      id: "sedex",
      icon: Rocket,
      name: "Sedex",
      price: 34.90,
      time: "1 dia útil"
    },
    {
      id: "express",
      icon: Truck,
      name: "Express",
      price: 29.58,
      time: "5 dias úteis"
    },
    {
      id: "pac",
      icon: Package,
      name: "PAC",
      price: 27.97,
      time: "10 dias úteis"
    }
  ];

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
          <h1 className="text-2xl font-semibold">Método de Envio</h1>
        </div>

        <div className="space-y-4">
          {methods.map((method) => (
            <motion.button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full p-4 rounded-xl flex items-start gap-4 transition-all ${
                selectedMethod === method.id
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <method.icon className={`w-8 h-8 shrink-0 ${
                selectedMethod === method.id ? "text-white" : "text-primary"
              }`} />
              <div className="flex-1 text-left">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium">{method.name}</h3>
                  <span className="font-medium">
                    R$ {method.price.toFixed(2)}
                  </span>
                </div>
                <p className={`text-sm ${
                  selectedMethod === method.id ? "text-white/80" : "text-muted-foreground"
                }`}>
                  Entrega em {method.time}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/confirmacao")}
            disabled={!selectedMethod}
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

export default MetodoEnvio;
