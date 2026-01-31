import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Programs from "./pages/programs/Programs";
import Impact from "./pages/impact/Impact";
import GetInvolved from "./pages/get-involved/GetInvolved";
import Contact from "./pages/contact/Contact";

import Navigation from "./components/nav/Navigation";
import Footer from "./components/footer/footer";


export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />

        {/* FALLBACK – UNKNOWN ROUTES */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}
