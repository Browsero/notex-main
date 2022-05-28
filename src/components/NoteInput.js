import React, { useEffect, useState } from "react";
import { addNote, selectNotes } from "../features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function NoteInput() {
  const [user] = useAuthState(auth);
  const [task, setTask] = useState("");
  const [charsLeft, setCharsLeft] = useState(200);
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    const newCharsLeft = 200 - task.length;
    setCharsLeft(newCharsLeft);
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      content: task,
      date: format(new Date(), "yyy-MM-dd"),
      id: uuidv4(),
    }
    if (charsLeft >= 0 && task.length > 0) {
      dispatch(
        addNote(newNote)
      );
      db.collection("users")
        .doc(user.providerData[0].uid)
        .update({ notes: [...notes, newNote] });
    }
    setTask("");
  };

  return (
    <div className="bg-purple-300 h-32 p-4 rounded-lg shadow-lg md:h-64">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full gap-2 md:gap-12"
      >
        <textarea
          maxLength={200}
          value={task}
          onChange={handleChange}
          placeholder="Today, I want to..."
          className="h-full p-2 rounded-lg bg-purple-100 text-zinc-900 resize-none"
          type="text"
        />
        <div className="flex justify-between">
          <label>{charsLeft} Reamining</label>
          <button className="rounded-lg bg-violet-600 p-2 text-white w-32 transition duration-150 hover:bg-violet-500 hover:scale-105">Save</button>
        </div>
      </form>
    </div>
  );
}

export default NoteInput;
