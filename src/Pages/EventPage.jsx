import React from "react";
import EventSearch from "../components/EventSearch";
import EventList from "../data/EventList";
import CenteredContainer from "../components/CenteredContainer";

const EventPage = () => {
  return (
    <CenteredContainer>
      <EventSearch />
      <EventList />
    </CenteredContainer>
  );
};

export default EventPage;
