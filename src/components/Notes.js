import React from "react";
import Note from "./Note";
import NoteInput from "./NoteInput";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectNotes, selectQuery } from "../features/appSlice";
import { removeNote } from "../features/appSlice";

function Notes() {
  const notes = useSelector(selectNotes);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  const removeNoteHandler = (id) => {
    dispatch(
      removeNote({
        id,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <NoteInput />
      {!query.length > 0
        ? notes.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                content={note.content}
                date={note.date}
                removeNote={removeNoteHandler}
              />
            );
          })
        : notes
            .filter((note) => note.content.includes(query))
            .map((note) => (
              <Note
                key={note.id}
                id={note.id}
                content={note.content}
                date={note.date}
                removeNote={removeNoteHandler}
              />
            ))}
    </div>
  );
}

export default Notes;
