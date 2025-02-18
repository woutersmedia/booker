"use client"

import { useDictionary } from "@/providers/Dictionary";
import { NavigationItem } from "@/components/Header/Navigation/NavigationItem";
import { useSession } from "next-auth/react";

export const Navigation = () => {
  const dict = useDictionary();
  const { data: session } = useSession();

  return (
    <nav role="navigation" className="p-4">
      <ul className="flex flex-col gap-4">
        {!session ? (
          <>
            <NavigationItem label="Product" href="/" />
            <NavigationItem label="About" href="/" />
            <NavigationItem label="Support" href="/" />
            <NavigationItem label="News" href="/" />
          </>
        ) : (
          <>
            <NavigationItem label={dict.navigation.partners} href="/partners" />
            <NavigationItem label={dict.navigation.locations} href="/" />
            <NavigationItem label={dict.navigation.events} href="/events" />
            <NavigationItem label="Genres" href="/" />
          </>
        )}
      </ul>
    </nav>
  );
};
