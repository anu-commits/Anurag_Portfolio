import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Luxe Trails',
    role: 'Freelance Developer',
    location: 'Remote',
    period: 'December 2025 - Present',
    description: [
      'Developing professional travel itinerary PDF generation system using Next.js 14 and TypeScript',
      'Implementing pixel-perfect layouts with multi-page support and automatic content distribution',
      'Building image upload functionality and real-time PDF preview with pdf-lib integration'
    ],
    current: true
  },
  {
    company: 'Chandigarh Athletics Association',
    role: 'Developer',
    location: 'Remote',
    period: 'Feburary 2025 - November 2025',
    description: [
      'Built high-performance full-stack application using T3 Stack (Next.js, TypeScript, tRPC)',
      'Engineered type-safe backend with Prisma, Zod, and tRPC for seamless API layer',
      'Integrated Razorpay API for secure payments and managed Railway deployment'
    ],
    current: false
  },
  {
    company: 'Hairkla Salon',
    role: 'Project Lead',
    location: 'Mohali, Punjab',
    period: 'September 2024 - December 2024',
    description: [
      'Led end-to-end project lifecycle from requirements gathering to delivery',
      'Developed responsive front-end using HTML, Tailwind CSS, and JavaScript',
      'Managed AWS deployment ensuring high availability and scalability'
    ],
    current: false
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 section-bg-alternate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 smooth-transition">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto smooth-transition">
            Professional journey building impactful solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card hover:shadow-xl smooth-transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 smooth-transition">{exp.company}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-teal-100 dark:bg-cyan-500/20 text-teal-700 dark:text-cyan-400 text-xs font-semibold rounded-full smooth-transition">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-teal-600 dark:text-cyan-400 font-semibold mb-3 smooth-transition">{exp.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400 smooth-transition">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 smooth-transition">
                    <span className="w-1.5 h-1.5 bg-teal-500 dark:bg-cyan-500 rounded-full mt-2 flex-shrink-0 smooth-transition"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
