import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsTrash, BsPen } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../features/appSlice";
import { auth, db } from "../firebase";

function Note({ id, content, date, removeNote }) {
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(content);
  const [charsLeft, setCharsLeft] = useState(200 - content.length);
  const [user] = useAuthState(auth);
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteIndex = notes.findIndex((note) => note.id === id);
    setCurrentlyEditing(false);

    let arrayToUpdate = [...notes];
    arrayToUpdate[noteIndex] = {
      ...arrayToUpdate[noteIndex],
      content: currentTask,
    };

    dispatch(setNotes({ notes: arrayToUpdate }));
    
    db.collection("users")
      .doc(user.providerData[0].uid)
      .update({ notes: [...arrayToUpdate] });
  };

  useEffect(() => {
    const newCharsLeft = 200 - currentTask.length;
    setCharsLeft(newCharsLeft);
  }, [currentTask]);

  return (
    <div
      data-aos="zoom-in"
      id={id}
      className="bg-yellow-300 h-max p-4 flex flex-col justify-between rounded-lg shadow-lg md:h-64"
    >
      {currentlyEditing ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between h-full gap-2 md:gap-12"
        >
          <textarea
            maxLength={200}
            value={currentTask}
            onChange={handleChange}
            placeholder="Today, I want to..."
            className="h-full p-2 rounded-lg bg-yellow-100 text-zinc-900 resize-none"
            type="text"
          />
          <div className="flex justify-between">
            <label>{charsLeft} Reamining</label>
            <button className="rounded-lg bg-orange-400 p-2 text-white w-32 transition duration-150 hover:bg-orange-500 hover:scale-105">
              Save
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="h-max p-1 break-normal break-words">{content}</p>
          <div className="flex justify-between">
            <p>{date}</p>
            <div className="flex gap-4">
              <BsPen
                onClick={() => {
                  setCurrentlyEditing(true);
                }}
                className="text-2xl cursor-pointer transition hover:scale-110"
              />
              <BsTrash
                onClick={() => {
                  removeNote(id);
                }}
                className="text-2xl cursor-pointer transition hover:scale-110"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
