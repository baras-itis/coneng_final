import React from "react";
import type { ReactNode } from "react";
interface LayoutProps {
  children:
    ReactNode | ReactNode[] | string | number | boolean | null | undefined;
}

export default function LayoutContent({ children }: LayoutProps) {
  return (
    <div
      className="
    grid
    grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12
    px-5
    md:text-justify
    w-full 
    font-light text-neutral-900
    text-base md:text-lg xl:text-xl"
    >
      {children}
    </div>
  );
}
