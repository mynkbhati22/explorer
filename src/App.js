import "./App.css";
import Home from "./Component/Pages/Home";
import Admin from "./Component/Pages/Admin";
import Update from "./Component/Pages/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TranscationUpdate from "./Component/Pages/TranscationUpdate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*    <Home /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update/:id/:blocknummber" element={<Update />} />
          <Route
            path="/updatetranscationdetails/:id/:transcationsuccess"
            element={<TranscationUpdate />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
