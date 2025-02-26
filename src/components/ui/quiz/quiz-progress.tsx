
import { motion } from "framer-motion";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const QuizProgress = ({ currentStep, totalSteps }: QuizProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Etapa {currentStep} de {totalSteps}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};
