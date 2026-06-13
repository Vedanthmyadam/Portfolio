import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/home"
          className="text-base font-semibold tracking-tight hover:text-violet-400 transition-colors duration-200"
        >
          Vedanth
        </Link>
        <div className="flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm transition-colors duration-200 ${
                pathname === to
                  ? 'text-violet-400'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
