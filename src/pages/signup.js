import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
  const navigate = useNavigate();

  return (
    <div className="w-full place-items-center items-center">
      <div className="flex items-center justify-center w-full h-[100vh]">
        {/* left side */}
        <div className="w-1/2 place-items-center">
          <div className="w-3/5 mb-5">
            {step === 2 && (
              <Button
                variant="lightblue"
                text="Back"
                onClick={prevStep}
                icon="backarrow.png"
              />
            )}
          </div>
          {step === 1 && (


              <Button
                className="absolute top-6 left-6"
                variant="lightblue"
                text="Back to Home"
                icon={<ArrowLeft className="" />}
                onClick={() => navigate("/")}
              />
            )}


          <div className="w-3/5 border-8 border-[#00418c] rounded-xl px-5 py-5">
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data) => console.log(data))}
              >
                {step === 1 && (
                  <div >
                    <div className="place-items-center">
                      <img src="icon.png" className="mb-5" />
                      <p className="text-2xl text-center mb-3">
                        Get started with your <br />
                        <span className="text-[#00418c]">SKILLHATCH</span> account
                      </p>
                      <p className="text-gray-500">
                        Already have an account.{" "}
                        <Link to="/login">
                          <span className="text-[#00418c]">Log in instead.</span>
                        </Link>
                      </p>

                      <div className="mt-10">
                        <p className="mb-2">Join SkillHatch for free as a </p>
                        <div>
                          <Button variant="blue" text="Learner" rounded={false} />
                          <Button
                            variant="white"
                            text="Teacher"
                            rounded={false}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="font-medium mb-2 mt-10">
                      What is your date of birth?
                    </p>
                    <div className="flex justify-between mb-10">
                      {/* Month */}
                      <select
                        {...methods.register("month")}
                        className="w-9/20 border-1 border-[#00418c] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
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
                      <select
                        {...methods.register("year")}
                        className="w-9/20 border-1 border-[#00418c] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (_, i) => {
                          const year = new Date().getFullYear() - i;
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
                      type="button"
                      onClick={nextStep}
                      className="w-full mb-3 py-2"
                    />
                  </div>
                )}

                {step === 2 && (
                  <>
                    <div className="flex justify-between">
                      <div className="w-9/20">
                        <p className="font-medium">Firstname</p>
                        <input
                          {...methods.register("firstName")}
                          className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                        />
                      </div>
                      <div className="w-9/20">
                        <p className="font-medium">Lastname</p>
                        <input
                          {...methods.register("lastName")}
                          className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                        />
                      </div>
                    </div>

                    <p className="font-medium">Email address</p>
                    <input
                      {...methods.register("email")}
                      className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                    />

                    <p className="font-medium">Password</p>
                    <input
                      type="password"
                      {...methods.register("password")}
                      className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                    />

                    {/* gender */}
                    <div className="mb-5">
                      <p className="font-medium">Gender</p>
                      <div className="flex justify-between">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="Male"
                            {...methods.register("gender")}
                          />
                          <span className="text-[#00418c]">Male</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="Female"
                            {...methods.register("gender")}
                          />
                          <span className="text-[#00418c]">Female</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="Prefer not to say"
                            {...methods.register("gender")}
                          />
                          <span className="text-[#00418c]">
                            Prefer not to say
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* field of interest */}
                    <div className="mb-5">
                      <label className="block font-medium">
                        Field of Interest
                      </label>
                      <select
                        {...methods.register("fieldOfInterest")}
                        className="w-full border-1 border-[#00418c] rounded-md px-3 py-2"
                      >
                        <option value="">-- Select your field --</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="design">Design</option>
                      </select>
                    </div>

                    {/* terms */}
                    <div className="flex items-center mb-3">
                      <input type="checkbox" id="privacy" />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-gray-600 ml-2"
                      >
                        I agree to the
                        <span className="text-[#00418c]">
                          {" "}
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-[#00418c]">Privacy Policy</span>
                      </label>
                    </div>

                    <Button
                      variant="white"
                      text="Sign in with Google"
                      icon="google.png"
                      className="w-full font-medium mb-3 py-2"
                    />
                    <Button
                      variant="blue"
                      text="Sign up"
                      type="submit"
                      className="w-full mb-3 py-2"
                    />
                  </>
                )}
              </form>
            </FormProvider>
          </div>
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
