import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const Layout = () => {
  return (
    <>
      <div className='flex shadow'>
        <Link to='/home' className='[&.active]:font-bold [&.active]:bg-blue-500 [&.active]:text-white py-4 px-5'>
          Home
        </Link>{' '}
        <Link to='/about' className='[&.active]:font-bold [&.active]:bg-blue-500 [&.active]:text-white py-4 px-5'>
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export default Layout;
