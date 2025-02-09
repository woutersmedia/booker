"use client";

import { useDictionary } from "@/providers/Dictionary";

export const PartnersTableHeader = () => {
  const dict = useDictionary();

  return (
    <thead>
      <tr>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500">
            {dict.general.name}
          </p>
        </th>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500">
            {dict.partners.artist_name}
          </p>
        </th>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500">
            {dict.general.type}
          </p>
        </th>
        <th className="p-4 border-b border-slate-300 bg-slate-50">
          <p className="block text-sm font-normal leading-none text-slate-500"></p>
        </th>
      </tr>
    </thead>
  );
};
