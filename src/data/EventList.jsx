import React from "react";
import EventCard from "../components/EventCard";

import useEventStore from "../store/useEventStore"; // ✅ Import Zustand store

const EventList = () => {
  const { events } = useEventStore(); // ✅ Get events from Zustand

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {events.length > 0 ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p className="col-span-full text-center">No events available</p>
      )}
    </div>
  );
};

export default EventList;
