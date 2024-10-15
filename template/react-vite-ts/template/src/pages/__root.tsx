import { createRootRoute } from '@tanstack/react-router';
import Layout from '../layout';

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: () => <div>Not Found</div>,
});
