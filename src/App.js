import "./styles.css";
import React, { useState } from "react";

var emojiDictonary = {
  "😆": "Grinning Squinting Face",
  "😃": "Smiley",
  "😋": "Face Savoring Food",
  "❤️": "Red Heart",
  "🔥": "Fire"
};

const emojiInputs = Object.keys(emojiDictonary);
export default function App() {
  const [meaning, setMeaning] = useState("Meaning will appear here");

  function emojiInputHandler(event) {
    var inputValue = event.target.value;
    var meaning = emojiDictonary[inputValue];
    if (meaning === undefined) {
      setMeaning("We don't have that in Database");
    } else {
      setMeaning(meaning);
    }
  }

  const emojiClickHandler = (emoji) => {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={emojiInputHandler}
        onBlur={() => {
          setMeaning();
        }}
        style={{ width: "80%", padding: "1rem" }}
      ></input>
      <h2>{meaning}</h2>
      <h3> Emojis we have in Database </h3>

      {emojiInputs.map((emoji) => (
        <span
          key={emoji}
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
