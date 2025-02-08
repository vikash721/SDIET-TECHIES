import React, { useEffect } from "react";
import EventCard from "../components/EventCard";
import useEventStore from "../store/useEventStore"; // ✅ Correct import

const EventList = () => {
  const { filteredEvents, filterEvents } = useEventStore(); // ✅ Get filtered events from Zustand

  useEffect(() => {
    // Ensure filteredEvents is populated on component mount
    filterEvents();
  }, [filterEvents]); // Runs on initial render

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p className="col-span-full text-center">No events available</p>
      )}
    </div>
  );
};

export default EventList;
