import React from 'react'
import NavbarOnLogin from '../components/NavbarOnLogin'
import EventSearch from '../components/EventSearch'
import EventCard from '../components/EventCard'
import EventList from '../data/EventList'
import CenteredContainer from '../components/CenteredContainer'
import Footer from '../components/Footer'

const EventPage = () => {
  return (
    <>
    

    <EventSearch/>

    {/* we are using Centered comonent to center the EventList cards */}

    <CenteredContainer>
      <EventList/>
    </CenteredContainer>

   
    
    
    </>
  )
}

export default EventPage