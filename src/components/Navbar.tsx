import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 smooth-transition">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            AC
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-gray-900 dark:text-white" />
              ) : (
                <Menu size={24} className="text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-slate-800">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
