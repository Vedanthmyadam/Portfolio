const contacts = [
  {
    label: 'Email',
    value: 'vedanth@example.com',
    href: 'mailto:vedanth@example.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vedanth',
    href: 'https://linkedin.com/in/vedanth',
  },
  {
    label: 'GitHub',
    value: 'github.com/vedanth',
    href: 'https://github.com/vedanth',
  },
];

const Contact = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Contact</h1>
      <p className="text-white/40 text-sm mb-10">
        Feel free to reach out — I'm always open to new opportunities and conversations.
      </p>

      <div className="flex flex-col gap-3">
        {contacts.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-white/10 rounded-xl px-6 py-5 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200 group"
          >
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">{label}</span>
            <span className="text-white/60 group-hover:text-violet-300 transition-colors duration-200 text-sm">
              {value} <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </span>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Contact;
