import { Search } from "lucide-react";
import Courses from "../components/Courses";
const ExploreCourses = () => {
  return (
    <div classname="w-full">
      <div className="w-full flex justify-between">
        <div className="flex justify-between border-1 border-[#00418c] w-7/10 p-2 rounded-md items-center">
          <input
            placeholder="Search courses"
            className="w-full focus:outline-none"
          />
          <Search className="text-gray-500 w-5 h-5" />
        </div>
        <div className="flex items-center w-1/5 justify-between ">
          <p className="font-medium">Filter by</p>
          <div className="">
            <select className="w-full border-1 border-[#00418c] bg-[#c2deff] text-gray-500 rounded-md px-3 py-2 focus:outline-none">
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="creative arts">Creative Arts</option>
              <option value="science and health">Science and Health</option>
              <option value="languages">Languages</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="sports">Sports</option>
              <option value="graphic design">Graphic Design</option>
            </select>
          </div>
        </div>
      </div>
      {/* Courses */}
      <Courses variant="courses_page"/>
    </div>
  );
};

export default ExploreCourses;
