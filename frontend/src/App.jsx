import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Analyze from "./pages/Analyze";
import RootDetail from "./pages/RootDetail";
import About from "./pages/About";
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ="/" element ={<Landing/>}></Route>
        <Route path ="/analyze" element ={<Analyze/>}></Route>
        <Route path ="/root/:rootId" element ={<RootDetail/>}></Route>
        <Route path ="/about" element ={<About/>}></Route>
      </Routes>
    
    </BrowserRouter>

  );
}

export default App
