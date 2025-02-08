"use client"

import { useDictionary } from "@/providers/Dictionary";
import { NavigationItem } from "@/components/Header/Navigation/NavigationItem";

export const Navigation = () => {
  const dict = useDictionary();

  return (
    <nav role="navigation">
      <ul className="flex gap-4">
        <NavigationItem label={dict.navigation.partners} href="/partners" />
        <NavigationItem label={dict.navigation.locations} href="/" />
        <NavigationItem label="Authors" href="/" />
        <NavigationItem label="Genres" href="/" />
      </ul>
    </nav>
  );
};
