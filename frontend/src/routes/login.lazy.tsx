import { createLazyFileRoute } from '@tanstack/react-router';
import LoginCliente from 'pages/LoginCliente';

export const Route = createLazyFileRoute('/login')({
  component: LoginCliente,
  pendingComponent: () => <div>Carregando...</div>
});
