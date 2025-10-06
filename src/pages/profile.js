import { useContext } from "react";
import { AuthContext } from "../App";
import Button from "../components/Button";
import { Edit } from "lucide-react";
const Profile = () => {
    const { userEmail } = useContext(AuthContext);
    return (
        <div className="flex flex-col w-9/10 px-10 py-8">
            <div className="w-full flex py-8 items-center">
                <div className="h-40 w-40 rounded-full border border-[#00418c] mr-10">

                </div>
                <div>
                    <p className="text-3xl font-bold ">Taylor Roberts</p>
                    <p className="mb-2">{userEmail}</p>
                    <p className="text-gray-500 mb-2">Add Bio</p>
                    <Button variant="lightblue" text="EDIT PROFILE" className="border-none text-black" icon={<Edit className="w-full h-full" />} />
                </div>
            </div>
            <div className="w-full grid grid-cols-4 gap-20  mb-5">
                <div className=" border-4 border-[#00418c] place-items-center  rounded-md  py-3">
                    <p className="text-4xl font-medium tracking-wide">8</p>

                    <p className="text-md font-medium">Courses Enrolled</p>
                </div>

                <div className=" border-4 border-[#00418c] place-items-center rounded-md  py-3">
                    <p className="text-4xl font-medium tracking-wide">6</p>

                    <p className="text-md font-medium">Awards</p>
                </div>

                <div className=" border-4 border-[#00418c] place-items-center rounded-md  py-3">
                    <p className="text-4xl font-medium tracking-wide">120</p>

                    <p className="text-md font-medium">Hours Learned</p>
                </div>
                <div className=" border-4 border-[#00418c] place-items-center rounded-md  py-3">
                    <p className="text-4xl font-medium tracking-wide">15</p>

                    <p className="text-md font-medium">Days Streak</p>
                </div>
            </div>

            <div className="w-full border-4 border-[#00418c] rounded-md p-3 ">
                {/* progress overview */}
                <div className="w-full grid grid-cols-[2fr_1fr] gap-6 mb-4">
                    <div className=" flex flex-col bg-[#e3f1ff] p-5 rounded-lg">
                        <p className="font-medium text-xl mb-2">Progress Overview</p>

                        <div className="mb-2">
                            <p>Python</p>
                            {/* Progress bar wrapper */}
                            <div className=" border-1 border-[#00418c] h-3 mt-2 rounded-full">
                                {/* Filled part */}
                                <div
                                    className="bg-[#00418c] h-full rounded-full "
                                    style={{ width: "60%" }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p>Data Science</p>
                            {/* Progress bar wrapper */}
                            <div className=" border-1 border-[#00418c] h-3 mt-2 rounded-full">
                                {/* Filled part */}
                                <div
                                    className="bg-[#00418c] h-full rounded-full "
                                    style={{ width: "60%" }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p>UI/UX Design</p>
                            {/* Progress bar wrapper */}
                            <div className=" border-1 border-[#00418c] h-3 mt-2 rounded-full">
                                {/* Filled part */}
                                <div
                                    className="bg-[#00418c] h-full rounded-full "
                                    style={{ width: "60%" }}
                                ></div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <p className="text-gray-500 ">View All Courses</p>
                        </div>
                    </div>
                    {/* awards */}
                    <div className="bg-[#e3f1ff] p-5 rounded-lg">
                        <p className="font-medium text-xl mb-2">Awards</p>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                            <div className=" bg-[#c2deff] flex flex-col place-items-center items-center rounded-lg p-2">
                                <img src="brain.png" className="w-10 h-10" />
                                <p className="w-full text-center">Critical Thinker</p>
                            </div>
                            <div className="  bg-[#c2deff] flex flex-col items-center rounded-lg p-3">
                                <img src="star.png" className="w-10 h-10" />
                                <p className="w-full text-center">Top Scorer</p>
                            </div>
                            <div className="bg-[#c2deff] flex flex-col items-center rounded-lg p-3">
                                <img src="bolt.png" className="w-10 h-10" />
                                <p className="w-full text-center">Fast Learner</p>
                            </div>
                            <div className="bg-[#c2deff]  flex flex-col items-center rounded-lg p-3">
                                <img src="cap.png" className="w-10 h-10" />
                                <p className="w-full text-center">Quiz Champion</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* recent activity */}
                <div className="w-full grid grid-cols-2 gap-6 mb-4">
                    <div className=" flex flex-col bg-[#e3f1ff] p-5 rounded-lg">
                        <p className="font-medium text-xl mb-2">Recent Activity</p>
                        <div className="flex flex-col">
                            <div className="flex justify-between mb-2">
                                <p className="text-sm">Last Login</p>
                                <p className="text-sm text-gray-500">1 hour ago</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-sm">Lesson: Data Visualization</p>
                                <p className="text-sm text-gray-500">2 days ago</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-sm">Quiz 93%</p>
                                <p className="text-sm text-gray-500">1 hour ago</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-sm">Assignment: Regression analysis</p>
                                <p className="text-sm text-gray-500">3 days ago</p>
                            </div>
                        </div>
                    </div>
                    {/* certificates */}
                    <div className=" flex flex-col bg-[#e3f1ff] p-5 rounded-lg">
                        <p className="font-medium text-xl mb-2">Certificates</p>
                        <div className="flex justify-between">
                            <div className="flex mb-2">
                                <img src="cert.png" className="w-6 h-6 mr-2" />
                                <div>
                                    <p className="font-medium text-md">Python Basics</p>
                                    <p className="text-gray-500 text-sm"> Certificate</p></div>
                            </div>

                            <Button variant="blue" text="Download" className="h-4/5 items-center" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex mb-2">
                                <img src="badge-cert.png" className="w-6 h-6 mr-2" />
                                <div>
                                    <p className="font-medium text-md">Data Modelling</p>
                                    <p className="text-gray-500 text-sm">Badge</p></div>
                            </div>

                            <Button variant="blue" text="Download" className="h-4/5 items-center" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex mb-2">
                                <img src="file-badge.png" className="w-6 h-6 mr-2" />
                                <div>
                                    <p className="font-medium text-md">Google Dta Analytics</p>
                                    <p className="text-gray-500 text-sm">External Certification</p></div>
                            </div>

                            <Button variant="blue" text="Download" className="h-4/5 items-center" />
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-[2fr_3fr] gap-6">
                    <div className=" flex flex-col bg-[#e3f1ff] p-5 rounded-lg">
                        <p className="font-medium text-xl mb-2">Community Engagement</p>
                        <div className="flex mb-2">
                            <img src="file-badge.png" className="w-6 h-6 mr-2" />
                            <div>
                                <p className="font-medium text-md">Forum Post</p>
                                <p className="text-gray-500 text-sm">Data Science Discussion</p></div>
                        </div>
                        <div className="flex mb-2">
                            <img src="file-badge.png" className="w-6 h-6 mr-2" />
                            <div>
                                <p className="font-medium text-md">Study Group</p>
                                <p className="text-gray-500 text-sm">ML Project</p></div>
                        </div>
                    </div>

                    <div className=" flex flex-col bg-[#e3f1ff] p-5 rounded-lg">
                        <p className="font-medium text-xl mb-2">Resources</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#00418c]">
                            <p>Download code files</p>
                            <p>Practice quiz</p>
                            <p>Past Questions</p>
                            <p>Study Guide</p>
                            <p>Download lecture notes</p>
                            <p>Fully recorded lectures</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
