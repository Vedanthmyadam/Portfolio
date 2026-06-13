const About = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 tracking-tight">About</h1>

      <div className="flex flex-col gap-4">
        <div className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors duration-200">
          <p className="text-white/60 leading-relaxed text-base">
            Hey! I'm Vedanth — a developer passionate about building meaningful software.
            I enjoy working across the stack and love turning ideas into real, working products.
          </p>
          <br />
          <p className="text-white/60 leading-relaxed text-base">
            I'm currently based in Hyderabad, India. When I'm not coding, I enjoy [hobbies].
            Always looking to collaborate on interesting projects.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Role', value: 'Full Stack Developer' },
            { label: 'Location', value: 'Hyderabad, India' },
            { label: 'Status', value: 'Open to work' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors duration-200"
            >
              <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm text-white/80">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
