import { MensCricketContent } from "../HeaderPages/MensCricketContent";
import { MensKabaddiContent } from "../HeaderPages/MensKabaddiCotent";
import { MensVolleyBallContent } from "../HeaderPages/MensVolleyballContent";
import { MensKhoKhoContent } from "../HeaderPages/MensKhoKhoContent";
import { CarromBoardContent } from "../HeaderPages/CarromBoardContent";
import { FreeFireContent } from "../HeaderPages/FreeFireContent";
import { PubgContent } from "../HeaderPages/PubgContent";
import { WomensThrowBallContent } from "../HeaderPages/WomensThrowBall";

export function SportsEventsContent() {
  return (
    <main className="sportseventscontent">
      <MensCricketContent />
      <MensKabaddiContent />
      <MensVolleyBallContent />
      <MensKhoKhoContent />
      <CarromBoardContent />
      <FreeFireContent />
      <PubgContent />
      <WomensThrowBallContent />
    </main>
  );
}
