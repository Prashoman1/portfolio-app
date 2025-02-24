export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Prashoman's Portfolio",
  description: "A personal portfolio website showcasing my skills, projects, and achievements. Built with React, Tailwind CSS, and Framer Motion. Hosted on Vercel. Optimized for performance, accessibility, and SEO. Dark mode is available. Feel free to use this template for your portfolio. Don't forget to give it a star on GitHub if you like it. Thank you! 🚀",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Blogs",
      href: "#blogs",
    },
    {
      label: "Contact Us",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
