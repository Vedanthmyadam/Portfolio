const projects = [
  {
    title: 'Project One',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project showcasing different skills and technologies used.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A third project that demonstrates design and frontend skills.',
    tags: ['React', 'Tailwind CSS'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 tracking-tight">Projects</h1>

      <div className="flex flex-col gap-4">
        {projects.map(({ title, description, tags, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="border border-white/10 rounded-xl p-6 hover:border-white/25 hover:bg-white/[0.02] transition-all duration-200 group block"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-lg font-semibold group-hover:text-violet-300 transition-colors duration-200">
                {title}
              </h2>
              <span className="text-white/20 group-hover:text-white/50 text-sm transition-colors duration-200 ml-4 shrink-0">
                ↗
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-violet-500/30 text-violet-400/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Projects;
