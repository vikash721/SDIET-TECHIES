import React from "react";
import EventSearch from "../components/EventSearch";
import EventList from "../data/EventList";
import CenteredContainer from "../components/CenteredContainer";

const EventPage = () => {
  return (
    <CenteredContainer>
      {/* Added margin-bottom for spacing */}
      <div className="mb-6 w-full mt-6">
        <EventSearch />
      </div>

      {/* Event list with spacing */}
      <div className="w-full">
        <EventList />
      </div>
    </CenteredContainer>
  );
};

export default EventPage;
