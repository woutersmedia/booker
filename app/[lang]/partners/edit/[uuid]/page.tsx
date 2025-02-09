import { EditPartnerContainer } from "@/containers/Partners/Edit";

type EditPartnerPageProps = {
  params: Promise<{ uuid: string }>;
};

const EditPartnerPage = async ({ params }: EditPartnerPageProps) => {
  const { uuid } = await params;

  return <EditPartnerContainer uuid={uuid} />;
};

export default EditPartnerPage;
