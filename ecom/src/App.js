import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,redirect} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <BrowserRouter>
     <Header/>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
     </Routes>
     <Footer/>
  </BrowserRouter>
  );
}

export default App;
