import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Merch from "./pages/Merch";
import Bands from "./pages/Bands";
import Tours from "./pages/Tours";
import About from "./pages/About";
import Menu from './components/Menu/Menu';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route path="/" element={<Home />} />
        <Route path="/Bands" element={<Bands />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;