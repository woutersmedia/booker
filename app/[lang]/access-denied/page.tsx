import Link from "next/link";
import { LangParams } from "@/types/Locale";
import { getDictionary } from "@/app/[lang]/dictionaries";

type AccessDeniedPageProps = {
  params: Promise<LangParams>;
};

const AccessDeniedPage = async ({ params }: AccessDeniedPageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="min-h-96 flex justify-center items-center flex-col lg:prose">
      <h2>{dict.general.access_denied}</h2>
      <p>
        {dict.general.no_access} {dict.general.go_back_to}{" "}
        <Link href="/" title="Go to Home">
          Home
        </Link>
      </p>
    </section>
  );
};

export default AccessDeniedPage;
