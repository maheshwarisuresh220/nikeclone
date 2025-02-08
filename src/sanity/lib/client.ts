import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, sanityToken } from "../env";

if (!projectId || !dataset) {
  throw new Error("⚠️ Sanity environment variables are missing. Check your .env.local file.");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for real-time updates
  token: sanityToken, // ✅ Use token for authenticated requests
});
