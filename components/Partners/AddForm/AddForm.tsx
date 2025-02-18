"use client";

import { PartnerType } from "@/types/Partner";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useNotification } from "@/hooks/useNotification";
import { FormInput } from "@/components/Forms";
import { useDictionary } from "@/providers/Dictionary";
import { useRouter } from "next/navigation";
import { createPartner } from "@/hooks/getPartners";

export const AddPartnerForm = () => {
  const router = useRouter();
  const { addNotification } = useNotification();
  const dict = useDictionary();

  const { control, handleSubmit } = useForm<PartnerType>();

  const onCancel = () => {
    addNotification("info", "Redirecting you back", "Please wait");
    router.push("/partners");
  };

  const onSubmit = async (data: PartnerType) => {
    addNotification("info", "Creating partner", "The partner is being created");

    console.log(data);

    try {
      await createPartner(data);
    } catch (err) {
      console.error("Error creating Partner:", err);
    }

    addNotification(
      "success",
      "Partner created",
      "The partner has been created successfully",
    );
  };

  return (
    <>
      <div className="container my-4 shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded bg-white p-4 text-black"
        >
          <h2 className="text-2xl mb-4">{dict.partners.add_partner}</h2>
          <div className="mb-4">
            <FormInput
              id="firstName"
              label={dict.general.first_name}
              placeholder={dict.general.fill_in_first_name}
              control={control}
              required
            />
          </div>
          <div className="mb-4">
            <FormInput
              id="prefix"
              label={dict.general.prefix}
              placeholder=""
              control={control}
            />
          </div>
          <div className="mb-4">
            <FormInput
              id="lastName"
              label={dict.general.last_name}
              placeholder={dict.general.fill_in_last_name}
              control={control}
              required
            />
          </div>
          <div className="mb-4">
            <FormInput
              id="artistName"
              label={dict.partners.artist_name}
              placeholder={dict.partners.fill_in_artist_name}
              control={control}
            />
          </div>
          <div className="mb-4">
            <FormInput
              id="type"
              label={dict.general.type}
              placeholder={dict.general.fill_in_type}
              control={control}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button text={dict.general.cancel} onClick={onCancel} color="red" />
            <Button text={dict.general.save} color="primary" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
