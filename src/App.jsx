import './App.css' 
import { Routes,Route } from 'react-router-dom';
import AppRoutes from './routes'
import Menu from "./components/Menu/Menu";
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      
      <AppRoutes />
      
    </div>
  );
}

export default App
