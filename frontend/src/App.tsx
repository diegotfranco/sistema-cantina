import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
// import { queryClient } from './main';
import { ErrorBoundary } from 'react-error-boundary';
import useAuth from 'hooks/useAuth';
import ErrorPage from 'pages/ErrorPage';

const router = createRouter({
  routeTree,
  context: {
    auth: undefined! // This will be set after we wrap the app in an AuthProvider
    // queryClient
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  console.log('rendering App...');
  const auth = useAuth();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={() => console.log('ocorreu um erro!')}
    >
      <RouterProvider router={router} context={{ auth }} />
    </ErrorBoundary>
  );
};

export default App;
