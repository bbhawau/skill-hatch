import { useContext } from "react";
import { AuthContext } from "../App";
import { FaUser } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
const UserInfo = ()=>{
    const { userEmail } = useContext(AuthContext);
    return(
        <><div className="flex justify-between w-full  py-3">
            {/* <!-- Search --> */}
            <div class="flex justify-center items-center">
                <div class="h-3/5 bg-white border-[1px] border-gray-500 px-2 flex items-center justify-between ">
                    <input
                        type="text"
                        placeholder="Search anything"
                        class="outline-none focus:outline-none focus:ring-0 text-xs w-60" />
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
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" />
                    </svg>
                </div>
            </div>
            {/* user info */}
            <div className="flex w-1/5 items-center justify-between">
                <button className="relative">
                    <FiBell className="text-xl" />
                    {/* notification badge */}
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        3
                    </span>
                </button>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white ">
                    <FaUser className="text-[#00418c] text-3xl" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm">{userEmail}</p>
                    <p className="text-sm text-gray-500">Learner</p>
                </div>
            </div>
        </div><hr className="border-t border-gray-200 my-2" /></>
    )
}
export default UserInfo;