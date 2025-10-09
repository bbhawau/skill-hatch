import CourseCard from "./CourseCard";
import allCourses from "../data/courses.json";

export default function Courses( { courses = allCourses, limit, variant="default", onViewDetails }) {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {displayedCourses.map((course) => (
        <CourseCard
          key={course.id} 
          id={course.id} 
          image={course.image}
          variant={variant}
          icon={course.icon}
          title={course.title}
          description={course.description}
          instructorIcon={course.instructorIcon}
          instructor={course.instructor}
          rating={course.rating}
          learners={course.learners}
          instructorImage={course.instructorImage}
          lessons={course.lessons}
          price={course.price}
          progress={course.progress}
          onViewDetails={onViewDetails} 
          category={course.category}       />
      ))}
    </div>
  );
}
