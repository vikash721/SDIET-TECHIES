import React from "react";
import CoordinatorEventCard from "./sections/CoordinatorEventCard";
import useUserStore from "../../../store/useUserStore"; // Import Zustand User Store
import { Info } from "lucide-react"; // Using Lucide React Icons
import CenteredContainer from "../../CenteredContainer";

const CoordinatorDashboardOverview = () => {
    // Fetch user data from Zustand Store
    const { coordinatingEvents } = useUserStore((state) => state.userData);

    // Extract ongoing and past events
    const { ongoingEvents, pastEvents } = coordinatingEvents;

    return (
        <CenteredContainer>
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Coordinator Dashboard</h1>

                {/* Information Card */}
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-md flex items-start sm:items-center gap-3 sm:gap-2 mb-6">
      {/* Responsive Info Icon */}
      <Info className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />

      {/* Responsive Text */}
      <span className="text-sm sm:text-base leading-tight sm:leading-normal">
        This dashboard displays events where you are a <b>Coordinator</b>.
        Click on the <b>"Manage Event"</b> button to update event details.
      </span>
    </div>


                {/* Ongoing Events Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Ongoing Events</h2>
                    {ongoingEvents.length > 0 ? (
                        <div >
                            {ongoingEvents.map((event) => (
                                <div className="mb-4">
                                    <CoordinatorEventCard key={event.id} event={event} className="mb-4" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No ongoing events to manage.</p>
                    )}
                </section>

                {/* Past Coordinated Events Section */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Past Coordinated Events</h2>
                    {pastEvents.length > 0 ? (
                        <div>
                            {pastEvents.map((event) => (

                                <div className="mb-4">

                                    <CoordinatorEventCard key={event.id} event={event} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No past events found.</p>
                    )}
                </section>
            </div>
        </CenteredContainer>
    );
};

export default CoordinatorDashboardOverview;
