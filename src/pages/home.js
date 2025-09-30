import { useContext, useState } from "react";
import Button from "../components/Button";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import CoursesPage from "./courses_page";
import { HomeIcon, BookOpen, ClipboardList, User, Settings, LogOut } from "lucide-react";
import Assessments from "./assessments";
import Profile from "./profile";
import Dashboard from "./dashboard";

const Home = () => {
  const [active, setActive] = useState("dashboard");
  const { setUserEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const renderContent = () => {
    switch (active) {
      case "dashboard":
        return <Dashboard />;
      case "courses":
        return <CoursesPage />;
      case "assessments":
        return <Assessments/>;
      case "profile":
        return <Profile/>;
      case "settings":
        return <h1>settings</h1>;
    }
  };
  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: HomeIcon },
    { key: "courses", label: "Courses", icon: BookOpen },
    { key: "assessments", label: "Assessments", icon: ClipboardList },
    { key: "profile", label: "Profile", icon: User },
    { key: "settings", label: "Settings", icon: Settings },
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
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <Button
                key={item.key}
                variant={isActive ? "lightblue" : "blue"} // highlight active
                icon={<Icon className="w-full h-full" color={isActive ? "#00418c" : "#ffffff"} />}
                text={item.label}
                className=" w-full justify-start mb-2 py-2 "
                onClick={() => setActive(item.key)}
              />
            )
          })}


        </div> <div className="w-4/5 mb-6 ">
          <hr className="border-gray-300 my-4" />
          <Button
            variant="blue"
            icon={<LogOut className="w-full h-full" />}
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
export default Home;
