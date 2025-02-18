import { PartnersOverview } from "@/containers/Partners";
import { Metadata } from "next";
import { getSession } from "@/auth/options";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Partners",
  description: "Change, add or remove partners",
};

const PartnersPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return <PartnersOverview />;
};

export default PartnersPage;
