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
          items: [{ label: "WeAreDevelopers Berlin 2026", slug: "blog_posts/we_are_developers_2026" }],
        },
      ],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
    }),
  ],
});
