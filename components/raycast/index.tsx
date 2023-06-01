"use client";
import { List } from "@/components/raycast/list";
import { Grid } from "@/components/raycast/grid";
import { RootFooter } from "@/components/raycast/root-footer";
import { RootHeader } from "@/components/raycast/root-header";
import chroma from "chroma-js";
import React from "react";
import { Theme } from "@/lib/theme";

export function Raycast({
  theme,
  size = "normal",
  disableLoadingAnimation,
}: {
  theme: Theme;
  size?: "small" | "normal";
  disableLoadingAnimation?: boolean;
}) {
  const windowSize = {
    normal: {
      width: 750,
      height: 475,
    },
    small: {
      width: 375,
      height: 237.5,
    },
  }[size];
  return (
    <div style={{ ...windowSize }}>
      <svg
        viewBox="0 0 750 475"
        // height={height}
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <foreignObject
          width="750"
          height="475"
          x="0"
          y="0"
          className="rounded-4"
        >
          <div
            id="raycast"
            className={`w-full h-full rounded-4 backdrop-blur-[72px] border shadow flex flex-col relative overflow-hidden select-none shrink-0`}
            style={Object.assign(
              {
                zIndex: 2,
                backgroundColor: chroma(theme.colors.backgroundPrimary)
                  .alpha(0.6)
                  .css(),
                borderColor: chroma(theme.colors.text).alpha(0.2).css(),
              },
              ...Object.entries(theme.colors).map(([key, value]) => ({
                ["--" + key]: value,
              }))
            )}
          >
            <RootHeader
              theme={theme}
              disableLoadingAnimation={disableLoadingAnimation}
            />

            <main className="flex-1 overflow-hidden py-1">
              <List theme={theme} />
              <Grid theme={theme} />
            </main>

            <RootFooter theme={theme} />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
