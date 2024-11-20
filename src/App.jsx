// App.js
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import Mypet from "./pages/Mypet";
import Navbar from "./pages/Navbar";
import Detailpet from "./pages/Detailpet";
import Addpet from "./pages/Addpet";
import Pet_benefit from "./pages/Pet_benefit";
import HealthpetPage from "./pages/HealthpetPage";
import HistorypetVaccine from "./pages/HistorypetVaccine";
import ClinicNear from "./pages/ClinicNear";
import ViewHistorypage from "./pages/ViewHistorypage";
import Footer from "./components/Footer";

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
  const showFooter = showNavbar;

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
            <Route path="/Addpet/" element={<Addpet />} />
            <Route path="/Pet_benefit/" element={<Pet_benefit />} />
            <Route path="/HealthpetPage/" element={<HealthpetPage />} />
            <Route path="/HistorypetVaccine/" element={<HistorypetVaccine />} />
            <Route path="/ClinicNear/" element={<ClinicNear />} />
            <Route path="/ViewHistorypage/" element={<ViewHistorypage />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
