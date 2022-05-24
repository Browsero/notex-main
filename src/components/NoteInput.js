import React, { useEffect, useState } from "react";
import { addNote } from "../features/appSlice";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

function NoteInput() {
  const [task, setTask] = useState("");
  const [charsLeft, setCharsLeft] = useState(200);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    const newCharsLeft = 200 - task.length;
    setCharsLeft(newCharsLeft);
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (charsLeft >= 0 && task.length > 0) {
      dispatch(
        addNote({
          content: task,
          date: format(new Date(), "yyy-MM-dd"),
          id: uuidv4()
        })
      );
    }
    setTask('');
  };

  return (
    <div className="bg-green-300 h-32 p-4 rounded-lg shadow-lg md:h-64">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full gap-2 md:gap-12"
      >
        <textarea
        maxLength={200}
          value={task}
          onChange={handleChange}
          placeholder="Today, I want to..."
          className="h-full p-2 rounded-lg bg-green-100 text-zinc-900"
          type="text"
        />
        <div className="flex justify-between">
          <label>{charsLeft} Reamining</label>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default NoteInput;
