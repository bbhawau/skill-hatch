import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing_page";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Dashboard from "./pages/home";
import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

function App() {
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    } else {
      localStorage.removeItem("userEmail");
    }
  }, [userEmail]);
  return (
    <div className="App">
      <AuthContext.Provider value={{ userEmail, setUserEmail }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" />
            <Route path="/about" />
            <Route path="/faq" />
            <Route path="/contact" />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
