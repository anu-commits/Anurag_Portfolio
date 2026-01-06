import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 smooth-transition">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
