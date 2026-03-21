import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((i) => (
        <Note key={i.key} title={i.title} content={i.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
