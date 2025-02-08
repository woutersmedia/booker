"use client";

import { PartnersTableHeader } from "./PartnersTableHeader";
import { PartnersTableRow } from "./PartnersTableRow";
import { useDictionary } from "@/providers/Dictionary";
import { PartnerType } from "@/types/Partner";

type PartnersOverviewTableProps = {
  partnersData: PartnerType[];
};

export const PartnersOverviewTable = ({
  partnersData,
}: PartnersOverviewTableProps) => {
  const dict = useDictionary();

  return (
    <div className="container">
      <div className="relative flex flex-col w-full h-full overflow-scroll shadow-md rounded-lg bg-clip-border my-4">
        <table className="w-full text-left table-auto min-w-max">
          <PartnersTableHeader />
          <tbody>
            {partnersData.map((partner, index) => (
              <PartnersTableRow key={index} partner={partner} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
