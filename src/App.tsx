// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./index.css";
import "./App.css";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen w-screen justify-center bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]">
        <ProfileCard />
      </div>
    </>
  );
}

export default App;
