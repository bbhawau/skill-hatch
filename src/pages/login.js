import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { ArrowLeft } from "lucide-react";
const Login = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const { setUserEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(4, "Password should be at least 4 characters")
      .max(20, "Password cannot be more than 20 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    setUserEmail(data.email);
    setSuccessMsg("✅ Login successful!");
    reset();

    setTimeout(() => {
      setSuccessMsg("");
      navigate("/dashboard");
    }, 2000);
  };
  return (
    <div className="w-full place-items-center items-center">
      {" "}
      {successMsg && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-[#00418c] text-[#c2deff] px-10 py-6 rounded-lg shadow-lg text-center font-medium z-50">
          {successMsg}
        </div>
      )}
      <div className=" flex items-center justify-center w-full h-[100vh]  ">
        {/* left side */}
        <div className="w-1/2 max-md:w-full place-items-center ">
          <Button
            className="absolute top-6 left-6"
            variant="lightblue"
            text="Back to Home"
            icon={<ArrowLeft />}
            onClick={() => navigate("/")}
          />

          <div className="w-3/5 max-lg:w-4/5  place-items-center border-8 border-[#00418c] rounded-xl px-5 py-5">
            <img src="icon.png" className="mb-10" />
            <p className="text-2xl text-center">
              Welcome back to <br />{" "}
              <span className="text-[#00418c]">SKILLHATCH</span>
            </p>
            <p className="text-gray-500">
              Log in to your account.{" "}
              <Link to="/signup">
                <span className="text-[#00418c]">Sign up instead.</span>
              </Link>
            </p>
            <form
              className="flex-col w-full mt-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p>Email</p>
              <input
                {...register("email")}
                className="w-full  mb-2 border-1 border-[#00418c] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="w-full bg-red-200 p-1 text-red-500 ">
                  {errors.email?.message}
                </p>
              )}
              <p>Password</p>
              <input
                {...register("password")}
                className="w-full  mb-2 border-1 border-[#00418c] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && (
                <p className="w-full bg-red-200 p-1 text-red-500 ">
                  {errors.password?.message}
                </p>
              )}
              <Button
                variant="blue"
                text="Log in"
                className="w-full mb-3 py-2"
                type="submit"
              />
              <Button
                variant="white"
                text="Sign in with Google"
                icon="google.png"
                className="w-full font-medium mb-3 py-2"
              />
            </form>
            <p className="text-xs">
              By signing up you agree to our{" "}
              <span className="text-[#00418c]">Terms of Service</span> and{" "}
              <span className="text-[#00418c]">Privacy Policy</span>{" "}
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="max-lg:hidden w-1/2 h-full">
          <img src="login.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
