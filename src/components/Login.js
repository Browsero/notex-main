import React, { useState } from "react";
import "./Login.css";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setDefault } from "../features/appSlice";

import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  db,
} from "../firebase";

function Login() {
  const [emailLogin, setEmailLogin] = useState(false);
  const dispatch = useDispatch();

  dispatch(setDefault());

  const addUser = (userName, id) => {
    db.collection("users").doc(id).set({ name: userName, id: id, notes: [] });
  };

  const emailLoginHandler = (event) => {
    event.preventDefault();
    setEmailLogin(true);
  };
  const googleLoginHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        if (result.additionalUserInfo.isNewUser) {
          addUser(
            result.additionalUserInfo.profile.name,
            result.additionalUserInfo.profile.id
          );
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const githubLoginHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => alert(err.message));
  };
  const facebookLoginHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="header flex justify-center items-center">
      <div className="w-full flex flex-col  gap-8">
        <div
          data-aos="fade-in"
          className="bg-white shadow-lg rounded-lg p-8 max-w-xs mx-auto flex justify-center items-center flex-col gap-8 md:max-w-xl"
        >
          <div className="text-center flex flex-col gap-4">
            <h1 className="font-light text-5xl text-zinc-700">
              Note<span className="text-purple-700 font-bold">X</span>
            </h1>
            <p className="text-zinc-500 cursor-default md:text-2xl">
              Enjoy your notes no matter where are you now!
            </p>
          </div>
          {!emailLogin ? (
            <div data-aos="fade-in" className="flex flex-col gap-6">
              <button
                onClick={emailLoginHandler}
                className="flex gap-2 items-center p-2 bg-purple-500 rounded-lg shadows-xl text-white transition hover:bg-purple-700"
              >
                <AiOutlineMail /> Sign in via E-Mail
              </button>
              <button
                onClick={googleLoginHandler}
                className="flex gap-2 items-center p-2 bg-red-500 rounded-lg shadows-xl text-white transition hover:bg-red-700"
              >
                <BsGoogle /> Sign in via Google
              </button>
              <button
                onClick={githubLoginHandler}
                className="flex gap-2 items-center p-2 bg-zinc-500 rounded-lg shadows-xl  text-white transition hover:bg-zinc-700"
              >
                <BsGithub /> Sign in via Github
              </button>
              <button
                onClick={facebookLoginHandler}
                className="flex gap-2 items-center p-2 bg-blue-500 rounded-lg shadows-xl text-white transition hover:bg-blue-700"
              >
                <BsFacebook /> Sign in via Facebook
              </button>
            </div>
          ) : (
            <form data-aos="fade-in" className="flex flex-col gap-10">
              <div>
                <label>E-mail</label>
                <input
                  className="w-full bg-zinc-200 shadow-lg rounded-lg text-md p-2"
                  type="text"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  className="w-full bg-zinc-200 shadow-lg rounded-lg text-md p-2"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-4 items-center w-full">
                <button className="bg-purple-500 p-4 w-max text-white rounded-lg md:w-full">
                  Take notes!
                </button>
                <button
                  onClick={() => {
                    setEmailLogin(false);
                  }}
                  className="flex items-center gap-2 w-32 justify-center text-zinc-400 md:w-full"
                >
                  <MdArrowBack /> Return
                </button>
              </div>
            </form>
          )}
          <p className="text-zinc-300 cursor-default">
            Hubert Madej &copy; 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
