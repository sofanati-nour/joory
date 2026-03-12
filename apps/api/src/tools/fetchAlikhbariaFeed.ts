import { makeRssFeedTool } from "./makeRssFeedTool";

export const fetchAlikhbariaFeedTool = makeRssFeedTool({
  url: "https://alikhbariah.com/feed/",
  name: "Alikhbaria",
  description:
    "Fetch the latest news from Alikhbaria, a Syrian news outlet covering local events, security, economy, and general reporting across Syria.",
});
