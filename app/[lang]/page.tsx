import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangParams } from "@/types/Locale";
import { Metadata } from "next";

type HomeParams = {
  params: Promise<LangParams>;
};

export const metadata: Metadata = {
  title: "Home",
  description: "Booker is the all-in-one booking platform",
};

const Home = async ({ params }: HomeParams) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <section className="min-h-96 flex justify-center items-center">
      <h2 className="text-4xl font-bold">{dict.general.please_log_in}</h2>
    </section>
  );
};

export default Home;
