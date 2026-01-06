import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Itinerary Generator',
    subtitle: 'Travel Itinerary PDF Generator',
    description: 'Professional Next.js application for generating luxury travel itinerary PDFs with fixed, pixel-perfect layouts and multi-page support.',
    highlights: [
      'Fixed, pixel-perfect layouts with hotel cards, flight tables, and itinerary sections',
      'Multi-page support with automatic content distribution and real-time PDF preview',
      'Image upload for hotels and itinerary days with professional gold-accented design system',
      'PDF generation using pdf-lib with Next.js 14 App Router and TypeScript 5'
    ],
    tags: ['Next.js 14', 'React 18', 'TypeScript 5', 'Tailwind CSS', 'pdf-lib'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'ClipCrafter',
    subtitle: 'AI Video Highlight Extraction App',
    description: 'Automated pipeline for transforming YouTube long-form content into short-form clips using multi-modal AI analysis.',
    highlights: [
      'Multi-modal AI engine synthesizing Google Gemini LLM, YouTube heatmaps, scene detection, and audio analysis',
      'Automated video processing with OpenAI Whisper transcription and moviepy editing',
      'Sophisticated scoring system for identifying high-potential video highlights'
    ],
    tags: ['Python', 'AI/ML', 'Google Gemini', 'OpenAI Whisper', 'Video Processing'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'JavaBotForIG',
    subtitle: 'Instagram Automation Discord Bot',
    description: 'Discord bot serving as remote content management system for Instagram with automated scheduling.',
    highlights: [
      'Java-based architecture using Javacord library for Discord integration',
      'Instagram Graph API integration for post creation and scheduling',
      'Automated task system with cron-jobs and Gradle build management'
    ],
    tags: ['Java', 'Discord Bot', 'Instagram API', 'Automation', 'Gradle'],
    gradient: 'from-teal-500 to-green-500'
  },
  {
    title: 'RideSmart',
    subtitle: 'Car Rental & Service Management Platform',
    description: 'Full-stack MERN application for comprehensive vehicle management with rentals and service tracking.',
    highlights: [
      'Scalable backend with Node.js and Express.js RESTful APIs',
      'Dynamic React.js interface with MongoDB database integration',
      'JWT-based authentication system for secure access control'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 smooth-transition">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto smooth-transition">
            Innovative solutions showcasing technical expertise and problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card overflow-hidden hover:shadow-xl smooth-transition"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2 smooth-transition">{project.title}</h3>
                  <p className="text-teal-600 dark:text-cyan-400 font-semibold mb-4 smooth-transition">{project.subtitle}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed smooth-transition">{project.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm smooth-transition">
                      <span className="w-1.5 h-1.5 bg-teal-500 dark:bg-cyan-500 rounded-full mt-2 flex-shrink-0 smooth-transition"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium smooth-transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/anu-commits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-cyan-600 transition-all hover:scale-105 smooth-transition"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
