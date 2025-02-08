import { EditPartnerContainer } from "@/containers/Partners/Edit";
import { LangParams } from "@/types/Locale";

type EditPartnerPageProps = {
  params: Promise<{ lang: LangParams; id: string }>;
};

const EditPartnerPage = async ({ params }: EditPartnerPageProps) => {
  const { lang, id } = await params;

  console.log(lang);

  return <EditPartnerContainer id={id} />;
};

export default EditPartnerPage;
