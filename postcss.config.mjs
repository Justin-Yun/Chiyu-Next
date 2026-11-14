// `@import "tailwindcss"` in globals.css resolves to the full, prebuilt
// Tailwind v1 stylesheet (~1.7 MB), because the root `tailwindcss` package is
// v1.9.6. PurgeCSS strips every selector not referenced in our source so
// production only ships the classes we use, with exactly the same styles.
//
// This is a deliberate stopgap: migrating to Tailwind v4 would remove the need
// for it, but v4's preflight/utilities (and `dark:` variants, which do nothing
// under v1) change the site's look, so that should be its own reviewed change.
// Because purging only sees literal strings, always write class names out in
// full (no `is-${state}`-style concatenation).
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    // Keep Tailwind's variant classes (e.g. `md:text-2xl`) intact.
    defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
    safelist: {
      // Base/preflight rules for elements that are rendered by Next components
      // (<Html>, <Image>, <Link>…) and so never appear literally in our JSX.
      // Keep every plain element selector so base styles stay identical.
      standard: [/^[a-z][a-z0-9]*$/, /^lg-/, /^lightgallery/],
      greedy: [/lg-/],
    },
  },
];

const config = {
  plugins: [
    "@tailwindcss/postcss",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};

export default config;
