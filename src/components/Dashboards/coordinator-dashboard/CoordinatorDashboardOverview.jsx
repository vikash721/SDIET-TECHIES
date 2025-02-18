import CoordinatorEventCard from "./sections/CoordinatorEventCard"
import useUserStore from "../../../store/useUserStore"
import { Info } from "lucide-react"
import CenteredContainer from "../../CenteredContainer"

const CoordinatorDashboardOverview = () => {
  const { coordinatingEvents } = useUserStore((state) => state.userData)
  const { ongoingEvents, pastEvents } = coordinatingEvents

  return (
    <CenteredContainer>
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Coordinator Dashboard</h1>

        {/* Information Card */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-md flex items-start sm:items-center gap-3 sm:gap-2 mb-8">
          <Info className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
          <span className="text-sm sm:text-base leading-tight sm:leading-normal">
            This dashboard displays events where you are a <b>Coordinator</b>. Click on the <b>"Manage Event"</b> button
            to update event details.
          </span>
        </div>

        {/* Ongoing Events Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Ongoing Events</h2>
          {ongoingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {ongoingEvents.map((event) => (
                <CoordinatorEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No ongoing events to manage.</p>
          )}
        </section>

        {/* Past Coordinated Events Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Past Coordinated Events</h2>
          {pastEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {pastEvents.map((event) => (
                <CoordinatorEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No past events found.</p>
          )}
        </section>
      </div>
    </CenteredContainer>
  )
}

export default CoordinatorDashboardOverview

