// import { useState } from "react";
// import { useDictionary } from "@/providers/Dictionary";
// import { PartnerType } from "@/types/Partner";
// import { Button } from "@/components/Button";

import { getPartnerByUuid } from "@/hooks/getPartners";

type EditPartnerContainerProps = {
  uuid: string;
};

export const EditPartnerContainer = async ({ uuid }: EditPartnerContainerProps) => {
  const partner = await getPartnerByUuid(uuid);
  console.log(uuid);

  if (!uuid) {
    return <div>Partner not found</div>;
  }

  return (
    <div className="container">
      <h1>Edit Partner</h1>

      {JSON.stringify(partner)}

      <div className="container">
        {/*<form onSubmit={handleSubmit} className="flex flex-col gap-4">*/}
        {/*  <div>*/}
        {/*    <label className="block text-sm font-medium text-gray-700">*/}
        {/*      {dict.general.name}*/}
        {/*    </label>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      name="name"*/}
        {/*      value={formData.name}*/}
        {/*      onChange={handleChange}*/}
        {/*      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label className="block text-sm font-medium text-gray-700">*/}
        {/*      {dict.partners.artist_name}*/}
        {/*    </label>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      name="artistName"*/}
        {/*      value={formData.artistName}*/}
        {/*      onChange={handleChange}*/}
        {/*      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label className="block text-sm font-medium text-gray-700">*/}
        {/*      {dict.general.type}*/}
        {/*    </label>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      name="type"*/}
        {/*      value={formData.type.join(", ")}*/}
        {/*      onChange={(e) =>*/}
        {/*        handleChange({*/}
        {/*          ...e,*/}
        {/*          target: {*/}
        {/*            ...e.target,*/}
        {/*            value: e.target.value.split(", "),*/}
        {/*          },*/}
        {/*        })*/}
        {/*      }*/}
        {/*      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="flex justify-end gap-2">*/}
        {/*    <Button*/}
        {/*      text={dict.general.cancel}*/}
        {/*      onClick={() => router.push("/partners")}*/}
        {/*    />*/}
        {/*    <Button text={dict.general.save} type="submit" />*/}
        {/*  </div>*/}
        {/*</form>*/}
      </div>
    </div>
  );
};
