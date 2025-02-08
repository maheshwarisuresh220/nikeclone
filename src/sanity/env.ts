export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "⚠️ Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "⚠️ Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const sanityToken = process.env.SANITY_API_TOKEN || "";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return v;
}

// ✅ Debug logs
console.log("✅ Loaded Sanity Environment Variables:");
console.log("  - NEXT_PUBLIC_SANITY_PROJECT_ID:", projectId);
console.log("  - NEXT_PUBLIC_SANITY_DATASET:", dataset);
console.log("  - API Version:", apiVersion);
console.log("  - SANITY_API_TOKEN:", sanityToken ? "Exists ✅" : "❌ Missing");
