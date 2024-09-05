import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ABApolloClient from './componentes/ABApolloClient';
import CarrinhoProvider from './contextos/carrinho';

const queryClient = new QueryClient()

function App() {
  return (
    <ABApolloClient>
      <CarrinhoProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </QueryClientProvider>
      </CarrinhoProvider>
    </ABApolloClient>
  );
}

export default App;
