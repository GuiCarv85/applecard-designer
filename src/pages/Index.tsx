
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Gift, Wallet } from "lucide-react";
import { CardPreview } from "@/components/ui/card-preview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-medium">AprovaCard</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#beneficios" className="text-sm hover:text-primary transition-colors">Benefícios</a>
            <a href="#vantagens" className="text-sm hover:text-primary transition-colors">Vantagens</a>
            <a href="#duvidas" className="text-sm hover:text-primary transition-colors">Dúvidas</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-semibold text-balance">
                  Cartão de crédito para negativados, top 1 do mercado com limites de até R$9.500
                </h1>
                <p className="text-lg text-muted-foreground">
                  Aprovação facilitada mesmo para negativados. Sem consulta ao SPC/Serasa.
                </p>
                <button 
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  onClick={() => window.location.href = '/solicitar'}
                >
                  Quero meu cartão agora
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
                <div className="relative">
                  <CardPreview />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-20 px-4 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Benefícios Exclusivos</h2>
              <p className="text-muted-foreground">Aproveite todas as vantagens do seu novo cartão</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Aprovação Garantida",
                  description: "Mesmo para negativados, aprovamos seu cartão em minutos."
                },
                {
                  icon: Gift,
                  title: "Sem Anuidade",
                  description: "Cartão sem anuidade e sem taxas escondidas."
                },
                {
                  icon: Wallet,
                  title: "Limite Alto",
                  description: "Limites de até R$9.500 com aumento progressivo."
                },
                {
                  icon: Sparkles,
                  title: "Benefícios VIP",
                  description: "Cashback em compras e vantagens exclusivas."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          © 2024 AprovaCard. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
