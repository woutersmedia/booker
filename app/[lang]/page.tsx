import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangParams } from "@/types/Locale";
import { Metadata } from "next";
import { Button } from "@/components/Button";

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
    <section className="min-h-screen flex flex-col items-center justify-center text-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Booker</h1>
        <p className="text-2xl mb-8">{dict.homepage.title}</p>
        <Button
          href={`mailto:contact@woutersmedia.nl?subject=${dict.homepage.demo_request_subject}`}
          text={dict.homepage.request_demo}
        />
        <p className="italic mt-4">{dict.general.currently_in_beta}</p>
      </div>
      <div className="container">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-zinc-800 dark:text-zinc-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
              {dict.homepage.for_artists}
            </h2>
            <p className="text-lg">{dict.homepage.for_artists_description}</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 dark:text-zinc-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
              {dict.homepage.for_bookers}
            </h2>
            <p className="text-lg">{dict.homepage.for_bookers_description}</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 dark:text-zinc-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
              {dict.homepage.for_venues}
            </h2>
            <p className="text-lg">{dict.homepage.for_venues_description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
