import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import Profile from './components/sections/Profile';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-background text-textPrimary min-h-screen selection:bg-primary/30 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
