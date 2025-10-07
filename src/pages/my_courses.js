import SelectedCourses from "./selectedcourses"
import Courses from "../components/Courses";
import allCourses from "../data/courses.json"; // import all courses

const MyCourses = ({ onViewDetails }) => {
  // For now, let’s assume selected courses are the ones that have progress > 0
  const selectedCourses = allCourses.filter((course) => course.progress > 0);
  const unselectedCourses = allCourses.filter((course) => course.progress === 0);

  return (
    <>
      {/* My Selected/Started Courses */}
      <SelectedCourses
        courses={selectedCourses}
        onViewDetails={onViewDetails}
      />

      {/* More Courses */}
      <div className="mt-8">
        <p className="text-xl font-semibold mb-4">Explore more courses</p>
        <Courses
          courses={unselectedCourses}
          variant="courses_page"
          onViewDetails={onViewDetails}
        />
      </div>
    </>
  );
};

export default MyCourses;