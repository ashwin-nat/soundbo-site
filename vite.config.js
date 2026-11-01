import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://ashwin-nat.github.io/soundbo/
export default defineConfig({
  plugins: [react()],
  base: "/soundbo/",
});
