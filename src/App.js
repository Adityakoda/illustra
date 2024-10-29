import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './components/start';
import Data from './components/data';
import Main from './components/main';
import Gallary from './components/gallary';
import Nav from './components/nav';
import Footer from './components/footer';
import Contact from './components/contact';
import Nav2 from './components/nav2';

function Home() {
  return (
    <>
      <Nav/>
      <Start />
      <Data />
      <Footer/>
      {/* <Contact/> */}
    </>
  );
}

function MainGallary() {
  return (
    <>
      <Nav2/>
      <Main />
      <Gallary />
      <Footer/>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Nav2/>
      <Contact/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/main" element={<MainGallary />} /> 
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}
export default App;