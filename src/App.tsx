
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import PreAprovacao from "./pages/PreAprovacao";
import Termos from "./pages/Termos";
import Cadastro from "./pages/Cadastro";
import Interesses from "./pages/Interesses";
import Carregamento from "./pages/Carregamento";
import Aprovacao from "./pages/Aprovacao";
import Beneficios from "./pages/Beneficios";
import Vencimento from "./pages/Vencimento";
import CorCartao from "./pages/CorCartao";
import Entrega from "./pages/Entrega";
import Gerente from "./pages/Gerente";
import Endereco from "./pages/Endereco";
import MetodoEnvio from "./pages/MetodoEnvio";
import Confirmacao from "./pages/Confirmacao";
import Pagamento from "./pages/Pagamento";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solicitar" element={<Quiz />} />
          <Route path="/pre-aprovacao" element={<PreAprovacao />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/interesses" element={<Interesses />} />
          <Route path="/carregamento" element={<Carregamento />} />
          <Route path="/aprovacao" element={<Aprovacao />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/vencimento" element={<Vencimento />} />
          <Route path="/cor-cartao" element={<CorCartao />} />
          <Route path="/entrega" element={<Entrega />} />
          <Route path="/gerente" element={<Gerente />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/metodo-envio" element={<MetodoEnvio />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
