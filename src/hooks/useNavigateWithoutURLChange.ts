
import { useNavigate } from "react-router-dom";

/**
 * Hook personalizado para navegar entre páginas sem alterar a URL visível
 * @returns Função para navegar sem alterar a URL
 */
export const useNavigateWithoutURLChange = () => {
  const navigate = useNavigate();
  
  const navigateWithoutChangingURL = (path: string) => {
    // Salva o caminho atual no histórico
    window.history.pushState(
      { prevPath: window.location.pathname }, 
      '', 
      window.location.pathname
    );
    
    // Navega para o novo caminho mas substitui a entrada no histórico
    // para que a URL não mude na barra de endereços
    navigate(path, { replace: true });
  };
  
  return navigateWithoutChangingURL;
};
