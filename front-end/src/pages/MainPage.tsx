import { InfiniteMovingCardsDemo } from "../democomponents/InfiniteMovingCardDemo";
import { CardHoverEffectDemo } from "../democomponents/CardHoverEffectDemo";
import { FlipWordsDemo } from "../democomponents/FlipWordsDemo";

const MainPage = () => {
  return (
    <div className="">
      <FlipWordsDemo />
      <CardHoverEffectDemo />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default MainPage;
