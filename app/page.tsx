import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AddNotification } from "@/components/Notification/AddNotification";
import { CalendarContainer } from "@/containers/Calendar";

export default function Home() {
  return (
    <>
      <Header />
      <AddNotification />

      <section className="my-8">
        <CalendarContainer />
      </section>

      <Footer />
    </>
  );
}
