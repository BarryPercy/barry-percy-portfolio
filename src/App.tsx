import NavBar from './components/navbar/PortfolioNavBar'
import Home from './views/home/home'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
