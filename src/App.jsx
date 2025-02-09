import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Contact from "./pages/contact/Contact";

import MainLayout from "./components/layout/main-layout";
import NotFoundPage from "./pages/404/not-found";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
