import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigiAvisa from "./component/DigiAvisa";
import InstaEats from "./component/InstaEats";
import WildOasis from "./component/WildOasis";
import FairmountGrand from "./component/FairmountGrand";
import Footer from "./component/Footer";
import AnimatedCursor from "react-animated-cursor";
import Promptopia from "./component/Promptopia";
export default function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={15}
        outerSize={20}
        color="0, 176, 104"
        trailingSpeed={10}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DigiAvisa" element={<DigiAvisa />} />
        <Route path="/InstaEats" element={<InstaEats />} />
        <Route path="/WildOasis" element={<WildOasis />} />
        <Route path="/FairmontGrand" element={<FairmountGrand />} />
        <Route path="/Promptopia" element={<Promptopia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
