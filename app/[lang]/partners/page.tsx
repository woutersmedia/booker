import { PartnersOverview } from "@/containers/Partners";
import { Metadata } from "next";
import { getSession } from "@/auth/options";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Change, add or remove partners',
}

const PartnersPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div className="container mb-4">
        <h2 className="text-2xl"></h2>
      </div>
      <PartnersOverview />
    </>
  );
};

export default PartnersPage;
