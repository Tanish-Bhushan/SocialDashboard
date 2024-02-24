import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { IoImagesSharp } from "react-icons/io5";
import ig from "../media/instagram.png";

export const Instagram = ({ data }) => {
  return (
    <div className="flex  justify-around items-center w-full bg-pink-300">
      <div className="w-[70%] p-4 flex flex-col justify-center  gap-8">
        <div className="flex gap-4 justify-around">
          <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
            <div className="flex justify-center items-center gap-3 text-black/80">
              <h1 className="text-lg">Likes</h1>{" "}
              <AiFillLike className="text-xl" />
            </div>
            <h1 className="text-2xl">{data.likes}</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
            <div className="flex justify-center items-center gap-3 text-black/80">
              <h1 className="text-lg">Comments</h1>{" "}
              <FaComment className="text-xl" />
            </div>
            <h1 className="text-2xl">{data.comments}</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
            <div className="flex justify-center items-center gap-3 text-black/80">
              <h1 className="text-lg">Following</h1>{" "}
              <FaUserFriends className="text-xl" />
            </div>
            <h1 className="text-2xl">{data.following}</h1>
          </div>
        </div>
        <div>
          <div className="flex gap-4 justify-around">
            <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
              <div className="flex justify-center items-center gap-3 text-black/80">
                <h1 className="text-lg">PageViews</h1>
                <IoEyeSharp className="text-xl" />
              </div>
              <h1 className="text-2xl">{data.pageviews}</h1>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
              <div className="flex justify-center items-center gap-3 text-black/80">
                <h1 className="text-lg">Followers</h1>{" "}
                <IoIosPersonAdd className="text-xl" />
              </div>
              <h1 className="text-2xl"> {data.followers}</h1>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
              <div className="flex justify-center items-center gap-3 text-black/80">
                <h1 className="text-lg">Posts</h1>{" "}
                <IoImagesSharp className="text-xl" />
              </div>
              <h1 className="text-2xl">{data.posts}</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={ig} alt="" className="h-[40vh]" />
      </div>
    </div>
  );
};
