// import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import Spinner from 'components/Spinner';
import { AuthContext } from 'contexts/authContext';
import NotFoundPage from 'pages/NotFoundPage';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface IRouterContext {
  auth: AuthContext;
  // queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: () => {
    return (
      <>
        <Outlet />
        {/* <ReactQueryDevtools buttonPosition="top-right" /> */}
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
      </>
    );
  },
  notFoundComponent: () => <NotFoundPage />,
  pendingComponent: () => <Spinner />
});
