
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, ShoppingCart, CreditCard, Wallet } from "lucide-react";

const Interesses = () => {
  const navigate = useNavigate();
  const options = [
    {
      icon: ShoppingCart,
      title: "Fazer compras",
      description: "Usar em lojas físicas e online"
    },
    {
      icon: CreditCard,
      title: "Ter crédito",
      description: "Aumentar meu poder de compra"
    },
    {
      icon: Target,
      title: "Construir histórico",
      description: "Melhorar meu score de crédito"
    },
    {
      icon: Wallet,
      title: "Organizar finanças",
      description: "Centralizar gastos em um cartão"
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
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Qual o seu interesse com um cartão de crédito hoje?
          </h1>
          <p className="text-muted-foreground">
            Selecione a opção que melhor representa seu objetivo
          </p>
        </div>

        <div className="grid gap-4">
          {options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate("/carregamento")}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Interesses;
