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

AOS.init({ once: true });

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="p-8 flex w-full mx-auto flex-col gap-16 md:w-1/2 ">
                    <Navbar />
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
                }
              ></Route>
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
