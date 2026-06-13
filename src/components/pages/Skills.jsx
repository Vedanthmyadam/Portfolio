const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'C#', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Azure', 'AWS', 'MongoDB'],
  },
];

const Skills = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 tracking-tight">Skills</h1>

      <div className="flex flex-col gap-4">
        {skillGroups.map(({ category, skills }) => (
          <div
            key={category}
            className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors duration-200"
          >
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">{category}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg border border-white/10 text-sm text-white/70 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
