import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Listing from './pages/Listing/Listing';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
  <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact={true} path='/' element={<Home/>}/>
      <Route exact={true} path='/listing' element={<Listing/>}/>
      <Route exact={true} path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
  </BrowserRouter>
  );
}

export default App;
