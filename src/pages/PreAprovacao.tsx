
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const PreAprovacao = () => {
  const navigate = useNavigate();
  
  // Função para navegar sem alterar a URL
  const navigateWithoutChangingURL = (path: string) => {
    window.history.pushState({ prevPath: window.location.pathname }, '', window.location.pathname);
    navigate(path, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle className="w-12 h-12 text-green-500" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">
            Temos o cartão perfeito para você!
          </h1>
          <p className="text-muted-foreground">
            Com base no seu perfil, preparamos uma oferta especial.
          </p>
        </div>

        <button
          onClick={() => navigateWithoutChangingURL("/termos")}
          className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
        >
          Continuar
        </button>
      </motion.div>
    </div>
  );
};

export default PreAprovacao;
