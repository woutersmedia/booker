"use client";

import { Button } from "@/components/Button";
import { useDictionary } from "@/providers/Dictionary";
import { PartnerType } from "@/types/Partner";

type PartnersTableRowProps = {
  partner: PartnerType;
};

export const PartnersTableRow = ({ partner }: PartnersTableRowProps) => {
  const dict = useDictionary();

  return (
    <tr className="hover:bg-slate-50">
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm">
          {partner.firstName}{" "}
          {partner.prefix
            ? `${partner.prefix} ${partner.lastName}`
            : partner.lastName}
        </p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm">{partner.artistName}</p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm">{partner.type.join(", ")}</p>
      </td>
      <td className="p-4 border-b border-slate-200 flex gap-1 justify-end">
        <Button
          text={dict.partners.place_on_non_active}
          color="red"
          small
          disabled
        />
        <Button
          text={dict.general.edit}
          small
          href={`/partners/edit/${partner.id}`}
        />
      </td>
    </tr>
  );
};
