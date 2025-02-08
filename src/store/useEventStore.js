import { create } from "zustand";


// const fetchEventsFromAPI = async () => {
//     try {
//       const response = await fetch("https://your-api-endpoint/event", {
//         method: "GET",
//         headers: {
//           "Authorization": "Basic " + btoa("admin:admin123"),
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to fetch events, Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       useEventStore.getState().setEvents(data._embedded?.eventList || []);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };
  

const useEventStore = create((set) => ({
  events: [
    {
      name: "Tech Conference 2025",
      id: 2,
      description: "Annual technology conference covering AI, Cloud, and DevOps.",
      location: "New Delhi, India",
      date: "2025-03-15",
      time: "10:00:00",
      banner: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      participants: 500,
    },
    {
      name: "IoT & Smart Devices Conference",
      id: 3,
      description: "Exploring innovations in the Internet of Things (IoT).",
      location: "Lucknow, India",
      date: "2025-12-05",
      time: "15:15:00",
      banner: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      participants: 220,
    },
    {
      name: "Open Source Hackathon",
      id: 4,
      description: "Contribute to open-source projects and collaborate with developers.",
      location: "Jaipur, India",
      date: "2025-11-08",
      time: "12:00:00",
      banner: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      participants: 180,
    },
  ],
  setEvents: (newEvents) => set({ events: newEvents }),
}));

export default useEventStore;
