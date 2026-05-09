// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://blog.lucas-huenniger.dev/",
  integrations: [
    starlight({
      title: "The Runtime",
      customCss: ["./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/MhouneyLH/the_runtime_blog" },
        { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/lucas-huenniger" },
      ],
      sidebar: [
        {
          label: "Blog Posts",
          items: [{ label: "Example Blog Post", slug: "blog_posts/example" }],
        },
      ],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
    }),
  ],
});
