// Credit to ChatGPT for assistance and code comments.
// components/ToggleText.js
"use client";
import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Text</button>
      {isVisible && <p>The text is now visible!</p>}
    </div>
  );
}

export default ToggleText;
