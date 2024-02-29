import { createFileRoute, redirect } from '@tanstack/react-router';
import Authenticated from 'pages/Authenticated';

export const Route = createFileRoute('/authenticated')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href
        }
      });
    }
  },
  component: Authenticated
});
