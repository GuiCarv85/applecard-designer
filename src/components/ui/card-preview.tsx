
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

interface CardPreviewProps {
  name?: string;
  cardType?: string;
  expiry?: string;
  cardColor?: string;
}

export const CardPreview = ({ 
  name = "SEU NOME",
  cardType = "PLATINUM+",
  expiry = "MM/AA",
  cardColor = "bg-primary"
}: CardPreviewProps) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative w-[380px] h-[240px] rounded-2xl ${cardColor} p-6 text-white shadow-2xl`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
      
      <div className="relative flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <CreditCard className="w-12 h-12" />
          <div className="text-right">
            <p className="text-sm font-light opacity-80">AprovaCard</p>
            <p className="font-medium">{cardType}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-1">
            <div className="w-12 h-8 rounded-md bg-white/20" />
            <div className="w-8 h-8 rounded-md bg-white/20" />
            <div className="w-8 h-8 rounded-md bg-white/20" />
            <div className="w-8 h-8 rounded-md bg-white/20" />
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-light opacity-80">Titular</p>
              <p className="font-medium tracking-wider">{name}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-light opacity-80">Validade</p>
              <p className="font-medium">{expiry}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
