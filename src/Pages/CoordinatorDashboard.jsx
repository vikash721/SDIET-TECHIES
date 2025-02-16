import React from 'react'
import CenteredContainer from '../components/CenteredContainer'
import DashboardOverview from '../components/Dashboards/coordinator-dashboard/sections/DashboardOverview'
import Analytics from '../components/Dashboards/coordinator-dashboard/sections/Analytics'
import AttendeeManagement from '../components/Dashboards/coordinator-dashboard/sections/AttendeeManagement'
import EventDetails from '../components/Dashboards/coordinator-dashboard/sections/EventDetails'

import CoordinatorDashboardOverview from '../components/Dashboards/coordinator-dashboard/CoordinatorDashboardOverview'

const CoordinatorDashboard = () => {
  return (
    <>
    <CenteredContainer>
    

    {/* <DashboardOverview/>
    <Analytics/>
    <AttendeeManagement/>
    <EventDetails/> */}
    <CoordinatorDashboardOverview/>

    </CenteredContainer>
    </>
  )
}

export default CoordinatorDashboard