import React from "react";
import Notes from "./components/Notes";
import Search from "./components/Search";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Advanced from "./components/Markdown/Advanced";
import Editor from "./components/Markdown/Editor";

AOS.init({ once: true });

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex  w-full mx-auto flex-col ">
                    <div className="p-8 mx-auto flex-col gap-16 flex md:w-1/2">
                      <div className="flex flex-col gap-4 w-full">
                        <h1
                          data-aos="fade-left-in"
                          className="font-bold text-4xl"
                        >
                          Hello, {user.displayName}
                        </h1>
                        <Search />
                      </div>
                      <Notes />
                    </div>
                  </div>
                }
              ></Route>
              <Route path="/advanced" element={<Advanced />}></Route>
              <Route path="/advanced/editor" element={<Editor />}></Route>
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;
