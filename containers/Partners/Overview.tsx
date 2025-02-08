import { PartnersOverviewTable } from "@/components/Partners/OverviewTable";
import partnersData from "./demoPartners.json";
import { PartnersOverviewToolbar } from "@/components/Partners/OverviewToolbar";

export const PartnersOverview = () => {
  return (
    <>
      <PartnersOverviewToolbar />
      <PartnersOverviewTable partnersData={partnersData} />
    </>
  );
};
