// Credit to ChatGPT for assistance and code comments.
// components/__tests__/WelcomeMessage.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomeMessage from "../WelcomeMessage";

test("renders the correct message", () => {
  const message = "Welcome to my website!";
  const { getByText } = render(<WelcomeMessage message={message} />);
  expect(getByText(message)).toBeInTheDocument();
});
