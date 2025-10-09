import { Search } from "lucide-react";
import Courses from "../components/Courses";
import allCourses from "../data/courses.json";
import { useState } from "react";
const ExploreCourses = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      (course.category &&
        course.category.toLowerCase() === selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div classname="w-full">
      <div className="w-full flex justify-between">
        <div className="flex justify-between border-1 border-[#00418c] w-7/10 p-2 rounded-md items-center">
          <input
            placeholder="Search courses"
            className="w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <Search className="text-gray-500 w-5 h-5" />
        </div>
        <div className="flex items-center w-1/5 justify-between ">
          <p className="font-medium">Filter by</p>
          <div className="">
            <select
              className="w-full border-1 border-[#00418c] text-gray-500 rounded-md px-3 py-2 focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="graphic design">Graphic Design</option>
            </select>
          </div>
        </div>
      </div>
      {/* Courses */}
      {filteredCourses.length > 0 ? (
        <Courses
          courses={filteredCourses}
          variant="courses_page"
          onViewDetails={onViewDetails}
        />
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No courses found matching your search.
        </p>
      )}
    </div>
  );
};

export default ExploreCourses;
