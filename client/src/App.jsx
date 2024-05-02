import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './Components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile />} />




     </Routes>
    </BrowserRouter>
  )
}

export default App
