"use client";

import { PartnerType } from "@/types/Partner";
import { Button } from "@/components/Button";
import { Controller, useForm } from "react-hook-form";
import { useNotification } from "@/hooks/useNotification";

type PartnerEditFormProps = {
  partner: PartnerType;
};

export const PartnerEditForm = ({ partner }: PartnerEditFormProps) => {
  const { addNotification } = useNotification();

  const { control, handleSubmit } = useForm<PartnerType>({
    defaultValues: partner,
  });

  const onSubmit = (data: PartnerType) => {
    addNotification("info", "Updating partner", "The partner is being updated");

    console.log(data);

    addNotification(
      "success",
      "Partner updated",
      "The partner has been updated successfully",
    );
  };

  if (!partner) {
    return null;
  }

  return (
    <>
      <div className="container my-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded bg-white p-4 text-black"
        >
          <h2 className="text-2xl mb-4">Edit Partner</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-1 px-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Prefix
            </label>
            <Controller
              name="prefix"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-1 px-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-1 px-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Artist Name
            </label>
            <Controller
              name="artistName"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-1 px-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="mt-1 py-1 px-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              )}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button text="Cancel" color="red" />
            <Button text="Save" color="primary" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
