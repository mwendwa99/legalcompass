import { Routes, Route } from "react-router-dom";
import "./App.css";
// components
import { Nav, Contact } from "./components";
// pages
import HomePage from "./pages/HomePage";
import GetDirection from "./pages/GetDirection";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import Trainings from "./pages/Trainings";
import Resources from "./pages/Resources";
import { theme } from "./Theme";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/trainings&events" element={<Trainings />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/getdirections" element={<GetDirection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;
