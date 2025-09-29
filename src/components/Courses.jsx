import CourseCard from "./CourseCard";
import courses from "../data/courses.json";

export default function Courses( { limit }) {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {displayedCourses.map((course) => (
        <CourseCard
          key={course.id}
          image={course.image}
          icon={course.icon}
          title={course.title}
          description={course.description}
          instructorIcon={course.instructorIcon}
          instructor={course.instructor}
          rating={course.rating}
          learners={course.learners}
        />
      ))}
    </div>
  );
}
