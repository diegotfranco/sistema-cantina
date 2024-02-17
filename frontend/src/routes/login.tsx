import { createFileRoute } from '@tanstack/react-router';
import LoginCliente from '../pages/LoginCliente';

export const Route = createFileRoute('/login')({
  component: LoginCliente,
})