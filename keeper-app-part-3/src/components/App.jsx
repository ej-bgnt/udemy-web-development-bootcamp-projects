import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteObj, setNote] = useState([]);

  function addNote(input) {
    setNote((prevObj) => {
      return [...prevObj, input];
    });
  }

  function deleteNote(sel) {
    setNote((prevObj) => {
      return prevObj.filter((i, index) => {
        return index !== sel;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea newInput={addNote} />
      {noteObj.map((i, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={i.title}
            content={i.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
