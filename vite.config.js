import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://ashwin-nat.github.io/rule-forge-site/
export default defineConfig({
  plugins: [react()],
  base: "/rule-forge-site/",
});
