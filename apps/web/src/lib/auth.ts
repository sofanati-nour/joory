import { createAuthClient } from "better-auth/svelte";

export const authClient = createAuthClient({
	baseURL: import.meta.env.PUBLIC_API_BASE ?? "http://localhost:3001",
});
