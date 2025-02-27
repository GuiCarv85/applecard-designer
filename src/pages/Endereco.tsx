
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Endereco = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: ""
  });

  const searchCEP = async () => {
    if (address.cep.length !== 8) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${address.cep}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        setAddress({
          ...address,
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf
        });
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    } finally {
      setLoading(false);
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
          <MapPin className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-semibold">Endereço de Entrega</h1>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">CEP</label>
            <div className="flex gap-2">
              <Input
                value={address.cep}
                onChange={(e) => setAddress({ ...address, cep: e.target.value })}
                maxLength={8}
                placeholder="Digite o CEP"
              />
              <button
                onClick={searchCEP}
                disabled={loading || address.cep.length !== 8}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Buscar"
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Rua</label>
            <Input
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              placeholder="Nome da rua"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Número</label>
              <Input
                value={address.number}
                onChange={(e) => setAddress({ ...address, number: e.target.value })}
                placeholder="Nº"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Complemento</label>
              <Input
                value={address.complement}
                onChange={(e) => setAddress({ ...address, complement: e.target.value })}
                placeholder="Apto, Bloco, etc"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bairro</label>
            <Input
              value={address.neighborhood}
              onChange={(e) => setAddress({ ...address, neighborhood: e.target.value })}
              placeholder="Bairro"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Cidade</label>
              <Input
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                placeholder="Cidade"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Estado</label>
              <Input
                value={address.state}
                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                placeholder="Estado"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/metodo-envio")}
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

export default Endereco;
