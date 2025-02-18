import { CalendarContainer } from "@/containers/Calendar";
import { getSession } from "@/auth/options";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <section className="my-8">
        <CalendarContainer />
      </section>
    </>
  );
};

export default DashboardPage;