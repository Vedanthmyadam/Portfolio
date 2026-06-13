import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Body = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {pathname !== '/home' && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Body;
