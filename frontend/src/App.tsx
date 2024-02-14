import { RouterProvider, createRouter} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'
import './App.css'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent'
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
