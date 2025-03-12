
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Termos = () => {
  const navigate = useNavigate();
  
  // Função para navegar sem alterar a URL
  const navigateWithoutChangingURL = (path: string) => {
    window.history.pushState({ prevPath: window.location.pathname }, '', window.location.pathname);
    navigate(path, { replace: true });
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
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Termos e Condições</h1>
        </div>

        <div className="prose prose-sm max-w-none">
          <p>
            Ao prosseguir com a solicitação do cartão AprovaCard, você concorda com os seguintes termos:
          </p>
          <ul className="space-y-2 list-disc pl-4">
            <li>A aprovação do seu cartão está sujeita à análise de crédito;</li>
            <li>Os dados fornecidos serão verificados para garantir a segurança;</li>
            <li>O limite inicial será definido com base nas informações fornecidas;</li>
            <li>Você poderá solicitar aumento de limite após 3 meses de uso;</li>
            <li>As informações pessoais serão tratadas conforme nossa política de privacidade.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigateWithoutChangingURL("/cadastro")}
            className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Aceitar e Continuar
          </button>
          <button
            onClick={() => navigateWithoutChangingURL("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Termos;
