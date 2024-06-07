import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Listing from './pages/Listing/Listing';

function App() {
  return (
  <BrowserRouter>
     <Header/>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/listing' element={<Listing/>}/>
     </Routes>
     <Footer/>
  </BrowserRouter>
  );
}

export default App;
