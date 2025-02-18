import { getPartnerByUuid } from "@/hooks/getPartners";
import { redirect } from "next/navigation";
import { PartnerEditForm } from "@/components/Partners/EditForm";

type EditPartnerContainerProps = {
  uuid: string;
};

export const EditPartnerContainer = async ({
  uuid,
}: EditPartnerContainerProps) => {
  const partner = await getPartnerByUuid(uuid);

  if (!partner) {
    redirect("/partners");
  }

  return <PartnerEditForm partner={partner} />;
};
