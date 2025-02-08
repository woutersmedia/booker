import { PartnersOverviewTable } from "@/components/Partners/OverviewTable";
import { PartnersOverviewToolbar } from "@/components/Partners/OverviewToolbar";
import { getPartners } from "@/hooks/getPartners";

export const PartnersOverview = async () => {
  const partners = await getPartners();

  return (
    <>
      <PartnersOverviewToolbar />
      {partners && (
        <PartnersOverviewTable partnersData={partners} />
      )}
    </>
  );
};
