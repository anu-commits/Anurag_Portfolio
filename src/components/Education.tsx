import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    institution: 'Chitkara University Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering - Computer Science',
    location: 'Rajpura, Punjab',
    period: 'September 2021 - June 2025',
    grade: 'CGPA: 8.74/10',
    highlight: true
  },
  {
    institution: 'Government Model Senior Secondary School',
    degree: 'CBSE Board',
    location: 'Chandigarh',
    period: 'June 2021',
    grade: '81%',
    highlight: false
  },
  {
    institution: 'Little Flower Convent School',
    degree: 'CISCE Board',
    location: 'Panchkula',
    period: 'May 2019',
    grade: '85%',
    highlight: false
  }
];

const certifications = [
  {
    title: 'Developing Front-End Apps with React',
    issuer: 'Coursera',
    icon: Award
  },
  {
    title: 'Introduction to Google SEO',
    issuer: 'Coursera',
    icon: Award
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    icon: Award
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 section-bg-alternate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 smooth-transition">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto smooth-transition">
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3 smooth-transition">
              <div className="p-2 bg-teal-500 dark:bg-cyan-500 rounded-lg smooth-transition">
                <GraduationCap className="text-white" size={24} />
              </div>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border hover:shadow-lg transition-all duration-300 smooth-transition ${
                    edu.highlight
                      ? 'bg-white dark:bg-slate-900 border-teal-200 dark:border-cyan-500/30 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1 smooth-transition">{edu.institution}</h4>
                      <p className="text-teal-600 dark:text-cyan-400 font-semibold mb-2 smooth-transition">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-1.5 bg-teal-100 dark:bg-cyan-500/20 text-teal-700 dark:text-cyan-400 rounded-full text-sm font-semibold smooth-transition">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm smooth-transition">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3 smooth-transition">
              <div className="p-2 bg-orange-500 dark:bg-orange-600 rounded-lg smooth-transition">
                <Award className="text-white" size={24} />
              </div>
              Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card hover:shadow-lg hover:-translate-y-1 smooth-transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-500/20 rounded-lg flex-shrink-0 smooth-transition">
                      <Award className="text-orange-600 dark:text-orange-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-1 smooth-transition">{cert.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm smooth-transition">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
