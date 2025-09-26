import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const StarRating = ({ rating, learners }) => {
    const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500 text-3xl" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-3xl" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500 text-3xl" />);
      }
    }
    return stars;
  };
  return (
    <div className="flex items-center mb-5">
      {renderStars(rating)}
      {learners && (
        <span className="text-sm ">({learners.toLocaleString()} learners)</span>
      )}
    </div>
  );
};

export default StarRating;