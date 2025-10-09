import courses from "../data/courses.json";
import StarRating from "../components/StarRating";
import Button from "../components/Button";
import { CheckCircle, Circle } from "lucide-react";

export default function CourseDetails({ id, onBack }) {
  const course = courses.find((c) => c.id === id);

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="w-full">
      <button onClick={onBack} className="text-[#00418c] mt-8 mb-2 hover:underline">
        ← Back to Courses
      </button>

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-70 object-cover mb-6"
      />
      <div className="w-1/2 mb-3">
        <div className="flex items-center space-x-2 mb-2">
          <img
            src={course.icon}
            alt={`${course.title} icon`}
            className="w-10 h-10"
          />
          <p className="font-medium text-3xl tracking-wide">{course.title}</p>
        </div>
        <div className="flex py-2">
          <div className="w-10 h-10 rounded-full mr-3">
            <img src={course.instructorImage} className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            {/* Course Title with Icon */}

            <p className="text-sm">{course.instructor}</p>
            <StarRating rating={course.rating} learners={course.learners} />
            {/* Price */}
            <div className="flex text-sm items-center ">
              <span className="font-medium ">PRICE:</span>
              <div className="bg-[#c2deff] px-2 rounded-2xl">
                {course.price}
              </div>
            </div>
            <div className="flex">
              {/* Progress bar wrapper */}
              <div className="w-50 bg-[#c2deff] h-3 mt-2 rounded-full mr-2">
                {/* Filled part */}
                <div
                  className="bg-[#00418c] h-full rounded-full "
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p>0% complete</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[#00418c] font-medium">Course Overview</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="w-3/5 border-4 border-[#00418c] rounded-md p-3 my-5">
          <p className="text-[#00418c] font-medium mb-2">Lessons (10 Total)</p>

          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>

          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>

          <div className="flex justify-between mb-2">
            <div className="flex items-center ">
              <CheckCircle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>

          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Circle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Circle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Circle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Circle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Circle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Circle className="w-6 h-6 text-[#00418c] mr-2" />
              <p>Introduction to {course.title}</p>
            </div>
            <p className="text-[#00418c]">Click to learn</p>
          </div>
          <Button variant="blue" text="Continue learning" className="w-50 py-2 mt-3"/>
        </div>
      </div>
    </div>
  );
}
