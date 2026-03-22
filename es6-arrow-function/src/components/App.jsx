import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((i) => (
          <Entry
            key={i.id}
            emoji={i.emoji}
            name={i.name}
            description={i.meaning}
          />
        ))}
        ;
      </dl>
    </div>
  );
}

export default App;
