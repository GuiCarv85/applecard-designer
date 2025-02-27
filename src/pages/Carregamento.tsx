
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2 } from "lucide-react";

const Carregamento = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/aprovacao");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md w-full glass p-8 rounded-2xl text-center space-y-8"
      >
        <div className="relative w-24 h-24 mx-auto">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CreditCard className="w-full h-full text-primary" />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <CheckCircle2 className="w-full h-full text-green-500" />
          </motion.div>
        </div>

        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold">Analisando seu perfil</h2>
            <p className="text-muted-foreground">
              Aguarde enquanto processamos suas informações...
            </p>
          </motion.div>
        </div>

        <motion.div
          className="h-1 bg-secondary rounded-full overflow-hidden"
          initial={{ width: "100%" }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carregamento;
