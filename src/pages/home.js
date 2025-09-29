import { useContext } from "react";
import { AuthContext } from "../App";
import { FaUser } from "react-icons/fa";
const Home = () => {
  const { userEmail } = useContext(AuthContext);
  return (
    <div className="flex flex-col w-full px-10">
      <div className="flex justify-between w-full  py-3">
        {/* <!-- Search --> */}
        <div class="flex justify-center items-center">
          <div class="h-3/5 bg-white border-[1px] border-gray-500 px-2 flex items-center justify-between ">
            <input
              type="text"
              placeholder="Search anything"
              class="outline-none focus:outline-none focus:ring-0 text-xs w-60"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
              />
            </svg>
          </div>
        </div>
        {/* user info */}
        <div className="flex">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white ">
            <FaUser className="text-[#00418c] text-3xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">{userEmail}</p>
            <p className="text-sm text-gray-500">Learner</p>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200 my-2" />

      <p className="font-medium mb-3">Dashboard Overview</p>
      <div className=" grid grid-cols-4 gap-8">
        <div className="border-3 border-[#00418c] rounded-md p-3">
          <p className="text-4xl font-medium tracking-wide">60%</p>
          <p className="text-sm">Progress</p>
          {/* Progress bar wrapper */}
          <div className="w-full bg-gray-200 h-3 mt-2">
            {/* Filled part */}
            <div className="bg-[#00418c] h-3 " style={{ width: "60%" }}></div>
          </div>
          <p className="text-xs">You have completed 12/18 courses.</p>
        </div>
        <div className="border-3 border-[#00418c] rounded-md p-3">
          <p className="text-4xl font-medium tracking-wide">15.4</p>
          <p>Hours learned</p>
          <img src="bargraph.png" />
        </div>
        <div className="border-3 border-[#00418c] rounded-md  p-3">
          <p className="text-4xl font-medium tracking-wide">5</p>
          <p>Streak</p>
          <img src="fire.png" />
        </div>
        <div className="border-3 border-[#00418c] rounded-md  p-3">
          <p className="text-4xl font-medium tracking-wide">4</p>
          <p>Badges</p>
          <img src="badge.png" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {/* Left column with 2 rows */}
        <div className="col-span-3 grid grid-rows-2 gap-4 ">
          <div className="border-3 border-[#00418c] rounded-md p-4">
            <p className="font-medium">Upcoming</p>
            <div className="flex pt-2">
              <img src="assignment-icon.png" className="w-4 h-4 " />
              <div>
                <p className="text-sm font-normal">
                  Assignment 3: Data Modelling
                </p>
                <p className="text-xs text-gray-500">
                  Due Sep 5, 2025 - 11:59pm
                </p>
              </div>
            </div>
            <div className="flex pt-2">
              <img src="live-icon.png" className="w-4 h-4 " />
              <div>
                <p className="text-sm font-normal">Live Session: UX Design</p>
                <p className="text-xs text-gray-500">
                  Due Sep 5, 2025 - 11:59pm
                </p>
              </div>
            </div>
            <div className="flex pt-2">
              <img src="quiz-icon.png" className="w-4 h-4 " />
              <div>
                <p className="text-sm font-normal">Quiz Reminder</p>
                <p className="text-xs text-gray-500">
                  Due Sep 5, 2025 - 11:59pm
                </p>
              </div>
            </div>
          </div>
          {/* community */}
          <div className="border-3 border-[#00418c] rounded-md p-4">
            <div className="flex justify-between">
              <p className="font-medium">Community Feed</p>
              <p className="text-sm text-[#00418c]">View all</p>
            </div>
            {/* smith */}
            <div className="flex mt-2 items-center">
              <div className="h-10 w-10 mr-2">
                <img src="smith.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-sm font-medium">Professor Smith</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
                <p className="text-xs">
                  Reminder: Meeting at 5pm. (Zoom link attached).{" "}
                </p>
              </div>
            </div>
            {/* smith */}
            <div className="flex mt-2 items-center">
              <div className="h-10 w-10 mr-2">
                <img src="sarah.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-sm font-medium">Sarah K.</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
                <p className="text-xs">
                  Does anyone understand Question 4 of the Assignment 22. Lets
                  discuss
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column with one row (takes full height) */}
        <div className="col-span-1 border-3 border-[#00418c] rounded-md p-4">
          <p>Current Courses</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
