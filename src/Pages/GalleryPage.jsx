import React from 'react'
import CoordinatorEventList from '../components/Dashboards/coordinator-dashboard/sections/CoordinatorEventCard'
import CoordinatorEventManagaeDashboard from '../components/Dashboards/coordinator-dashboard/CoordinatorEventManageDashboard'
import MasonryGrid from '../components/MasonryGrid'
import CenteredContainer from '../components/CenteredContainer'


const GalleryPage = () => {
  return (
    <>
      {/* <div>GalleryPage</div> */}
      {/* <CoordinatorEventManage/> */}
      <div>
        <CenteredContainer>
        <MasonryGrid/>
        </CenteredContainer>
      </div>
    </>
  )
}

export default GalleryPage