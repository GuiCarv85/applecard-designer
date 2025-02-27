
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const Cadastro = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    cardPassword: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.cardPassword !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (formData.cardPassword.length !== 4) {
      setError("A senha deve ter 4 dígitos");
      return;
    }

    navigate("/carregamento");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Complete seu cadastro</h1>
            <p className="text-muted-foreground">
              Preencha seus dados para análise de crédito
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome Completo
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-medium mb-2">
                CPF
              </label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                placeholder="Digite seu CPF"
                required
              />
            </div>

            <div>
              <label htmlFor="cardPassword" className="block text-sm font-medium mb-2">
                Senha do Cartão
              </label>
              <div className="relative">
                <Input
                  id="cardPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.cardPassword}
                  onChange={(e) => setFormData({ ...formData, cardPassword: e.target.value })}
                  placeholder="Digite uma senha de 4 dígitos"
                  maxLength={4}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirme a Senha
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirme a senha do cartão"
                  maxLength={4}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Consultar CPF
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-center w-full text-muted-foreground hover:text-foreground transition-colors"
            >
              Voltar
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Cadastro;
