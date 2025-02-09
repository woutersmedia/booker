import { EditPartnerContainer } from "@/containers/Partners/Edit";
import { LangParams } from "@/types/Locale";

type EditPartnerPageProps = {
  params: Promise<{ lang: LangParams; uuid: string }>;
};

const EditPartnerPage = async ({ params }: EditPartnerPageProps) => {
  const { lang, uuid } = await params;

  return <EditPartnerContainer uuid={uuid} />;
};

export default EditPartnerPage;
