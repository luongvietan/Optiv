/** Site-wide copy & nav for the marketing landing. */
export const site = {
  name: "OptEx",
  description: "Landing page",
} as const;

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#cta", label: "Get started" },
] as const;
