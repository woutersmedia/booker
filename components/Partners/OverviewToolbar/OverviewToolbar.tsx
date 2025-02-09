"use client"

import { Button } from "@/components/Button";
import { useDictionary } from "@/providers/Dictionary";

export const PartnersOverviewToolbar = () => {
  const dict = useDictionary();

  return (
    <div className="container">
      <div className="flex justify-end">
        <Button text={dict.partners.add_partner} />
      </div>
    </div>
  );
};
