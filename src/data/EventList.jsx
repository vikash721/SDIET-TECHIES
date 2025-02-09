import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import useEventStore from "../store/useEventStore";
import ViewEventDetails from "../components/eventdetails/ViewEventDetails"; // Import the ViewEventDetails component

const EventList = () => {
  const { filteredEvents, filterEvents } = useEventStore(); // Get filtered events from Zustand
  const [selectedEventId, setSelectedEventId] = useState(null); // State to track selected event ID

  useEffect(() => {
    filterEvents(); // Ensure filteredEvents is populated on component mount
  }, [filterEvents]);

  const handleEventClick = (eventId) => {
    setSelectedEventId(eventId); // Update the selected event ID
  };

  return (
    <div>
      {selectedEventId ? (
        // If event is selected, show the details view
        <ViewEventDetails eventId={selectedEventId} />
      ) : (
        // If no event is selected, show the event list
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event.id)} // Pass click handler to EventCard
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
