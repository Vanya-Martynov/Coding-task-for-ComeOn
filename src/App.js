import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import { Routes, Route } from "react-router-dom";


function App() {
  return <>
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
}

export default App;
