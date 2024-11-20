
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import "./styles.css"
import Doctors from './components/Doctors';
import Card from './components/Card';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './components/Services';
import Donate from './pages/Donate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Parent from './components/Parent';
import Vacent from './components/Vacent';
import Program from './components/Program';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Donate' element={<Donate/>}></Route>
        <Route path='/Parent' element={<Parent/>}></Route>
        <Route path='/Vacent' element={<Vacent/>}></Route>
        <Route path='/Program' element={<Program/>}></Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
