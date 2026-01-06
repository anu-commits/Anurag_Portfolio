import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'SQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Web & Frameworks',
    icon: Code2,
    skills: ['React', 'Node.js', 'Tailwind CSS', 'Express.js', 'REST API', 'JWT', 'OAuth'],
    color: 'from-teal-500 to-green-500'
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Railway'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Tools & Libraries',
    icon: Wrench,
    skills: ['Gradle', 'Zod', 'Razorpay API', 'Graph API', 'Figma', 'Git', 'Linux'],
    color: 'from-pink-500 to-rose-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 section-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 smooth-transition">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto smooth-transition">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 smooth-transition">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors smooth-transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
