import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ResumePage from './pages/ResumePage';
import EngineeringPhilosophyPage from './pages/EngineeringPhilosophyPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import LabPage from './pages/LabPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import NowPage from './pages/NowPage';
import CommandPalette from './components/CommandPalette';
import SEOMetadata from './components/SEOMetadata';


const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <SEOMetadata />
      <CommandPalette isOpen={commandPaletteOpen} setIsOpen={setCommandPaletteOpen} />
      <div className="overflow-x-hidden text-textPrimary min-h-screen theme-transition bg-bgPrimary selection:bg-accent/10 selection:text-accent">

        
        {/* Ambient background grids */}
        <div className="fixed top-0 -z-10 h-full w-full bg-grid-layer">
          {theme === 'dark' ? (
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-bgPrimary bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.08),rgba(255,255,255,0))]"></div>
          ) : (
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-bgPrimary bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(79,70,229,0.04),rgba(255,255,255,0))]"></div>
          )}
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1360px]">
          <Navbar theme={theme} toggleTheme={toggleTheme} onSearchClick={() => setCommandPaletteOpen(true)} />

          
          <main className="py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about/me" element={<AboutMePage />} />
              <Route path="/about/resume" element={<ResumePage />} />
              <Route path="/about/philosophy" element={<EngineeringPhilosophyPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/lab" element={<LabPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/now" element={<NowPage />} />
            </Routes>

          </main>
          
          <Footer />
        </div>

      </div>
    </Router>
  );
};

export default App;
