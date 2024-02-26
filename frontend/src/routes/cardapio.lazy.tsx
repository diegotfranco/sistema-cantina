import { createLazyFileRoute } from '@tanstack/react-router';
import Menu from 'pages/Menu';

export const Route = createLazyFileRoute('/cardapio')({
  component: Menu,
  pendingComponent: () => <div>Carregando...</div>
});
