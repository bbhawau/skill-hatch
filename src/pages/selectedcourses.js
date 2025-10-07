import courses from "../data/courses.json";
import CourseCard from "../components/CourseCard";

const SelectedCourses = ({ onViewDetails }) => {
  // Select courses that have progress > 0
  const startedCourses = courses
    .filter((course) => course.progress > 0)
    .slice(0, 3);

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {startedCourses.map((course) => (
          <CourseCard
            key={course.id}
            variant="courses_page"
            id={course.id}
            image={course.image}
            icon={course.icon}
            title={course.title}
            description={course.description}
            instructorImage={course.instructorImage}
            instructor={course.instructor}
            rating={course.rating}
            learners={course.learners}
            lessons={course.lessons}
            price={course.price}
            progress={course.progress}
            showProgress={true}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedCourses;
