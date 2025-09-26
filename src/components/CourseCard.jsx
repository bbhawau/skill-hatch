import StarRating from "./StarRating";

const CourseCard = ({
  image,
  icon,
  title,
  description,
  instructorIcon,
  instructor,
  rating,
  learners,
}) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-md bg-white">
      {/* Top Image */}
      <div>
        <img src={image} alt={title} className="w-full h-70 object-cover" />
      </div>

      {/* Bottom Content */}
      <div className="py-5 px-3">
        {/* ⭐ Star Rating */}
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
