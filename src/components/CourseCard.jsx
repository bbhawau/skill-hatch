import Button from "./Button";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  icon,
  title,
  description,
  instructorIcon,
  instructor,
  rating,
  learners,
  variant = "default",
  instructorImage,
  lessons,
  price,
  progress, // progress percentage (0–100)
  showProgress = false,
  onViewDetails,
}) => {
  if (variant === "courses_page") {
    return (
      <div className=" rounded-lg overflow-hidden shadow-md bg-white">
        {/* Top Image */}
        <div>
          <img src={image} alt={title} className="w-full h-70 object-cover" />
        </div>

        {/* Bottom Content */}
        <div className="py-5 px-3">
          {/* Star Rating */}
          <div className="flex items-center">
            <StarRating rating={rating} learners={learners} />
          </div>
          {/* Course Title with Icon */}
          <div className="flex items-center space-x-2 mb-2">
            <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
            <p className="font-medium">{title}</p>
          </div>
          {/* Instructor Info */}
          <div className="flex items-center space-x-2 ">
            <img
              src={instructorImage}
              alt="Instructor image"
              className="w-4 h-4"
            />
            <p className="text-sm">{instructor}</p>
          </div>
          {/* Description */}
          <p className="text-gray-500 text-xs mb-3">{description}</p>
          {/* Lessons */}
          <p className="text-[#00418c] mb-3">{lessons} Lessons</p>
          {showProgress && (
            <div className="flex items-center mb-3">
              <div className="w-1/2 bg-[#c2deff] h-3 rounded-full mr-2">
                <div
                  className="bg-[#00418c] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm">{progress}% complete</p>
            </div>
          )}
          {/* Price */}
          <div className="flex text-sm items-center mb-3">
            <span className="font-medium ">PRICE:</span>
            <div className="bg-[#c2deff] text-gray-500  px-2 rounded-2xl">
              {price}
            </div>
          </div>
          {/* view details */}

          <Button
            variant="blue"
            text={showProgress ? "Click to Continue" : "View Details"}
            className="w-full"
            onClick={() => onViewDetails(id)}
          />
        </div>
      </div>
    );
  }
  return (
    <div className=" rounded-lg overflow-hidden shadow-md bg-white">
      {/* Top Image */}
      <div>
        <img src={image} alt={title} className="w-full h-70 object-cover" />
      </div>

      {/* Bottom Content */}
      <div className="py-5 px-3">
        {/* Star Rating */}
        <div className="flex items-center">
          <StarRating rating={rating} learners={learners} />
        </div>
        {/* Course Title with Icon */}
        <div className="flex items-center space-x-2 mb-2">
          <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
          <p className="font-medium">{title}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs mb-3">{description}</p>

        {/* Instructor Info */}
        <div className="flex items-center space-x-2">
          <img src={instructorIcon} alt="Instructor icon" className="w-4 h-4" />
          <p className="text-sm">{instructor}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
