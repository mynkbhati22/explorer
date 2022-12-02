import "./App.css";
import Home from "./Component/Pages/Home";
import Admin from "./Component/Pages/Admin";
import Update from "./Component/Pages/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*    <Home /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
