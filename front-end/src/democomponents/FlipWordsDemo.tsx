import { FlipWords } from "../components/ui/flip-words";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export function FlipWordsDemo() {
  const words = ["Anonumusly", "Freely", "Proudly"];
  const navigate = useNavigate();

  function handleClick() {
    navigate("/infopage");
  }

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-5xl md:text-7xl lg:text mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Welcome! SAIT Student!
        <div>
          talk <FlipWords words={words} /> <br />
        </div>
      </div>
      <div className="mt-16">
        <Button onClick={handleClick} size={"lg"} variant="outline">
          Get Started
        </Button>
      </div>
    </div>
  );
}
