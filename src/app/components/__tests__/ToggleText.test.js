// Credit to ChatGPT for assistance and code comments.
// components/__tests__/ToggleText.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure this is imported
import ToggleText from "../ToggleText";

test("text is not visible initially", () => {
  const { queryByText } = render(<ToggleText />);
  expect(queryByText("The text is now visible!")).not.toBeInTheDocument();
});

test("clicking the button makes the text visible", () => {
  const { getByText, queryByText } = render(<ToggleText />);
  const button = getByText("Toggle Text");
  fireEvent.click(button);
  expect(queryByText("The text is now visible!")).toBeInTheDocument();
});
