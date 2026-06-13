import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-xl">
        <p className="text-xs text-white/30 tracking-[0.3em] uppercase">Portfolio</p>

        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter text-white">
          Vedanth
        </h1>

        <p className="text-lg md:text-xl text-white/50 font-light">
          Developer &middot; Designer &middot; Builder
        </p>

        <p className="text-white/30 text-sm leading-relaxed max-w-sm">
          I build things for the web. Focused on clean code, great experiences, and continuous learning.
        </p>

        <div className="flex gap-3 mt-2">
          <Link
            to="/projects"
            className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 border border-white/15 hover:border-white/35 text-white/70 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 flex gap-6">
        {['/about', '/skills'].map((path) => (
          <Link
            key={path}
            to={path}
            className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200 uppercase tracking-widest"
          >
            {path.replace('/', '')}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
