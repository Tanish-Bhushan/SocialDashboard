import React, { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import { TbHelpCircleFilled } from "react-icons/tb";
import { MdOutlineRssFeed } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { Charts } from "./charts";
import { Facebook } from "./facebook";
import { Instagram } from "./instagram";
import { Youtube } from "./youtube";
import { Twitter } from "./twitter";
import axios from "axios";

export const DashBoard = () => {
  const [social, setSocial] = useState("");
  const [data, setData] = useState([]);

  const getdetails = async () => {
    await axios
      .get("https://dashboard-api-backend.onrender.com/api")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getdetails();
  }, []);

  return (
    <div className="h-[100vh] flex ">
      <div className="w-[15%] bg-black flex items-center">
        <ul className="ml-5  gap-8 flex flex-col text-white/90">
          <li className="flex items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <RiDashboardFill className="text-3xl " />
            <h1 className="text-xl">DashBoard</h1>
          </li>
          <li className="flex  items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <MdOutlineRssFeed className="text-3xl " />
            <h1 className="text-xl ">NewsFeed</h1>
          </li>
          <li className="flex  items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <SiSimpleanalytics className="text-2xl  mr-1" />
            <h1 className="text-xl ">Analytics</h1>
          </li>
          <li className="flex  items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <FaTools className="text-2xl  mr-1" />
            <h1 className="text-xl ">Tools</h1>
          </li>
          <li className="flex  items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <BiSolidMessageSquareDetail className="text-2xl mr-1 " />
            <h1 className="text-xl ">Messages</h1>
          </li>
          <li className="flex items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <RiSettings3Fill className="text-3xl " />
            <h1 className="text-xl">Settings</h1>
          </li>
          <li className="flex items-center gap-2 hover:scale-105 hover:text-cyan-400">
            <TbHelpCircleFilled className="text-3xl" />
            <h1 className="text-xl">About</h1>
          </li>
        </ul>
      </div>
      <div className="w-full bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="flex justify-between">
          <div>
            <h1
              className=" p-4 text-2xl font-bold text-black/90 cursor-pointer"
              onClick={() => {
                setSocial("");
              }}
            >
              Dashboard
            </h1>
          </div>
          <div>
            <ul className="flex p-2">
              <li>
                <IoSearchCircleOutline className="text-4xl" />
              </li>
              <li>
                <IoNotificationsCircleOutline className="text-4xl" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex gap-4 m-4 justify-around">
            <div
              className="bg-white/50 shadow-lg rounded-lg w-[18vw] h-[25vh] cursor-pointer hover:scale-105 transition ease-in-out delay-110"
              onClick={() => {
                setSocial("fb");
              }}
            >
              <div className="flex items-center text-xl gap-2 m-2 text-gray-700">
                <FaFacebook />
                <h1>Facebook</h1>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col m-2 p-5 h-full gap-2">
                  <h1 className="text-4xl">200K+</h1>
                  <h1 className="text-gray-600 font-semibold">PageViews</h1>
                </div>
                <div className="m-2 flex flex-col items-center justify-center">
                  <MdOutlineAutoGraph className="text-6xl" />
                  <h1 className="text-green-400 text-xl">+30%</h1>
                </div>
              </div>
            </div>
            <div
              className="bg-white/50 shadow-lg rounded-lg w-[18vw] h-[25vh] cursor-pointer hover:scale-105 transition ease-in-out delay-110"
              onClick={() => {
                setSocial("ig");
              }}
            >
              <div className="flex items-center text-xl gap-2 m-2 text-gray-700">
                <FaInstagram />
                <h1>Instagram</h1>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col m-2 p-5 h-full gap-2">
                  <h1 className="text-4xl">120M+</h1>
                  <h1 className="text-gray-600 font-semibold">PageViews</h1>
                </div>
                <div className="m-2 flex flex-col items-center justify-center">
                  <MdOutlineAutoGraph className="text-6xl" />
                  <h1 className="text-green-400 text-xl">+50%</h1>
                </div>
              </div>
            </div>
            <div
              className="bg-white/50 shadow-lg rounded-lg w-[18vw] h-[25vh] cursor-pointer hover:scale-105 transition ease-in-out delay-110"
              onClick={() => {
                setSocial("x");
              }}
            >
              <div className="flex items-center text-xl gap-2 m-2 text-gray-700">
                <FaTwitter />
                <h1>Twitter</h1>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col m-2 p-5 h-full gap-2">
                  <h1 className="text-4xl">300K+</h1>
                  <h1 className="text-gray-600 font-semibold">Followers</h1>
                </div>
                <div className="m-2 flex flex-col items-center justify-center">
                  <MdOutlineAutoGraph className="text-6xl" />
                  <h1 className="text-red-400 text-xl">-10%</h1>
                </div>
              </div>
            </div>
            <div
              className="bg-white/50 shadow-lg rounded-lg w-[18vw] h-[25vh] cursor-pointer hover:scale-105 transition ease-in-out delay-110"
              onClick={() => {
                setSocial("yt");
              }}
            >
              <div className="flex items-center text-xl gap-2 m-2 text-gray-700">
                <FaYoutube />
                <h1>Youtube</h1>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col m-2 p-5 h-full gap-2">
                  <h1 className="text-4xl">16m+</h1>
                  <h1 className="text-gray-600 font-semibold">Subscribers</h1>
                </div>
                <div className="m-2 flex flex-col items-center justify-center">
                  <MdOutlineAutoGraph className="text-6xl" />
                  <h1 className="text-green-400 text-xl">+40%</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-8 rounded-lg h-[50vh] flex justify-center bg-white/50 shadow-lg p-2">
            {(() => {
              switch (social) {
                case "fb":
                  return <Facebook data={data[0]} />;
                case "ig":
                  return <Instagram data={data[1]} />;
                case "x":
                  return <Twitter data={data[3]} />;
                case "yt":
                  return <Youtube data={data[2]} />;
                default:
                  return <Charts />;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
