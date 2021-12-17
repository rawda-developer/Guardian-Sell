import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import AboutPage from "./components/aboutPage";
import ContactUs from "./components/contact_us";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/about-us" element={<AboutPage />}></Route>
        <Route exact path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
