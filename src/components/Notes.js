import React from "react";
import Note from "./Note";
import NoteInput from "./NoteInput";
import { useSelector } from "react-redux/es/exports";
import { selectNotes } from "../features/appSlice";

function Notes() {
  const notes = useSelector(selectNotes);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <NoteInput />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          content={note.content}
          date={note.date}
        />
      ))}
    </div>
  );
}

export default Notes;
