import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Change, add or remove events",
};

const EventsPage = () => {
  console.log('EventsPage');

  return (
    <div>
      <h1>Events</h1>
    </div>
  )
}

export default EventsPage;