
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { QuizLayout } from "@/components/ui/quiz/quiz-layout";

interface QuizData {
  name: string;
  email: string;
  cpf: string;
  income: string;
  birthDate: string;
  phone: string;
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

const TOTAL_STEPS = 3;

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({
    name: "",
    email: "",
    cpf: "",
    income: "",
    birthDate: "",
    phone: "",
    address: {
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
    }
  });

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate("/resultado");
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
              <h2 className="text-2xl font-semibold">Informações Pessoais</h2>
              <p className="text-muted-foreground">
                Para começar, precisamos de algumas informações básicas sobre você.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  value={quizData.name}
                  onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium mb-2">
                  CPF
                </label>
                <Input
                  id="cpf"
                  value={quizData.cpf}
                  onChange={(e) => setQuizData({ ...quizData, cpf: e.target.value })}
                  placeholder="Digite seu CPF"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Continuar
            </button>
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
              <h2 className="text-2xl font-semibold">Dados Complementares</h2>
              <p className="text-muted-foreground">
                Algumas informações adicionais para personalizar sua experiência.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="income" className="block text-sm font-medium mb-2">
                  Renda Mensal
                </label>
                <Input
                  id="income"
                  value={quizData.income}
                  onChange={(e) => setQuizData({ ...quizData, income: e.target.value })}
                  placeholder="Digite sua renda mensal"
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium mb-2">
                  Data de Nascimento
                </label>
                <Input
                  id="birthDate"
                  type="date"
                  value={quizData.birthDate}
                  onChange={(e) => setQuizData({ ...quizData, birthDate: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  value={quizData.phone}
                  onChange={(e) => setQuizData({ ...quizData, phone: e.target.value })}
                  placeholder="Digite seu telefone"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Continuar
            </button>
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
              <h2 className="text-2xl font-semibold">Endereço</h2>
              <p className="text-muted-foreground">
                Por fim, precisamos do seu endereço para entrega do cartão.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label htmlFor="street" className="block text-sm font-medium mb-2">
                    Rua
                  </label>
                  <Input
                    id="street"
                    value={quizData.address.street}
                    onChange={(e) => setQuizData({
                      ...quizData,
                      address: { ...quizData.address, street: e.target.value }
                    })}
                    placeholder="Digite sua rua"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium mb-2">
                    Número
                  </label>
                  <Input
                    id="number"
                    value={quizData.address.number}
                    onChange={(e) => setQuizData({
                      ...quizData,
                      address: { ...quizData.address, number: e.target.value }
                    })}
                    placeholder="Nº"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="complement" className="block text-sm font-medium mb-2">
                  Complemento
                </label>
                <Input
                  id="complement"
                  value={quizData.address.complement}
                  onChange={(e) => setQuizData({
                    ...quizData,
                    address: { ...quizData.address, complement: e.target.value }
                  })}
                  placeholder="Apartamento, bloco, etc."
                />
              </div>

              <div>
                <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                  Bairro
                </label>
                <Input
                  id="neighborhood"
                  value={quizData.address.neighborhood}
                  onChange={(e) => setQuizData({
                    ...quizData,
                    address: { ...quizData.address, neighborhood: e.target.value }
                  })}
                  placeholder="Digite seu bairro"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">
                    Cidade
                  </label>
                  <Input
                    id="city"
                    value={quizData.address.city}
                    onChange={(e) => setQuizData({
                      ...quizData,
                      address: { ...quizData.address, city: e.target.value }
                    })}
                    placeholder="Digite sua cidade"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium mb-2">
                    Estado
                  </label>
                  <Input
                    id="state"
                    value={quizData.address.state}
                    onChange={(e) => setQuizData({
                      ...quizData,
                      address: { ...quizData.address, state: e.target.value }
                    })}
                    placeholder="Digite seu estado"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                  CEP
                </label>
                <Input
                  id="zipCode"
                  value={quizData.address.zipCode}
                  onChange={(e) => setQuizData({
                    ...quizData,
                    address: { ...quizData.address, zipCode: e.target.value }
                  })}
                  placeholder="Digite seu CEP"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Finalizar
            </button>
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
