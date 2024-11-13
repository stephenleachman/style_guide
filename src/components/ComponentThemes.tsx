'use client'

import { 
  extendVariants, 
  Button, 
  Link,
  Chip,
} from "@nextui-org/react";

// Button Themes -------------------------------------------------------------------------------------------------------------------
export const ButtonThemed = extendVariants(Button, {
  variants: {
    color: {
      gradiant: "text-white  font-semibold tracking-wide bg-gradient-to-b from-primary-1 to-primary-2  rounded-lg",
      bordered: "text-primary-1 font-semibold border-2 border-primary-1 tracking-wide hover:transition rounded-lg	ease delay-100 hover:ring-1 ring-primary-1 ",
      primary: "text-white font-semibold tracking-wide bg-primary-1 rounded-lg",
    },
    shadow: {
      primary: "shadow-lg shadow-primary-2/50"
    },
    size: {  },
  },
});

// Link Themes -------------------------------------------------------------------------------------------------------------------
export const LinkThemed = extendVariants(Link, {
  variants: {
    color: {
      textLink: "cursor-pointer underline underline-offset-4 decoration-2 text-primary-1 font-semibold",
      navLink: "cursor-pointer text-primary-1 tracking-wide font-semibold",
      iconLink: "cursor-pointer text-primary-1 tracking-wide",
      buttonLink: "cursor-pointer text-primary-1 tracking-wide",
    },
    size: {  },
  },
});

// Link Themes -------------------------------------------------------------------------------------------------------------------

export const ChipThemed = extendVariants(Chip, {
  variants: {
    color: {
      solid: { base: "rounded-full bg-primary-2 text-white" },
      bordered: { base: "rounded-full border-2 border-primary-2 text-primary-2" },
      primary: { base: "rounded-full bg-primary-2"},
      light: { base: "text-primary-2 " },
      flat: { base: "rounded-full bg-primary-2/20 text-primary-2 " },
      faded: { base: "bg-border-color/30 border-2 border-border-color text-primary-2" },
      shadow: { base: "rounded-full shadow-md shadow-primary-2/30 bg-primary-2 text-white" },
    },
    size: {  },
  },
});