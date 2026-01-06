import { Mail, Phone, MapPin, Github, Code2 } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 dark:bg-slate-950 text-white smooth-transition"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 smooth-transition">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto smooth-transition">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:anuragchauhan0612@gmail.com"
              className="bg-slate-800 dark:bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700 dark:hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 border border-slate-700 dark:border-slate-600 smooth-transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg smooth-transition">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-400">anuragchauhan0612@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+919592971004"
              className="bg-slate-800 dark:bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700 dark:hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 border border-slate-700 dark:border-slate-600 smooth-transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg smooth-transition">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-400">+91 9592971004</p>
                </div>
              </div>
            </a>

            <div className="bg-slate-800 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-700 dark:border-slate-600 smooth-transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg smooth-transition">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-400">Mohali, Punjab, India</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-700 dark:border-slate-600 smooth-transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg smooth-transition">
                  <Github className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Open Source</h3>
                  <p className="text-gray-400">Active on GitHub & LeetCode</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="https://github.com/anu-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 dark:bg-slate-800/50 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-500 transition-all duration-300 hover:scale-110 smooth-transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://leetcode.com/u/chauhananurag/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 dark:bg-slate-800/50 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-500 transition-all duration-300 hover:scale-110 smooth-transition"
              >
                <Code2 size={24} />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 Anurag Chauhan. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
