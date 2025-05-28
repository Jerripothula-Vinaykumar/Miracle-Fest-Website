
import { BannerLaunchContent } from "../HeaderPages/BannerLaunchContent";
import { TraditionalDayContent } from "../HeaderPages/TraditionalDayContent";
import { FinalFestContent } from "../HeaderPages/FinalFestContent";

export function CulturalEventsContent() {
  return (
    <main className="culturaleventscontent">
      <BannerLaunchContent />
      <TraditionalDayContent />
      <FinalFestContent />
    </main>
  );
}