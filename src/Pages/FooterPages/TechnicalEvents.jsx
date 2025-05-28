
import { ProCoderContent } from "../HeaderPages/ProCoderContent";
import { GuessTheOutptContent } from "../HeaderPages/GuesstheOutput";
import { QuizContent } from "../HeaderPages/QuizContent";
import { EssayWritingContent } from "../HeaderPages/EssayWritingContent";

export function TechnicalEventsContent() {
  return (
    <main className="technicaleventscontent">
      <ProCoderContent />
      <GuessTheOutptContent />
      <QuizContent />
      <EssayWritingContent />
    </main>
  );
}