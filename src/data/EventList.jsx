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
    <div>
      {selectedEventId ? (
        <ViewEventDetails eventId={selectedEventId} /> // Show event details for selected event
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event.id)} // Trigger the event selection when View Details is clicked
              />
            ))
          ) : (
            <p className="col-span-full text-center">No events available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventList;
