
import './App.css';
import Home from "./Component/Pages/Home";
import Admin from "./Component/Pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
   <>
   <Router>
   <Routes>
{/*    <Home /> */}
   <Route exact path="/" element={<Home/>} />
   <Route path="/admin" element={<Admin />} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
