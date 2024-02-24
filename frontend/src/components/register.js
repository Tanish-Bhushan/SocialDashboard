import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [igUsername, setIgUsername] = useState("");
  const [fbUsername, setFbUsername] = useState("");
  const [xUsername, setXUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };

  const submitDetails = async (e) => {
    try {
      await axios.post("http://127.0.0.1:8000/user/", {
        name: username,
        email: email,
        password: password,
        fb_name: fbUsername,
        ig_name: igUsername,
        x_name: xUsername,
      });
      navigate("/login");
    } catch (e) {
      alert("Try another username or email\nTry again later");
    }
  };

  return (
    <div className="bg-black/50 h-[100vh]  overflow-hidden font-[Poppins] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mt-[6%] ml-auto mr-auto w-[70%] items-center text-center  bg-white/30 rounded-lg p-4">
        <h1 className="text-2xl mt-2">Create account</h1>
        <form action="" className="flex">
          <div className="w-[80%] m-2 flex flex-col">
            <label className="mt-4 text-lg mr-auto">Name</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2"
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">Email</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">Password</label>
            <input
              type="password"
              className="mt-1 w-full h-10 text-lg border-2"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="w-[80%] m-2 flex flex-col">
            <label className="mt-4 text-lg mr-auto">Instagram Username</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2"
              onChange={(event) => setIgUsername(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">Facebook Username</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2"
              onChange={(event) => setFbUsername(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">X Username</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2"
              onChange={(event) => setXUsername(event.target.value)}
            />
          </div>
        </form>
        <div className="flex left-0 mt-4 mb-5 gap-2">
          <input type="checkbox" />
          <h1>Remember Me</h1>
        </div>

        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-4 rounded-md text-white w-[40%] p-2 mb-2"
          onClick={submitDetails}
        >
          SignUp
        </button>
        <h1 className="m-2">
          Already have an account?
          <span
            className="text-blue-600 cursor-pointer ml-1"
            onClick={toLoginPage}
          >
            LogIn
          </span>
        </h1>
      </div>
    </div>
  );
};
