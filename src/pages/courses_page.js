import { useState } from "react";
import UserInfo from "../components/UserInfo";
import ExploreCourses from "./explore_courses";
import MyCourses from "./my_courses";
import CourseDetails from "./course_details";

const CoursesPage = () => {
    const [activeScreen, setActiveScreen] = useState("explore");
 const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleViewDetails = (id) => {
    setSelectedCourseId(id);
  };

  const handleBack = () => {
    setSelectedCourseId(null);
  };

  const renderContent = () => {
    // If a course has been selected, show its details instead
    if (selectedCourseId) {
      return <CourseDetails id={selectedCourseId} onBack={handleBack} />;
    }

    // Otherwise, show the normal tab content
    switch (activeScreen) {
      case "explore":
        return <ExploreCourses onViewDetails={handleViewDetails} />;
      case "other":
        return <MyCourses   onViewDetails={handleViewDetails} />;
      default:
        return null;
    }
  };
    return (
        <div className="flex flex-col w-full px-10">
            {!selectedCourseId && (
        <>
            <UserInfo />
            <h1 className="font-medium text-xl mb-3">Courses</h1>
            <div className=" w-full place-items-center items-center">
                <div className="flex bg-[#c2deff] rounded-full w-1/5 p-0.5 justify-between mb-5">
                    <button
                        className={`px-2 py-1 rounded-full text-sm ${activeScreen === "explore" ? "bg-white text-black" : ""
                            }`}
                        onClick={() => setActiveScreen("explore")}
                    >
                        Explore courses
                    </button>
                    <button
                        className={`px-2 py-1 rounded-full text-sm ${activeScreen === "other" ? "bg-white text-black" : ""
                            }`}
                        onClick={() => setActiveScreen("other")}
                    >
                        My courses
                    </button>
                </div></div></>)}
            <div className="w-full">{renderContent()}</div>
        </div>
    );
};
export default CoursesPage;
