import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]); // State to store fetched events
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("Fetching events...");  // ✅ Debugging log
        const response = await fetch("https://2900-2401-4900-8390-db30-b72b-bd5d-3e0d-e1e3.ngrok-free.app/event", {
          method: "GET",
          headers: {
            "Authorization": "Basic " + btoa("admin:admin123"),
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        console.log("Response:", response);  // ✅ Check API response

        if (!response.ok) {
          throw new Error(`Failed to fetch events, Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);  // ✅ Check API data

        setEvents(data._embedded?.eventList || []);
      } catch (error) {
        console.error("Error fetching events:", error);  // ✅ Show errors
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);


  if (loading) return <p className="text-center">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard
            key={event.id}
            event={{
              name: event.name,
              description: event.description,
              time: `${event.date}, ${event.time}`,
              location: event.location,
            }}
          />
        ))
      ) : (
        <p className="col-span-full text-center">No events available</p>
      )}
    </div>
  );
};

export default EventList;


const data = () => {

  const eventDataPreview = {
    "_embedded": {
      "eventList": [
        {
          "name": "Tech Conference 2025",
          "id": 2,
          "description": "Annual technology conference covering AI, Cloud, and DevOps.",
          "location": "New Delhi, India",
          "date": "2025-03-15",
          "time": "10:00:00",
          "banner": "tech_conf_banner.jpg",
          "participants": 500,
          "_links": {
            "self": {
              "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event/2"
            },
            "events": {
              "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event"
            }
          }
        },
        {
          "name": "IoT & Smart Devices Conference",
          "id": 3,
          "description": "Exploring innovations in the Internet of Things (IoT).",
          "location": "Lucknow, India",
          "date": "2025-12-05",
          "time": "15:15:00",
          "banner": "iot_conference.jpg",
          "participants": 220,
          "_links": {
            "self": {
              "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event/3"
            },
            "events": {
              "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event"
            }
          }
        },
        {
          "name": "Open Source Hackathon",
          "id": 4,
          "description": "Contribute to open-source projects and collaborate with developers.",
          "location": "Jaipur, India",
          "date": "2025-11-08",
          "time": "12:00:00",
          "banner": "opensource_hackathon.jpg",
          "participants": 180,
          "_links": {
            "self": {
              "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event/4"
            },
            "events": {
              "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event"
            }
          }
        }
      ]
    },
    "_links": {
      "self": {
        "href": "http://362e-2409-40d0-2018-af5c-f201-b7f0-5e4a-8b23.ngrok-free.app/event"
      }
    }
  }


}