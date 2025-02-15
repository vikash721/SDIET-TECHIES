import React from 'react'

import WinnerCarousel from '../components/WinnerCarousel'
import TeachersDashboard from '../components/Dashboards/TeachersDashboard/TeachersDashboard.jsx'
import CenteredContainer from '../components/CenteredContainer.jsx'



const HomePage = () => {
    return (
        <>
            {/* <WinnerCarousel /> */}
            <CenteredContainer>      
                      <TeachersDashboard />
            </CenteredContainer>

        </>
    )
}

export default HomePage