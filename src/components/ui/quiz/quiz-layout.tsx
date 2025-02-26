
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { QuizProgress } from "./quiz-progress";

interface QuizLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  showBack?: boolean;
}

export const QuizLayout = ({ 
  children, 
  currentStep, 
  totalSteps,
  onBack,
  showBack = true 
}: QuizLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto space-y-8"
      >
        <div className="flex items-center gap-4">
          {showBack && onBack && (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <QuizProgress currentStep={currentStep} totalSteps={totalSteps} />
        </div>
        
        <div className="glass p-8 rounded-2xl">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
