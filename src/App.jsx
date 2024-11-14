// App.js
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Mypet from "./pages/Mypet";
import Navbar from "./pages/Navbar";
import Detailpet from "./pages/Detailpet";
import Footer from "./components/Footer"; // นำเข้า Footer

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  const showNavbar =
    location.pathname !== "/" && location.pathname !== "/register";
  const showFooter = showNavbar; // ให้ Footer แสดงเหมือน Navbar

  return (
    <>
      <div className="bg-pupul-bg min-h-screen flex flex-col justify-between">
        {showNavbar && <Navbar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/Mypet" element={<Mypet />} />
            <Route path="/Detailpet/:id" element={<Detailpet />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
