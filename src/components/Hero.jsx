import panda from "../assets/panda.png";
import { IoIosSearch } from "react-icons/io";

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="w-full h-[60dvh] relative">
      <div className="h-full">
        <img
          src={panda}
          alt="hero_image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute top-0 h-[60dvh] w-full text-white gap-2 bg-black/10 text-center">
        <h2 className="px-2 text-3xl font-bold text-balance sm:text-4xl">
          Download High Quality Images by Creators
        </h2>
        <p className="text-gray-300 mt-2 text-balance text-xs sm:text-base">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <div className="flex gap-1 sm:gap-2 p-2 sm:p-4 mt-1 rounded-md items-center bg-neutral-50 w-[90%] sm:w-[60%]">
          <IoIosSearch className="text-neutral-400 text-2xl" />
          <input
            type="text"
            className="bg-transparent outline-none border-none text-neutral-800 font-medium w-full text-xs sm:text-base"
            placeholder="Search high resolution Images, categories, wallpapers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
