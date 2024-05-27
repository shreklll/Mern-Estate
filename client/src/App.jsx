import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// import About from './pages/About';
// import Profile from './pages/Profile';
import Header from './components/Header';
import './index.css';
import Footer from './components/Footer';


const App = () => {
  return (
     <BrowserRouter>
        <Header />
     <Routes>
      <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    
     
    
  

  );
}

export default App;
