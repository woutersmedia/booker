import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AddNotification } from "@/components/Notification/AddNotification";
import { CalendarContainer } from "@/containers/Calendar";
import { getDictionary } from "@/app/[lang]/dictionaries";

type HomeParams = {
  params: Promise<{ lang: 'en' | 'nl' }>;
};

const Home = async ({ params }: HomeParams) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang)

  console.log(lang)

  return (
    <>
      <Header />
      <AddNotification />

      {dict.homepage?.title}
      <section className="my-8">
        <CalendarContainer />
      </section>

      <Footer />
    </>
  );
};

export default Home;
