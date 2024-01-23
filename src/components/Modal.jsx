import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { usePostContext } from "../context/PostContext";
import { useEffect, useRef } from "react";

const Modal = ({ user, urls, likes, links }) => {
  const modalRef = useRef(null);
  const { clearSelectedPost, selectedPost } = usePostContext();
  const formatNumbers = (num) => {
    const absNum = Math.abs(parseInt(num));

    if (absNum >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (absNum >= 1e3) {
      return (num / 1e3).toFixed(1) + "k";
    }

    return absNum;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        clearSelectedPost();
      }
    };

    if (selectedPost) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedPost]);

  return (
    <div className="h-screen w-screen z-10 max-h-screen overflow-hidden fixed top-0 left-0 bg-black/75 flex items-center justify-center">
      <div
        className="h-[35rem] w-[50rem] bg-neutral-50 dark:bg-neutral-900 rounded-lg relative"
        ref={modalRef}
      >
        <IoMdClose
          className="z-20 absolute -top-3 -right-3 bg-white/25 text-3xl text-neutral-300 rounded-full p-1.5 cursor-pointer hover:bg-white/35 hover:text-neutral-800 transition-all duration-200"
          onClick={clearSelectedPost}
        />
        <div className="h-[30rem] rounded-t-md relative">
          <a
            href={links.download}
            target="_blank"
            className="absolute bottom-4 right-4 bg-green-600 text-neutral-200 font-semibold py-3 px-5 text-[0.7rem] rounded-[3px] hover:bg-green-700 transition-colors duration-200"
          >
            Download Image
          </a>
          <img
            src={urls?.regular}
            alt="sd"
            className="object-cover h-full w-full rounded-t-md"
          />
          <div className="p-4 flex items-center w-full">
            {/* user details */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <img
                    src={user?.profile_image.small}
                    alt="pic"
                    className="rounded-full w-11"
                  />
                  <div>
                    <p className="font-bold text-sm text-neutral-700 dark:text-neutral-200 capitalize">
                      {user?.name}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-500 font-semibold italic text-[0.75rem]">
                      @{user?.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {user.instagram_username && (
                    <div className="flex items-center">
                      <FaInstagram className="text-neutral-700  mr-[2px]" />
                      <p className="text-[0.85rem] font-semibold text-neutral-600 italic">
                        /{user.instagram_username}
                      </p>
                    </div>
                  )}
                  {user?.twitter_username && (
                    <div className="flex items-center">
                      <TbBrandTwitter className="text-neutral-700 mr-[2px]" />
                      <p className="text-[0.85rem] font-semibold text-neutral-600 italic">
                        /{user.twitter_username}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineLike className="text-neutral-800 dark:text-neutral-400" />
                <p className="text-[0.8rem] font-bold text-neutral-700 dark:text-neutral-400">
                  {formatNumbers(likes)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
