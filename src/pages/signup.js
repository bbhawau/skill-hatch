import { useState  } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    defaultValues: {
      month: "",
      year: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      fieldOfInterest: "",
    },
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    
    <div className="w-full place-items-center items-center">
      <div className=" flex items-center justify-center w-full h-[100vh]  ">
        {/* left side */}
        <div className="w-1/2 place-items-center ">
          {/* Step 1 */}
          {step === 1 && (
            <>
              <div className="w-3/5  place-items-center border-8 border-[#00418c] rounded-xl px-5 py-5">
                <img src="icon.png" className="mb-5" />
                <p className="text-2xl text-center mb-3">
                  Get started with your <br />{" "}
                  <span className="text-[#00418c]">SKILLHATCH</span> account
                </p>
                <p className="text-gray-500">
                  Already have an account.{" "}
                  <Link to="/login">
                    {" "}
                    <span className="text-[#00418c]">Log in instead.</span>
                  </Link>
                </p>
                <div className="mt-10">
                  <p className=" mb-2">Join SkillHatch for free as a </p>
                  <div>
                    <Button variant="blue" text="Learner" rounded={false} />
                    <Button variant="white" text="Teacher" rounded={false} />
                  </div>
                </div>
                <form className="flex-col w-full mt-10">
                  <p className="font-medium mb-2">
                    What is your date of birth?
                  </p>
                  <div className="flex justify-between mb-10">
                    {/* Month */}
                    <select className="w-9/20 border-1 border-[#00418c] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="">Month</option>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, i) => (
                        <option key={i} value={i + 1}>
                          {month}
                        </option>
                      ))}
                    </select>
                    {/* Year */}
                    <select className="w-9/20 border-1 border-[#00418c] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="">Year</option>
                      {Array.from({ length: 100 }, (_, i) => {
                        const year = new Date().getFullYear() - i; // last 100 years
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <Button
                    variant="blue"
                    text="Continue"
                    onClick={nextStep}
                    className="w-full mb-3 py-2"
                  />
                </form>
              </div>
            </>
          )}
          {/* Step 2 */}
          {step === 2 && (
            <>
              <div className="w-3/5 mb-5">
                <Button
                  variant="lightblue"
                  text="Back"
                  onClick={prevStep}
                  icon="backarrow.png"
                />
              </div>
              <div className="w-3/5  place-items-center border-8 border-[#00418c] rounded-xl px-5 py-5">
                <form className="flex-col w-full mt-10">
                  <div className="flex justify-between">
                    <div className="w-9/20 ">
                      <p className="font-medium">Firstname</p>
                      <input className="w-full  mb-3 border-1 border-[#00418c] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="w-9/20">
                      <p className="font-medium">Lastname</p>
                      <input className="w-full  mb-3 border-1 border-[#00418c] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>{" "}
                  </div>
                  <p className="font-medium">Email address</p>
                  <input className="w-full  mb-3 border-1 border-[#00418c] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <p className="font-medium">Password</p>
                  <input className="w-full  mb-3 border-1 border-[#00418c] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  {/* gender */}
                  <div className="mb-5">
                    <p className="  font-medium ">Gender</p>
                    <div className="flex justify-between">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preference"
                          value="self-paced"
                          className="text-[#00418c] focus:ring-blue-400"
                        />
                        <span className="text-[#00418c]">Male</span>
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preference"
                          value="live-classes"
                          className="text-[#00418c] focus:ring-blue-400"
                        />
                        <span className="text-[#00418c]">Female</span>
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preference"
                          value="mentorship"
                          className="text-[#00418c] focus:ring-blue-400"
                        />
                        <span className="text-[#00418c]">
                          Prefer not to say
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* field of interest */}
                  <div className="mb-5">
                    <label className="block font-medium ">
                      Field of Interest
                    </label>
                    <select
                      name="fieldOfInterest"
                      className="w-full border-1 border-[#00418c] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        -- Select your field --
                      </option>
                      <option value="technology">Technology</option>
                      <option value="business">Business</option>
                      <option value="design">Design</option>
                    </select>
                  </div>
                  {/* terms and conditions */}
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="w-4 h-4 text-[#00418c] border-[#00418c] rounded mr-2"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the
                      <span className="text-[#00418c]">Terms of Service</span>{" "}
                      and <span className="text-[#00418c]">Privacy Policy</span>
                    </label>
                  </div>
                  {/* buttons */}
                  <Button
                    variant="white"
                    text="Sign in with Google"
                    icon="google.png"
                    className="w-full font-medium mb-3 py-2"
                  />{" "}
                  <Button
                    variant="blue"
                    text="Sign up"
                    className="w-full mb-3 py-2"
                  />
                </form>
              </div>
            </>
          )}
        </div>
        {/* right side */}
        <div className="w-1/2 h-full">
          <img src="login.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
