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
      eventBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbP1SjH7EkE1TXIwAcnjd0wZOTem0iIlysA&s",
      participants: 500,
      organizer: { name: "Aleni Doe", profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nstASo8BdadWs3X-ji8e1O0hd5AMByZdGQ&s" },
      badge: "Tech",
      logo: "https://marketplace.canva.com/EAFvxbQlQwU/1/0/1600w/canva-blue-modern-artificial-intelligence-technology-logo-fSD54RypYpE.jpg",

      socialLinks: { instagram: "https://twitter.com", linkedin: "https://linkedin.com" },
      // Nested data specific to this event
      aboutData: {
        title: "About the Event",
        sections: [
          { title: "What is This Event?", content: "Details about the event, including its importance and goals." },
          { title: "Keynote Speakers", content: "Information about keynote speakers and their topics." },
        ],
        callToAction: { title: "Register Now!", content: "Join us for an unforgettable experience. Register today!" },
      },
      guidelinesData: {
        generalRules: [
          "Participants must be registered by the deadline.",
          "Each team can have a maximum of 5 members.",
          "Late entries will not be accepted.",
        ],
        technicalGuidelines: ["Follow all event submission guidelines.", "Use permitted resources only."],
        judgingCriteria: ["Innovation", "Presentation", "Technical Implementation"],
      },
      scheduleData: {
        eventDate: "2025-03-15",
        eventTime: "10:00 AM - 5:00 PM",
        location: "Venue Details Here",
        timeline: [
          { title: "Opening Ceremony", time: "10:00 AM - 10:30 AM" },
          { title: "Keynote Speech", time: "10:30 AM - 11:30 AM" },
          { title: "Workshops", time: "11:30 AM - 1:00 PM" },
        ],
      },
      announcements: [
        { title: "Registration Closing Soon!", date: "2025-02-25", description: "Register before it's too late!", urgency: "high" },
        { title: "Event Updates", date: "2025-02-10", description: "Check out the latest updates on the event page.", urgency: "normal" },
      ],
      people: [
        { id: 1, name: "John Doe", role: "Organizer", profilePicture: "https://picsum.photos/120/120?random=1" },
        { id: 2, name: "Jane Smith", role: "Co-Organizer", profilePicture: "https://picsum.photos/120/120?random=2" },
      ],
    },
    // Add more events with similar structure for nested data...
    {
      name: "IoT & Smart Devices Conference",
      id: 3,
      description: "Exploring innovations in the Internet of Things (IoT).",
      location: "Lucknow, India",
      date: "2025-12-05",
      time: "15:15:00",
      banner: "https://soracom.io/wp-content/uploads/2023/12/iot-tech-expo-edited.jpeg",
      participants: 220,
      organizer: { name: "Alice Johnson", profilePicture: "https://preview.redd.it/the-best-poses-for-girls-profile-pictures-v0-k3kxvh4czthb1.jpg?width=911&format=pjpg&auto=webp&s=5928c38dc54f0dbe37fc68519b2f23f2507e6d15" },
      badge: "Tech",
      // Nested data specific to this event
      aboutData: {
        title: "About the Event",
        sections: [
          { title: "What is This Event?", content: "Details about the event, including its importance and goals." },
          { title: "Keynote Speakers", content: "Information about keynote speakers and their topics." },
        ],
        callToAction: { title: "Register Now!", content: "Join us for an unforgettable experience. Register today!" },
      },
      guidelinesData: {
        generalRules: [
          "Participants must be registered by the deadline.",
          "Each team can have a maximum of 5 members.",
          "Late entries will not be accepted.",
        ],
        technicalGuidelines: ["Follow all event submission guidelines.", "Use permitted resources only."],
        judgingCriteria: ["Innovation", "Presentation", "Technical Implementation"],
      },
      scheduleData: {
        eventDate: "2025-12-05",
        eventTime: "10:00 AM - 4:00 PM",
        location: "Venue Details Here",
        timeline: [
          { title: "Opening Ceremony", time: "10:00 AM - 10:30 AM" },
          { title: "Panel Discussion", time: "10:30 AM - 12:00 PM" },
          { title: "Networking", time: "12:00 PM - 1:00 PM" },
        ],
      },
      announcements: [
        { title: "Registration Closing Soon!", date: "2025-11-20", description: "Hurry up! Register now to secure your spot.", urgency: "high" },
        { title: "Event Update", date: "2025-11-10", description: "Check out the new speaker line-up.", urgency: "normal" },
      ],
      people: [
        { id: 1, name: "Michael Lee", role: "Organizer", profilePicture: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, name: "Sophia Green", role: "Co-Organizer", profilePicture: "https://randomuser.me/api/portraits/women/2.jpg" },
      ],
    },
  ],

  searchQuery: "",
  filteredEvents: [], // Initially empty
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilteredEvents: (filtered) => set({ filteredEvents: filtered }),

  // Filter events based on search query
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
