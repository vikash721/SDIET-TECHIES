import { create } from 'zustand';

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
      organizer: { name: "John Doe" },
      badge: "Tech",
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
      organizer: { name: "Alice Johnson" },
      badge: "Sports",
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
      organizer: { name: "Michael Lee" },
      badge: "Hackathon",
    },
  ],
  searchQuery: "",
  filteredEvents: [], // Initially empty
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilteredEvents: (filtered) => set({ filteredEvents: filtered }),
  filterEvents: () => {
    set((state) => {
      const filtered = state.searchQuery
        ? state.events.filter((event) =>
            event.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.badge.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.organizer.name.toLowerCase().includes(state.searchQuery.toLowerCase())

          )
        : state.events; // If searchQuery is empty, show all events
      return { filteredEvents: filtered };
    });
  },
}));

export default useEventStore;
