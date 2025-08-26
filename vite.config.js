import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },

  server: {
    port: 4175,            // بورت التطوير
    open: true,            // يفتح المتصفح تلقائيًا
    historyApiFallback: true, // مهم جدًا لتشغيل React Router بدون 404
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  preview: {
    port: 4175,       // بورت عند تشغيل vite preview
    open: true,
  },

  build: {
    outDir: "dist",
    sourcemap: mode !== "production", // فعلها وقت الديبج فقط
    chunkSizeWarningLimit: 1500,
    // لو حابب تقسيم الباندل لتقليل الحجم مستقبلاً:
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       react: ["react", "react-dom", "react-router-dom"],
    //       ui: ["@radix-ui/react-dialog", "@radix-ui/react-tooltip", "lucide-react"],
    //     },
    //   },
    // },
  },

  // غيّرها لو هتنشر في مجلد فرعي داخل Laravel
  base: "/",
}));
