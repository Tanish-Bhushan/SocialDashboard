import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { IoImagesSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import yt from "../media/youtube.png";

export const Youtube = ({ data }) => {
  return (
    <div className="flex  justify-around items-center w-full bg-red-300">
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
              <h1 className="text-lg">Videos</h1>
              <MdOutlineOndemandVideo className="text-xl" />
            </div>
            <h1 className="text-2xl">{data.videos}</h1>
          </div>
        </div>
        <div>
          <div className="flex gap-4 justify-around">
            <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
              <div className="flex justify-center items-center gap-3 text-black/80">
                <h1 className="text-lg">Subscribers</h1>
                <IoIosPersonAdd className="text-xl" />
              </div>
              <h1 className="text-2xl">{data.subscribers}</h1>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
              <div className="flex justify-center items-center gap-3 text-black/80">
                <h1 className="text-lg">Views</h1>{" "}
                <IoEyeSharp className="text-xl" />
              </div>
              <h1 className="text-2xl"> {data.views}</h1>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md p-3 gap-2 w-[10vw]">
              <div className="flex justify-center items-center gap-3 text-black/80">
                <h1 className="text-lg">Watchtime</h1>{" "}
                <MdAccessTimeFilled className="text-xl" />
              </div>
              <h1 className="text-2xl">{data.watchtime}</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={yt} alt="" className="h-[40vh] "/>
      </div>
    </div>
  );
};
