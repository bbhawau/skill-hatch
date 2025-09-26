import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from './pages/landing_page';
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" />
          <Route path="/about" />
          <Route path="/faq" />
          <Route path="/contact" />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
