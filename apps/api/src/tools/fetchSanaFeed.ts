import { makeRssFeedTool } from "./makeRssFeedTool";

export const fetchSanaFeedTool = makeRssFeedTool({
  url: "https://sana.sy/feed",
  name: "SANA (Syrian Arab News Agency)",
  description:
    "Fetch the latest news from SANA (Syrian Arab News Agency), Syria's official state news agency covering politics, government decisions, diplomacy, and domestic affairs.",
});
