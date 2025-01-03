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
import Historypethealt from "./pages/Historypethealt";
import ClinicNear from "./pages/ClinicNear";
import ViewHistorypage from "./pages/ViewHistorypage";
import HomeHealth from "./pages/HomeHealth";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Edit from "./pages/Edit";
import Head_bene from "./pages/Head_bene";
import Forget from "./pages/Forget";
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
    location.pathname !== "/" &&
    location.pathname !== "/register" &&
    location.pathname !== "/forget";
  const showFooter = showNavbar;

  return (
    <>
      <div className="bg-color-bg min-h-screen flex flex-col justify-between">
        {showNavbar && <Navbar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/Mypet" element={<Mypet />} />
            <Route path="/HomeHealth" element={<HomeHealth />} />
            <Route path="/Detailpet/:id" element={<Detailpet />} />
            <Route path="/Addpet/" element={<Addpet />} />
            <Route path="/Pet_benefit/:id" element={<Pet_benefit />} />
            <Route path="/HealthpetPage/:id" element={<HealthpetPage />} />
            <Route
              path="/HistorypetVaccine/:id"
              element={<HistorypetVaccine />}
            />
            <Route path="/Historypethealt/:id" element={<Historypethealt />} />
            <Route path="/ClinicNear/" element={<ClinicNear />} />
            <Route path="/ViewHistorypage/:id" element={<ViewHistorypage />} />
            <Route path="/Head_bene/" element={<Head_bene />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/forget" element={<Forget />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
