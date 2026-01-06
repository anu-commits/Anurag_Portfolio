import { Github, Mail, MapPin, Code2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 smooth-transition relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-teal-500/10 dark:bg-cyan-500/10 border border-teal-500/20 dark:border-cyan-500/20 rounded-full smooth-transition">
            <span className="text-teal-600 dark:text-cyan-400 text-sm font-medium">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent smooth-transition">
            Anurag Chauhan
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed smooth-transition">
            Building scalable web applications with modern technologies.
            <br />
            Specializing in React, Node.js, and AI-powered solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-gray-500 dark:text-gray-400 smooth-transition">
            <a
              href="tel:+919592971004"
              className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors"
            >
              <MapPin size={18} />
              <span>Mohali, Punjab</span>
            </a>
            <a
              href="mailto:anuragchauhan0612@gmail.com"
              className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Mail size={18} />
              <span>anuragchauhan0612@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/anu-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-600 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-teal-700 dark:hover:bg-cyan-600 transition-all hover:scale-105 flex items-center gap-2 smooth-transition"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/chauhananurag/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 dark:bg-cyan-500 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-cyan-600 transition-all hover:scale-105 flex items-center gap-2 smooth-transition"
            >
              <Code2 size={20} />
              LeetCode
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex items-start justify-center p-2 smooth-transition">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full smooth-transition"></div>
        </div>
      </div>
    </section>
  )
}
