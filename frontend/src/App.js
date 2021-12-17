import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPage from "./components/aboutPage";
function App() {
  return (
    <>
      <Navbar />
      <AboutPage />
    </>
  );
}

export default App;
