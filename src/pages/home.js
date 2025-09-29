import Button from "../components/Button";
import UserInfo from "../components/UserInfo";
const Home = () => {

    return (
        <div className="flex flex-col w-full px-10">
            <UserInfo/>

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
                    <img src="bargraph.png" className="h-12" />
                </div>

                <div className="border-3 border-[#00418c] rounded-md  p-3">
                    <p className="text-4xl font-medium tracking-wide">5</p>
                    <p>Streak</p>
                    <img src="fire.png" className="h-12" />
                </div>

                <div className="border-3 border-[#00418c] rounded-md  p-3">
                    <p className="text-4xl font-medium tracking-wide">4</p>
                    <p>Badges</p>
                    <img src="badge.png" className="h-12" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-5">
                {/* Left column with 2 rows */}
                <div className="col-span-3 grid grid-rows-2 gap-4 ">
                    <div className="border-3 border-[#00418c] rounded-md p-4">
                        <p className="font-medium">Upcoming</p>
                        <div className="flex pt-2">
                            <img src="assignment-icon.png" className="w-4 h-4 mr-1" />
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
                            <img src="live-icon.png" className="w-4 h-4 mr-1" />
                            <div>
                                <p className="text-sm font-normal">Live Session: UX Design</p>
                                <p className="text-xs text-gray-500">
                                    Live Q&A Session with Professor Smith, Saturday
                                </p>
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <img src="quiz-icon.png" className="w-4 h-4 mr-1" />
                            <div>
                                <p className="text-sm font-normal">Quiz Reminder</p>
                                <p className="text-xs text-gray-500">
                                    Calculus Unit 2 Quiz – Friday
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
                    <p className="font-medium">Current Courses</p>
                    <div className="w-4/5">
                        <img src="python.png" />
                        <p className="font-medium">Python</p>
                        {/* Progress bar wrapper */}
                        <div className="w-full bg-gray-200 h-3 mt-2">
                            {/* Filled part */}
                            <div className="bg-[#00418c] h-3 " style={{ width: "45%" }}></div>
                        </div>
                        <p className="text-xs">You have completed 45% of this course.</p>
                        <Button variant="blue" text="Click to Continue" className="mt-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
