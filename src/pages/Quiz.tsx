
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { QuizLayout } from "@/components/ui/quiz/quiz-layout";

interface QuizData {
  cardPreference: string;
  employmentStatus: string;
  income: string;
  hasRestrictions: boolean;
  personalInfo: {
    name: string;
    email: string;
    cpf: string;
    cardPassword: string;
  };
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  deliveryMethod: {
    type: string;
    price: number;
  };
  cardColor: string;
  dueDate: string;
  whatsapp: string;
}

const TOTAL_STEPS = 4;

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({
    cardPreference: "",
    employmentStatus: "",
    income: "",
    hasRestrictions: false,
    personalInfo: {
      name: "",
      email: "",
      cpf: "",
      cardPassword: ""
    },
    address: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: ""
    },
    deliveryMethod: {
      type: "",
      price: 0
    },
    cardColor: "",
    dueDate: "",
    whatsapp: ""
  });

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate("/aprovacao");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate("/");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">O que é mais importante em um cartão de crédito para você?</h2>
              <p className="text-muted-foreground">
                Selecione a opção que melhor representa sua necessidade.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Benefícios exclusivos",
                "Limite alto",
                "Anuidade zero",
                "Facilidade de aprovação"
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuizData({ ...quizData, cardPreference: option });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl text-left transition-all ${
                    quizData.cardPreference === option
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Em qual grupo você se encaixa?</h2>
              <p className="text-muted-foreground">
                Selecione sua situação profissional atual.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Trabalhador CLT",
                "Empreendedor",
                "Aposentado",
                "Servidor público",
                "Freelancer"
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuizData({ ...quizData, employmentStatus: option });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl text-left transition-all ${
                    quizData.employmentStatus === option
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Qual sua renda mensal?</h2>
              <p className="text-muted-foreground">
                Selecione a faixa que corresponde à sua renda.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Até R$1.000",
                "De R$1.001 a R$2.500",
                "De R$2.501 a R$4.000"
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuizData({ ...quizData, income: option });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl text-left transition-all ${
                    quizData.income === option
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Você está negativado?</h2>
              <p className="text-muted-foreground">
                Não se preocupe, trabalhamos com todas as situações.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { label: "Sim", value: true },
                { label: "Não", value: false }
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuizData({ ...quizData, hasRestrictions: option.value });
                    handleNext();
                  }}
                  className={`p-4 rounded-xl text-left transition-all ${
                    quizData.hasRestrictions === option.value
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <QuizLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onBack={handleBack}
    >
      {renderStep()}
    </QuizLayout>
  );
};

export default Quiz;
