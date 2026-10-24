import SubPage, { PageIntro } from "@/components/SubPage";
import StoryExplorer from "@/components/StoryExplorer";
import { story } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("My story", story.intro, "/my-story");

export default function MyStory() {
  return (
    <SubPage current="/my-story">
      <PageIntro eyebrow={story.eyebrow} title={story.title} intro={story.intro} />
      <StoryExplorer />
    </SubPage>
  );
}
