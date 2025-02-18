"use client";

import { PartnerType } from "@/types/Partner";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { useNotification } from "@/hooks/useNotification";
import { FormInput } from "@/components/Forms";
import { useDictionary } from "@/providers/Dictionary";
import { useRouter } from "next/navigation";
import { updatePartner } from "@/hooks/getPartners";
import { Bounce, toast } from "react-toastify";

type PartnerEditFormProps = {
  partner: PartnerType;
};

export const PartnerEditForm = ({ partner }: PartnerEditFormProps) => {
  const router = useRouter();
  const { addNotification } = useNotification();
  const dict = useDictionary();

  const { control, handleSubmit } = useForm<PartnerType>({
    defaultValues: partner,
  });

  const onCancel = () => {
    addNotification("info", "Redirecting you back", "Please wait");
    router.push("/partners");
  };

  const onSubmit = async (data: PartnerType) => {
    addNotification("info", "Updating partner", "The partner is being updated");

    console.log(data);

    try {
      await updatePartner(partner.uuid, data);
    } catch (err) {
      console.error("Error updating partner:", err);
    }

    toast("Updated partner", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  if (!partner) {
    return null;
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl mb-4">{dict.partners.edit_partner}</h2>
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
