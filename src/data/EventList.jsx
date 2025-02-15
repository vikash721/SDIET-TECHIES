import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import useEventStore from "../store/useEventStore";
import ViewEventDetails from "../components/eventdetails/ViewEventDetails";

const EventList = () => {
  const { filteredEvents, filterEvents } = useEventStore();
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    filterEvents(); // Ensure filteredEvents is populated on component mount
  }, [filterEvents]);

  const handleEventClick = (eventId) => {
    setSelectedEventId(eventId); // Update the selected event ID
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {selectedEventId ? (
        <ViewEventDetails eventId={selectedEventId} />
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event.id)}
                className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%] xl:w-[19%]"
              />
            ))
          ) : (
            <p className="w-full text-center">No events available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventList;
