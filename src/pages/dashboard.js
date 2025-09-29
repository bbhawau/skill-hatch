import { useContext, useState } from "react";
import Button from "../components/Button";
import Home from "./home";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [active, setActive] = useState("home");
  const { setUserEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const renderContent = () => {
    switch (active) {
      case "home":
        return <Home />;
      case "courses":
        return <h1>courses</h1>;
      case "assessments":
        return <h1>assessments</h1>;
      case "profile":
        return <h1>profile</h1>;
      case "settings":
        return <h1>settings</h1>;
    }
  };
  const navItems = [
    { key: "home", label: "Home", icon: "dashboard-icon.png" },
    { key: "courses", label: "Courses", icon: "dashcourse-icon.png" },
    { key: "assessments", label: "Assessments", icon: "assessments-icon.png" },
    { key: "profile", label: "Profile", icon: "profile-icon.png" },
    { key: "settings", label: "Settings", icon: "settings-icon.png" },
  ];

  const handleLogout = () => {
    setUserEmail("");
    navigate("/login");
  };
  return (
    <div className="w-full flex">
      {/* sidebar */}
      <div className=" fixed top-0 left-0 w-1/6 h-[100vh] bg-[#00418c] flex flex-col justify-between items-center">
        <div className="w-4/5 h-4/5 flex flex-col place-items-center ">
       
          <img src="logo-white.png" className="w-full h-15 my-8" />
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant={active === item.key ? "lightblue" : "blue"} // highlight active
              icon={item.icon}
              text={item.label}
              className=" w-full justify-start mb-2 "
              onClick={() => setActive(item.key)}
            />
          ))}

         
        </div> <div className="w-4/5 mb-6 ">
            <hr className="border-gray-300 my-4" />
            <Button
              variant="blue"
              icon="logout-icon.png"
              text="Logout"
              className="w-full justify-start"
              onClick={handleLogout}
            />
          </div>
      </div>
      {/* content */}
      <div className=" ml-[16.66%] w-5/6 ">{renderContent()}</div>
    </div>
  );
};
export default Dashboard;
