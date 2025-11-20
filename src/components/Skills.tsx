export default function Skills() {
  const frontend = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
  ];

  const backend = [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "Java", level: "Advanced" },
    { name: "Python", level: "Beginner" },
    { name: "Django", level: "Beginner" },
    { name: "C", level: "Expert" },
  ];

  const database = [
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
  ];

  const systems = [
    { name: "Unix / Linux / Debian", level: "Expert" },
    { name: "Administration système", level: "Advanced" },
    { name: "SSH / clés / connexions distantes", level: "Advanced" },
    { name: "Sockets (Client ↔ Serveur en C)", level: "Advanced" },
  ];

  const algorithms = [
    { name: "Optimisation", level: "Advanced" },
    { name: "Complexité", level: "Advanced" },
  ];

  const tools = [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "CORS", level: "Advanced" },
  ];

  const categories = [
    { name: "Frontend", skills: frontend },
    { name: "Backend", skills: backend },
    { name: "Base de données", skills: database },
    { name: "Systèmes & Réseau", skills: systems },
    { name: "Algorithmes", skills: algorithms },
    { name: "Outils", skills: tools },
  ];

  return (
    <div className="px-10 py-10">
      <h2 className="text-3xl font-bold mb-10 text-[#BED3C3] text-center">
        Compétences
      </h2>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-[#0f2437] text-white p-5 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#BED3C3] hover:text-[#BED3C3] transition">
              {category.name}
            </h3>

            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex justify-between bg-[#132b45] px-3 py-2 rounded-lg"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
