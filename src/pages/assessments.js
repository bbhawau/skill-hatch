import Button from "../components/Button";
import UserInfo from "../components/UserInfo";
import { CheckCircle, AlertTriangle } from "lucide-react";

const Assessments = () => {
  return (
    <div className="flex flex-col w-full px-10">
      <UserInfo />
      <div className="w-full flex justify-between  mb-5">
        <div className="w-1/5 border-4 border-[#00418c] text-[#00418c] rounded-md px-5 py-3">
          <p className="text-4xl font-medium tracking-wide">3</p>
          <img src="active-subjects.png" className="w-10 h-10 my-2" />
          <p className="text-md font-medium">Active Subjects</p>
        </div>

        <div className=" w-1/5 text-[#00418c] border-4 border-[#00418c] rounded-md px-5 py-3">
          <p className="text-4xl font-medium tracking-wide">12</p>

          <img src="completed-assessments.png" className="w-10 h-10  my-2" />
          <p className="text-md font-medium">Completed Assessments</p>
        </div>

        <div className=" w-1/5 border-4 border-[#00418c] text-[#00418c] rounded-md  px-5 py-3">
          <p className="text-4xl font-medium tracking-wide">78%</p>

          <img src="average-score.png" className="w-10 h-10  my-2" />
          <p className="text-md font-medium">Average Score</p>
        </div>
      </div>

      <div className="w-full flex space-x-50">
        <div className=" w-1/3 border-4 border-[#00418c] rounded-lg px-8 py-3">
          <div className="flex justify-end">
            <Button variant="lightblue" text="Passed!" className="border-none" />
          </div>
          <img src="python-basics.png" className="w-30 h-30 mb-8" />
          <p className="font-bold text-xl mb-8">Python Basics</p>
          <CheckCircle className="text-green-500 w-15 h-15 mb-8" />
          <p className="text-green-500 text-5xl font-medium mb-8">85%</p>

          <div className="flex justify-between">
            <Button variant="blue" text="Retry Quiz" />
            <Button variant="blue" text="Download Certificate" />
          </div>
        </div>
        <div className=" w-1/3 border-4 border-[#00418c] rounded-lg px-8 py-3">
          <div className="flex justify-end">
            <Button variant="lightblue" text="Try again" className="border-none" />
          </div>
          <img src="datasci-quiz.png" className="w-30 h-30 mb-8" />
          <p className="font-bold text-xl mb-8">Data Science QUIZ 2</p>
          <AlertTriangle className="text-red-500 w-15 h-15 mb-8" />
          <p className="text-red-500 text-5xl font-medium mb-8">45%</p>

          <div className="flex justify-between">
            <Button variant="blue" text="Retry Quiz" />
            <Button variant="blue" text="Download Certificate" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assessments;
