import UserInfo from "../components/UserInfo";

const Assessments = () => {
  return (
    <div className="flex flex-col w-full px-10">
      <UserInfo />
      <div className="w-full flex justify-between gap-8">
        <div className="w-1/4 border-4 border-[#00418c] text-[#00418c] rounded-md px-5 py-3">
          <p className="text-4xl font-medium tracking-wide">3</p>
          <img src="active-subjects.png" className="w-10 h-10 my-2" />
          <p className="text-md font-medium">Active Subjects</p>
        </div>

        <div className=" w-1/4 text-[#00418c] border-4 border-[#00418c] rounded-md px-5 py-3">
          <p className="text-4xl font-medium tracking-wide">12</p>

          <img src="completed-assessments.png" className="w-10 h-10  my-2" />
          <p className="text-md font-medium">Completed Assessments</p>
        </div>

        <div className=" w-1/4 border-4 border-[#00418c] text-[#00418c] rounded-md  px-5 py-3">
          <p className="text-4xl font-medium tracking-wide">78%</p>

          <img src="average-score.png" className="w-10 h-10  my-2" />
          <p className="text-md font-medium">Average Score</p>
        </div>
      </div>
    </div>
  );
};
export default Assessments;
