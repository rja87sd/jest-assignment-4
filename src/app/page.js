// Credit to ChatGPT for assistance and code comments.
// page.js
import WelcomeMessage from "./components/WelcomeMessage";
import ToggleText from "./components/ToggleText";
import "./globals.css";

export default function Home() {
  return (
    <main className="cyberpunk-bg">
      <WelcomeMessage message="Welcome to my new project!" />
      <ToggleText />
    </main>
  );
}
