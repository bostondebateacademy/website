import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Coaching from "../../pages/coaching";
import Classes from "../../pages/classes";
import Contact from "../../pages/contact";


export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/why-bda" element={<About />} />
                    <Route path="/private-coaching" element={<Coaching />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}