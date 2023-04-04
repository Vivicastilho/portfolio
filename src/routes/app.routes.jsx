import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Portfolio } from "../pages/Portfolio";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
