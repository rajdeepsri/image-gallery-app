import { AiOutlineLike } from "react-icons/ai";

const Card = ({ user, likes, urls, alt_description, handleOnClick }) => {
  const formatNumbers = (num) => {
    const absNum = Math.abs(parseInt(num));

    if (absNum >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (absNum >= 1e3) {
      return (num / 1e3).toFixed(1) + "k";
    }

    return absNum;
  };

  return (
    <div
      className="w-[22rem] sm:w-[25rem] h-min rounded-xl overflow-hidden border dark:border-none shadow-md dark:shadow-neutral-900 mb-4 bg-neutral-100 dark:bg-neutral-950 cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        src={urls.small}
        alt={alt_description}
        className="w-full object-cover"
      />
      <div className="flex justify-between items-center p-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={user.profile_image.medium}
            alt={user.name}
            className="rounded-full w-11"
          />
          <div>
            <p className="font-bold text-sm text-neutral-700 dark:text-neutral-200">
              {user.name}
            </p>
            <p className="text-neutral-400 dark:text-neutral-500 font-medium italic text-[0.75rem]">
              @{user.username}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineLike className="text-neutral-800 dark:text-neutral-300" />
          <p className="text-[0.8rem] font-bold text-neutral-700 dark:text-neutral-300">
            {formatNumbers(likes)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
