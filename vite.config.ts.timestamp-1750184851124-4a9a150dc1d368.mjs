// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
        // Include JSON files as assets
        "src/data/home": "./src/data/home.json",
        "src/data/links": "./src/data/links.json",
        "src/data/social": "./src/data/social.json",
        "src/data/amazon": "./src/data/amazon.json",
        "src/data/walmart": "./src/data/walmart.json",
        "src/data/partnerships": "./src/data/partnerships.json",
        "src/data/settings": "./src/data/settings.json",
        "src/data/templates/starter": "./src/data/templates/starter.json",
        "src/data/templates/templates": "./src/data/templates/templates.json"
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.startsWith("src/data/")) {
            return "[name].json";
          }
          return "assets/[name]-[hash].js";
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".json")) {
            return "[name].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        }
      }
    }
  },
  publicDir: "public",
  assetsInclude: ["**/*.json"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogJy4vaW5kZXguaHRtbCcsXG4gICAgICAgIC8vIEluY2x1ZGUgSlNPTiBmaWxlcyBhcyBhc3NldHNcbiAgICAgICAgJ3NyYy9kYXRhL2hvbWUnOiAnLi9zcmMvZGF0YS9ob21lLmpzb24nLFxuICAgICAgICAnc3JjL2RhdGEvbGlua3MnOiAnLi9zcmMvZGF0YS9saW5rcy5qc29uJyxcbiAgICAgICAgJ3NyYy9kYXRhL3NvY2lhbCc6ICcuL3NyYy9kYXRhL3NvY2lhbC5qc29uJyxcbiAgICAgICAgJ3NyYy9kYXRhL2FtYXpvbic6ICcuL3NyYy9kYXRhL2FtYXpvbi5qc29uJyxcbiAgICAgICAgJ3NyYy9kYXRhL3dhbG1hcnQnOiAnLi9zcmMvZGF0YS93YWxtYXJ0Lmpzb24nLFxuICAgICAgICAnc3JjL2RhdGEvcGFydG5lcnNoaXBzJzogJy4vc3JjL2RhdGEvcGFydG5lcnNoaXBzLmpzb24nLFxuICAgICAgICAnc3JjL2RhdGEvc2V0dGluZ3MnOiAnLi9zcmMvZGF0YS9zZXR0aW5ncy5qc29uJyxcbiAgICAgICAgJ3NyYy9kYXRhL3RlbXBsYXRlcy9zdGFydGVyJzogJy4vc3JjL2RhdGEvdGVtcGxhdGVzL3N0YXJ0ZXIuanNvbicsXG4gICAgICAgICdzcmMvZGF0YS90ZW1wbGF0ZXMvdGVtcGxhdGVzJzogJy4vc3JjL2RhdGEvdGVtcGxhdGVzL3RlbXBsYXRlcy5qc29uJ1xuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogKGNodW5rSW5mbykgPT4ge1xuICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZS5zdGFydHNXaXRoKCdzcmMvZGF0YS8nKSkge1xuICAgICAgICAgICAgcmV0dXJuICdbbmFtZV0uanNvbic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnO1xuICAgICAgICB9LFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZT8uZW5kc1dpdGgoJy5qc29uJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnW25hbWVdLltleHRdJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLVtoYXNoXS5bZXh0XSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5qc29uJ11cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUE7QUFBQSxRQUVOLGlCQUFpQjtBQUFBLFFBQ2pCLGtCQUFrQjtBQUFBLFFBQ2xCLG1CQUFtQjtBQUFBLFFBQ25CLG1CQUFtQjtBQUFBLFFBQ25CLG9CQUFvQjtBQUFBLFFBQ3BCLHlCQUF5QjtBQUFBLFFBQ3pCLHFCQUFxQjtBQUFBLFFBQ3JCLDhCQUE4QjtBQUFBLFFBQzlCLGdDQUFnQztBQUFBLE1BQ2xDO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQzFDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsTUFBTSxTQUFTLE9BQU8sR0FBRztBQUNyQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLGVBQWUsQ0FBQyxXQUFXO0FBQzdCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
