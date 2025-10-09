import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [successMsg, setSuccessMsg] = useState("");


  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required"),
    lastName: yup
      .string()
      .required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password should be at least 6 characters")
      .max(20, "Password cannot be more than 20 characters")
      .required("Password is required"),
    gender: yup
      .string()
      .required("Please select your gender"),
    fieldOfInterest: yup
      .string()
      .required("Please select a field of interest"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to the Terms and Privacy Policy"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
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
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("✅ Sign Up successful!");
    reset();

    setTimeout(() => {
      setSuccessMsg("");
      navigate("/login");
    }, 2000);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const navigate = useNavigate();

  return (
    <div className="w-full place-items-center items-center">
      {successMsg && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-[#00418c] text-[#c2deff] px-10 py-6 rounded-lg shadow-lg text-center font-medium z-50">
          {successMsg}
        </div>
      )}
      <div className="flex items-center justify-center w-full h-[100vh]">
        {/* left side */}
        <div className="w-1/2 place-items-center">
          <div className="w-3/5 mb-5">
            {step === 2 && (
              <Button
                variant="lightblue"
                text="Back"
                onClick={prevStep}
                icon={<ArrowLeft  />}
              />
            )}
          </div>
          {step === 1 && (
            <Button
              className="absolute top-6 left-6"
              variant="lightblue"
              text="Back to Home"
              icon={<ArrowLeft  />}
              onClick={() => navigate("/")}
            />
          )}

          <div className="w-3/5 border-8 border-[#00418c] rounded-xl px-5 py-5">
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
              >
                {step === 1 && (
                  <div>
                    <div className="place-items-center">
                      <img src="icon.png" className="mb-5" />
                      <p className="text-2xl text-center mb-3">
                        Get started with your <br />
                        <span className="text-[#00418c]">SKILLHATCH</span>{" "}
                        account
                      </p>
                      <p className="text-gray-500">
                        Already have an account.{" "}
                        <Link to="/login">
                          <span className="text-[#00418c]">
                            Log in instead.
                          </span>
                        </Link>
                      </p>

                      <div className="mt-10">
                        <p className="mb-2">Join SkillHatch for free as a </p>
                        <div>
                          <Button
                            variant="blue"
                            text="Learner"
                            rounded={false}
                          />
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
                        {errors.firstName && (
                          <p className="w-full bg-red-200 p-1 text-red-500 ">
                            {errors.firstName?.message}
                          </p>
                        )}
                      </div>
                      <div className="w-9/20">
                        <p className="font-medium">Lastname</p>
                        <input
                          {...methods.register("lastName")}
                          className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                        />
                        {errors.lastName && (
                          <p className="w-full bg-red-200 p-1 text-red-500 ">
                            {errors.lastName?.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="font-medium">Email address</p>
                    <input
                      {...methods.register("email")}
                      className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                    />
                    {errors.email && (
                      <p className="w-full bg-red-200 p-1 text-red-500 ">
                        {errors.email?.message}
                      </p>
                    )}
                    <p className="font-medium">Password</p>
                    <input
                      type="password"
                      {...methods.register("password")}
                      className="w-full mb-3 border-1 border-[#00418c] rounded-md px-3 py-2"
                    />
                    {errors.password && (
                      <p className="w-full bg-red-200 p-1 text-red-500 ">
                        {errors.password?.message}
                      </p>
                    )}

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
                      {errors.gender && (
                        <p className="w-full bg-red-200 p-1 text-red-500 ">
                          {errors.gender?.message}
                        </p>
                      )}
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
                      {errors.fieldOfInterest && (
                        <p className="w-full bg-red-200 p-1 text-red-500 ">
                          {errors.fieldOfInterest?.message}
                        </p>
                      )}
                    </div>

                    {/* terms */}
                    <div className="flex items-center mb-3">
                      <input type="checkbox" id="privacy" {...methods.register("terms")} />
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
                    {errors.terms && (
                      <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
                    )}


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
