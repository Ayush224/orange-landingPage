import { useEffect } from "react";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <div className="h-screen container mx-auto px-4 py-4">
      <Hero />
    </div>
  );
}

export default App;
