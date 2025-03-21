import { SonnerDemo } from "../democomponents/SonnerDemo";
import Topic from "../components/blogitup/topic";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigation = useNavigate();

  function handleClick() {
    navigation("/");
  }

  return (
    <div>
      <Topic />
      <SonnerDemo />
      <div className="mt-16   absolute right-10 bottom-7 z-10 ">
        <Button size={"lg"} onClick={handleClick} variant="outline">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Result;
