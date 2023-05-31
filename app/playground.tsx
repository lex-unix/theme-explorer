"use client";
import { Raycast, Theme } from "@/components/raycast";
import React from "react";
import NextLink from "next/link";

export default function Playground({ themes }: { themes: Theme[] }) {
  const [activeTheme, setActiveTheme] = React.useState(themes[0]);

  return (
    <div>
      <Raycast theme={activeTheme} />

      <div className="flex px-4 gap-4">
        Themes:{" "}
        {themes.map((theme) => (
          <button key={theme.name} onClick={() => setActiveTheme(theme)}>
            {theme.name}
          </button>
        ))}
      </div>

      <div className="flex px-4 gap-4">
        Pages:
        {themes.map((theme) => (
          <NextLink key={theme.name} href={`/${theme.author}/${theme.slug}`}>
            {theme.name}
          </NextLink>
        ))}
      </div>
    </div>
  );
}
