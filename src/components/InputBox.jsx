import React, { useState } from "react";

function InputBox({ addMessage }) {
  const [message, setMessage] = useState("");

  function addText(e) {
    addMessage({
      message,
    });
    e.preventDefault();
    setMessage("");
  }

  return (
    <form onSubmit={addText}>
      <div className="input-container">
        <i className="ri-add-circle-fill" />
        <input
          type="text"
          placeholder="Message @AutoBot"
          className="input-box"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="submit">submit</button>
    </form>
  );
}

export default InputBox;
