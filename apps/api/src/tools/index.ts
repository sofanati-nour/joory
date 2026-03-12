import { fetchSanaFeedTool } from "./fetchSanaFeed";
import { fetchSpTodayTool } from "./fetchSpToday";
import { fetchAlikhbariaFeedTool } from "./fetchAlikhbariaFeed";

/**
 * Tools available to models that support function calling.
 * Add or remove entries here to change what every tool-capable model can access.
 */
export const CHAT_TOOLS = {
  fetchSanaFeed: fetchSanaFeedTool,
  fetchSpToday: fetchSpTodayTool,
  fetchAlikhbariaFeed: fetchAlikhbariaFeedTool,
} as const;
