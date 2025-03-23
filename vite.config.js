import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "/cv_builder/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
};
