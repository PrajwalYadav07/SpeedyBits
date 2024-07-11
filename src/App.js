import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Page/HomePage';
import MenuPage from './Page/MenuPage';
import EventPage from './Page/EventPage';
import SpecialsPage from './Page/SpecialsPage';
import OurChefsPage from './Page/OurChefsPage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/specials' element={<SpecialsPage />} />
          <Route path='/chefs' element={<OurChefsPage/>} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
