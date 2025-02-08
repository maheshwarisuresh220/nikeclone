import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; // Correct plugin
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes"; // Ensure this file is correct

export default defineConfig({
  name: "default",
  title: "Nike-CloneProject",

  projectId: "jkkz8f4e", // Your project ID
  dataset: "production",

  plugins: [deskTool(), visionTool()], // Use deskTool instead of structureTool

  schema: {
    types: schemaTypes, // Ensure schemaTypes contains product.ts
  },
});
