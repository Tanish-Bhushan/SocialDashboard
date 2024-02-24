import React from "react";
import {useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] overflow-hidden font-[Poppins]">
      <div className="mt-[10%] ml-auto mr-auto w-[40%] items-center text-center bg-white/50 rounded-lg p-4">
        <h1 className="text-2xl">Social Media Dashboard</h1>
        <h1 className="mt-5">Start by creating an account</h1>
        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-5 p-3 rounded-md text-white px-6"
          onClick={toLoginPage}
        >
          Start &#8594;
        </button>
      </div>
    </div>
  );
};