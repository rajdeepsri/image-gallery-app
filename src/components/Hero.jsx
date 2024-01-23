import panda from "../assets/panda.png";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <section className="w-full h-[60dvh] relative">
      <div className="h-full">
        <img
          src={panda}
          alt="hero_image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute top-0 h-[60dvh] w-full text-white gap-2 bg-black/10">
        <h2 className="text-4xl font-bold">
          Download High Quality Images by Creators
        </h2>
        <p className="text-gray-300 mt-2">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <div className="flex gap-2 p-4 rounded-md items-center bg-neutral-50 w-[60%]">
          <IoIosSearch className="text-neutral-400 text-2xl" />
          <input
            type="text"
            className="bg-transparent outline-none border-none text-neutral-800 font-medium w-full"
            placeholder="Search high resolution Images, categories, wallpapers"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
