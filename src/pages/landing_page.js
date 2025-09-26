import { Link } from "react-router-dom";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import Courses from "../components/Courses";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const LandingPage = () => {
  return (
    <div className="bg-white place-items-center">
      <div className="bg-white w-9/10 ">
        {/* nav */}
        <div className=" w-full flex justify-between">
          <img src="/logo.png" alt="logo" className="h-15" />

          <nav className="flex items-center justify-between space-x-10 font-medium">
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <div className="space-x-2">
              <Link to="/login">
                <Button text="Login" variant="white" />
              </Link>
              <Link to="/signup">
                <Button text="Sign up" variant="blue" />
              </Link>
            </div>
          </nav>
        </div>
        {/* body */}
        <div className="flex bg-white h-100">
          {/* text */}
          <div className="w-1/2 place-content-center">
            <p className="text-5xl font-bold mb-5">
              Learn Skills <br />
              That <span className="text-[#00418c]">Open Doors</span>{" "}
            </p>
            <p className="text-gray-500 ">
              Curated online courses help you grow in technology, business, and
              creativity.
            </p>
            <p className="text-gray-500 mb-5">
              Learn from experts, gain practical skills, and apply them to real
              opportunities.
            </p>
            <Link to="/signup">
              <Button variant="blue" text="Get Started" />
            </Link>
          </div>
          {/* image */}
          <div className="w-1/2 h-full">
            <img
              src="/landingpic.png"
              alt="woman at desk"
              className="w-full h-full "
            />
          </div>
        </div>
        {/* why skill hatch */}
        <div className="w-full mt-10">
          <p className="text-3xl font-bold">
            Why <span className="text-[#00418c]"> SKILLHATCH?</span>{" "}
          </p>
          <p className="text-gray-500 ">
            Discover what makes Skillhatch the smarter way to learn.
          </p>
          <div className="w-full flex mt-5 text-sm font-medium justify-between">
            <div className="flex place-items-center h-10 space-x-5">
              <img src="/target.png" alt="target" className="h-full" />
              <p>
                Curated courses <br />
                from experts
              </p>
            </div>
            <div className="flex place-items-center h-10 space-x-5">
              <img src="/graph.png" alt="graph" className="h-full" />
              <p>
                Track progress &<br /> achievements
              </p>
            </div>
            <div className="flex place-items-center h-10 space-x-5">
              <img src="/group.png" alt="group" className="h-full" />
              <p>
                Learn anywhere on
                <br /> web or mobile
              </p>
            </div>
            <div className="flex place-items-center h-10 space-x-5">
              <img src="/trophy.png" alt="trophy" className="h-full" />
              <p>
                Certificates of
                <br /> completion
              </p>
            </div>
          </div>
        </div>
        {/* featured courses */}
        <div className="w-full mt-20">
          <p className="text-3xl font-bold">
            Featured <span className="text-[#00418c]"> Courses</span>{" "}
          </p>
          <p className="text-gray-500 ">
            Explore our most viewed courses on SkillHatch.
          </p>
          <div>
            <Courses />
          </div>
          <Button variant="blue" text="Explore all courses" />
        </div>
        {/* how it works */}
        <div className="w-full mt-20">
          <p className="text-3xl font-bold">
            How it <span className="text-[#00418c]"> Works</span>{" "}
          </p>
          <p className="text-gray-500">
            Use our platform seamlessly with 3 easy steps.
          </p>
          <div className="flex items-center justify-between">
            {/* step 1 */}
            <div className="flex space-x-3">
              <div className="bg-[#80a0c4] rounded px-2 place-content-center h-1/4">
                <p className="text-sm">1</p>
              </div>
              <div className="flex flex-col w-60">
                <p>Sign up</p>
                <p className="text-gray-500 text-xs">
                  Take the first step toward your future. Creating your
                  SkillHatch account is quick and easy, giving you instant
                  access to world-class courses in technology, business, and
                  design.
                </p>
              </div>
            </div>
            {/* arrow */}
            <div className="w-10 h-10">
              <img src="/arrow.png" alt="arrow" className="w-full h-full" />
            </div>
            {/* step 2 */}
            <div className="flex space-x-3">
              <div className="bg-[#80a0c4] rounded px-2 place-content-center h-1/4">
                <p className="text-sm">2</p>
              </div>
              <div className="flex flex-col w-60">
                <p>Learn</p>
                <p className="text-gray-500 text-xs">
                  Dive into expertly curated lessons built for real-world
                  impact. Learn from top instructors, practice with hands-on
                  projects, and gain the skills that employers and industries
                  are actively looking for.
                </p>
              </div>
            </div>
            {/* arrow */}
            <div className="w-10 h-10">
              <img src="/arrow.png" alt="arrow" className="w-full h-full" />
            </div>
            {/* step 3 */}
            <div className="flex space-x-3">
              <div className="bg-[#80a0c4] rounded px-2 place-content-center h-1/4">
                <p className="text-sm">3</p>
              </div>
              <div className="flex flex-col w-60">
                <p>Grow</p>
                <p className="text-gray-500 text-xs">
                  Turn your knowledge into transformation. Whether it’s landing
                  your first job, scaling your business, or launching a creative
                  project, SkillHatch helps you grow beyond learning—into real
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* trust skillhatch */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-x-18 gap-y-12 mt-20">
          <div>
            <p className="text-4xl font-bold mb-5">
              Over 100,000 learners trust
              <span className="text-[#00418c]"> SkillHatch</span>
            </p>
            <p className="text-gray-500  mb-5">
              Free to join. Upgrade anytime.
            </p>
            <Link to="/signup">
              {" "}
              <Button variant="blue" text="Get started" />
            </Link>
          </div>
          {/* review 1*/}
          <div className="w-70 ">
            <p className="text-gray-500 text-md mb-5">
              “I enrolled in the UI Design course and landed my first internship
              within 3 months. The certificates look great on my LinkedIn!”
            </p>
            <div className="flex space-x-3 items-center">
              <div className="h-8 w-8 ">
                <img src="jess.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Jessica K.,</p>
                <p className="text-black text-md">Design Student</p>
              </div>
            </div>
          </div>
          {/* review 2*/}
          <div className="w-70 ">
            <p className="text-gray-500 text-md mb-5">
              “The instructors really break things down clearly. I especially
              enjoy the discussion forums where I can ask questions.”
            </p>
            <div className="flex space-x-3 items-center">
              <div className="h-8 w-8 ">
                <img src="tobi.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Tobi A.,</p>
                <p className="text-black text-md">Marketing Graduate</p>
              </div>
            </div>
          </div>

          {/* review 3*/}
          <div className="w-70 ">
            <p className="text-gray-500 text-md mb-5">
              “SkillHatch is different from other platforms — the courses are
              curated and not overwhelming. It feels like the platform grows
              with me.”
            </p>
            <div className="flex space-x-3 items-center">
              <div className="h-8 w-8 ">
                <img src="maya.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Maya R.,</p>
                <p className="text-black text-md">Entrepreneur</p>
              </div>
            </div>
          </div>
          {/* review 4*/}
          <div className="w-70 ">
            <p className="text-gray-500 text-md mb-5">
              “The courses are practical and straight to the point. I love how I
              can take lessons on my phone during my commute.”
            </p>
            <div className="flex space-x-3 items-center">
              <div className="h-8 w-8 ">
                <img src="amira.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Amira S.,</p>
                <p className="text-black text-md">Business Analyst</p>
              </div>
            </div>
          </div>
          {/* review 5*/}
          <div className="w-70 ">
            <p className="text-gray-500 text-md mb-5">
              “SkillHatch made learning Python so easy. The progress tracker
              kept me motivated, and now I use these skills daily at work.”
            </p>
            <div className="flex space-x-3 items-center">
              <div className="h-8 w-8 ">
                <img src="daniel.png" alt="icon" className="h-full w-full" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Daniel O.,</p>
                <p className="text-black text-md">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tutor */}
      <div className="w-full place-items-center items-center py-10">
        <p className="text-4xl font-medium">
          Prefer a <span className="text-[#00418c]">One-on-One </span>Tutor
        </p>
        <p className="text-2xl font-medium text-gray-500">
          Talk to a SkillHatch Advisor today
        </p>
        <div className="flex w-3/5 place-content-center items-center">
          <img src="man-tutor.png" className="w-1/2 h-80 w-80" />
          <img src="woman-tutor.png" className="w-1/2  h-80 w-80" />
        </div>
        <div className="mt-5 flex justify-evenly w-2/5  ">
          <Button
            variant="blue"
            text="Request a specific tutor"
            className="w-9/20"
          />
          <Button
            variant="white"
            text="Book a virtual meeting"
            className="w-9/20"
          />
        </div>
      </div>
      {/* stay up to date */}
      <div className="w-full bg-[#c2deff] place-items-center items-center  py-10">
        <p className="text-2xl font-bold">
          Stay up-to-date on everything SkillHatch
        </p>
        <p className="text-gray-500 text-xs">
          Be the first to get latest updates from SkillHatch
        </p>
        <div className="flex mt-10">
          <input
            placeholder="Enter your email address"
            className="p-3 border border-[#00418c] w-80"
          />
          <button className="bg-[#00418c] text-white rounded-tr-full rounded-br-full px-5">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="bg-[#00418c] w-full text-white flex flex-col place-content-center">
        <div className="w-9/10 flex place-self-center items-center justify-between p-10">
          <div className="flex flex-col w-1/5">
            <img src="logo-white.png" />
            {/* socials */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black"
              >
                <FaLinkedinIn size={12} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black"
              >
                <FaXTwitter size={12} />
              </a>
            </div>
            <p className="text-gray-500 text-xs">Follow us on social media, never miss a thing!</p>
          </div>
          {/* quick links */}
          <div className="w-7/10">
            <p className="font-medium text-xl">Quick Links</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs">
              {/* <!-- Column 1 --> */}
              <div>
                <ul class="space-y-2">
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Pricing/Plans
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Instructor Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Column 2 --> */}
              <div>
                <ul class="space-y-2">
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Column 3 --> */}
              <div>
                <ul class="space-y-2">
                  <h3 class="text-lg font-semibold ">For Educators</h3>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Teach on SkillHatch
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Instructor for Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Revenue Sharing Model
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Course Creation Tool
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Instructors Community
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Column 4 --> */}
              <div>
                <ul class="space-y-2">
                  <h3 class="text-lg font-semibold">Contact</h3>

                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Download Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Career Centre
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Report an Instructor
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Financial Aid
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-gray-300">
                      Referral Programme
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bottom footer --> */}
        <div class=" border-t border-gray-700  text-center text-sm text-gray-400 py-2">
          © 2025 SkillHatch. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
