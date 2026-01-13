import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Office from './pages/Office';
import Forms from './pages/Forms';
import Resources from './pages/Resources';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="app">
        <Navbar onScheduleClick={openModal} />
        
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home onScheduleClick={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/office" element={<Office onScheduleClick={openModal} />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </PageTransition>
        
        <Footer onScheduleClick={openModal} />
        
        <ScheduleModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
