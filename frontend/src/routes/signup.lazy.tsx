import { createLazyFileRoute } from '@tanstack/react-router';
import SignUp from 'pages/SignUp.tsx';

export const Route = createLazyFileRoute('/signup')({
  component: SignUp,
  pendingComponent: () => <div>Carregando...</div>
});
