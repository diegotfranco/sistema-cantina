import { createFileRoute } from '@tanstack/react-router';
import SignUp from 'pages/SignUp.tsx';

export const Route = createFileRoute('/signup')({
  component: SignUp
});
