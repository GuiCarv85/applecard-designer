
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";

const CorCartao = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const colors = [
    { name: "Preto", value: "black" },
    { name: "Azul", value: "blue" },
    { name: "Rosa", value: "pink" },
    { name: "Verde", value: "green" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full glass p-8 rounded-2xl space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Escolha a cor do seu cartão</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedColor === color.value
                  ? "border-primary"
                  : "border-transparent hover:border-primary/50"
              }`}
              style={{ background: color.value }}
            >
              <span className={`text-${color.value === "black" ? "white" : "black"}`}>
                {color.name}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <div className="relative aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
            <div className="absolute top-4 right-4">
              <div className="w-12 h-8 bg-yellow-400 rounded-md" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="font-medium mb-2">Guilherme Amaral Carvalho</p>
              <p className="text-sm text-gray-300">**** **** **** 1234</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-6">
          <button
            onClick={() => navigate("/entrega")}
            disabled={!selectedColor}
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

export default CorCartao;
