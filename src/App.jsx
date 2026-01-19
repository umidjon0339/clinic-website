import { HashRouter, Routes, Route } from 'react-router-dom';

// --- Layouts ---
import Layout from './components/Layout';

// --- Pages ---
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile'; // Dynamic Page
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // 404 Page

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Parent Route: Layout (Contains Navbar & Footer) */}
        <Route path="/" element={<Layout />}>
          
          {/* Public Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="doctors" element={<Doctors />} />
          
          {/* Dynamic Route: The ":id" catches numbers like /doctors/1 */}
          <Route path="doctors/:id" element={<DoctorProfile />} />
          
          <Route path="appointment" element={<Appointment />} />
          <Route path="contact" element={<Contact />} />

          {/* 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
