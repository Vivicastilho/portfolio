import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Portifolio } from "../pages/Portifolio";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portifolio" element={<Portifolio />} />
    </Routes>
  );
}
