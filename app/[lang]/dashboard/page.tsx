import { AddNotification } from "@/components/Notification/AddNotification";
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
      <AddNotification />
      <section className="my-8">
        <CalendarContainer />
      </section>
    </>
  );
};

export default DashboardPage;