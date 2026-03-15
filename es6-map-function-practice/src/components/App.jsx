import React from "react";
import Entry from "./Entry";
import { emojipedia } from "../emojipedia";

console.log("lol: " + emojipedia);

function createEntry(emojiArr) {
  return (
    <Entry
      key={emojiArr.id}
      emoji={emojiArr.emoji}
      name={emojiArr.name}
      meaning={emojiArr.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
