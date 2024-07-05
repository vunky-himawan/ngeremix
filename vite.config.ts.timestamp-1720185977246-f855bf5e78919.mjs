// vite.config.ts
import UnoCSS from "file:///D:/Belajar/ngeremix/ngeremix/node_modules/.pnpm/unocss@0.61.2_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.9_/node_modules/unocss/dist/vite.mjs";
import { vitePlugin as remix } from "file:///D:/Belajar/ngeremix/ngeremix/node_modules/.pnpm/@remix-run+dev@2.10.2_@remix-run+react@2.10.2_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_5k72qpoa7osnvkl5gt7nr3drd4/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///D:/Belajar/ngeremix/ngeremix/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.9/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///D:/Belajar/ngeremix/ngeremix/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.5.3_vite@5.3.3_@types+node@20.14.9_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    UnoCSS(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCZWxhamFyXFxcXG5nZXJlbWl4XFxcXG5nZXJlbWl4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxCZWxhamFyXFxcXG5nZXJlbWl4XFxcXG5nZXJlbWl4XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9CZWxhamFyL25nZXJlbWl4L25nZXJlbWl4L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IFVub0NTUyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCB7IHZpdGVQbHVnaW4gYXMgcmVtaXggfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXZcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVW5vQ1NTKCksXG4gICAgcmVtaXgoe1xuICAgICAgZnV0dXJlOiB7XG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThRLE9BQU8sWUFBWTtBQUNqUyxTQUFTLGNBQWMsYUFBYTtBQUNwQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
