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




    
  

    {
      "name": "AI Summit 2025",
      "id": 1,
      "description": "A global summit bringing together AI experts and enthusiasts.",
      "location": "San Francisco, USA",
      "date": "2025-05-20",
      "time": "09:00:00",
      "eventBanner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzj6m8V5g5VtvJMzlgvBoCU5FwV9kAlrt2yQ&s",
      "participants": 300,
      "organizer": { "name": "Emily Davis", "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPZlvw3rWbX5E1Fz4XYdKpAGq1jWZfcOzyFc&s" },
      "badge": "AI",
      "logo": "https://marketplace.canva.com/EAFvxbQlQwU/1/0/1600w/canva-ai-logo-2025.jpg",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          { "title": "What is This Event?", "content": "Learn about AI's future and its real-world applications." },
          { "title": "Keynote Speakers", "content": "Top experts from the field of Artificial Intelligence will be presenting." }
        ],
        "callToAction": { "title": "Sign Up Now!", "content": "Don't miss out! Sign up today and join us!" }
      },
      "guidelinesData": {
        "generalRules": [
          "Pre-registration is required.",
          "Please arrive at least 30 minutes before the event starts.",
          "No recording during keynote speeches."
        ],
        "technicalGuidelines": ["AI models to be used must be pre-approved.", "Internet access is available on-site."],
        "judgingCriteria": ["Impact", "Scalability", "Innovation"]
      },
      "scheduleData": {
        "eventDate": "2025-05-20",
        "eventTime": "09:00 AM - 6:00 PM",
        "location": "TechHub Arena",
        "timeline": [
          { "title": "Registration & Breakfast", "time": "09:00 AM - 10:00 AM" },
          { "title": "Opening Keynote", "time": "10:00 AM - 11:30 AM" },
          { "title": "Panel Discussion", "time": "11:30 AM - 1:00 PM" }
        ]
      },
      "announcements": [
        { "title": "Early Bird Tickets Available!", "date": "2025-03-15", "description": "Get your tickets at discounted rates!" },
        { "title": "Event Schedule Released", "date": "2025-04-01", "description": "Check out the full event schedule now." }
      ],
      "people": [
        { "id": 1, "name": "Anna Lee", "role": "Event Manager", "profilePicture": "https://picsum.photos/120/120?random=3" },
        { "id": 2, "name": "Chris Brown", "role": "Technical Lead", "profilePicture": "https://picsum.photos/120/120?random=4" }
      ]
    },
    {
      "name": "Cloud Dev 2025",
      "id": 2,
      "description": "A conference focused on cloud computing, DevOps, and modern development practices.",
      "location": "London, UK",
      "date": "2025-06-10",
      "time": "09:30:00",
      "eventBanner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxXyPYmSXL-98GB5QndY-5Wsb2wRIK5nA-w&s",
      "participants": 800,
      "organizer": { "name": "John Smith", "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4Syv3B8fHgOU-Vy_JkExIoh4eO7nHDwM3U8&s" },
      "badge": "Cloud",
      "logo": "https://marketplace.canva.com/EAFvxbQlQwU/1/0/1600w/cloud-logo.jpg",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          { "title": "What is This Event?", "content": "A deep dive into the latest trends in cloud technologies and DevOps." },
          { "title": "Keynote Speakers", "content": "Industry leaders will share their insights on cloud and DevOps." }
        ],
        "callToAction": { "title": "Register Today!", "content": "Join us in London for cutting-edge talks and networking!" }
      },
      "guidelinesData": {
        "generalRules": [
          "Tickets must be shown for entry.",
          "No food allowed in the main conference hall.",
          "Respect the speakers and their presentations."
        ],
        "technicalGuidelines": ["Follow cloud best practices during workshops.", "Use provided resources for DevOps labs."],
        "judgingCriteria": ["Creativity", "Scalability", "Deployment Efficiency"]
      },
      "scheduleData": {
        "eventDate": "2025-06-10",
        "eventTime": "09:30 AM - 5:00 PM",
        "location": "CloudExpo Centre",
        "timeline": [
          { "title": "Opening Remarks", "time": "09:30 AM - 10:00 AM" },
          { "title": "CloudTech Innovations", "time": "10:00 AM - 11:30 AM" },
          { "title": "Hands-On Labs", "time": "11:30 AM - 1:00 PM" }
        ]
      },
      "announcements": [
        { "title": "Limited Seats Left!", "date": "2025-05-01", "description": "Seats are filling up fast, book yours now." },
        { "title": "Workshop Registration Open", "date": "2025-04-20", "description": "Sign up for exclusive hands-on workshops." }
      ],
      "people": [
        { "id": 1, "name": "Sara Patel", "role": "Event Coordinator", "profilePicture": "https://picsum.photos/120/120?random=5" },
        { "id": 2, "name": "Mark Spencer", "role": "Lead Developer", "profilePicture": "https://picsum.photos/120/120?random=6" }
      ]
    },
    {
      "name": "Hackathon 2025",
      "id": 3,
      "description": "An exciting hackathon bringing together coders and developers to solve real-world problems.",
      "location": "Bengaluru, India",
      "date": "2025-07-25",
      "time": "08:30:00",
      "eventBanner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYPm4l8gAq_P5bhDNxqGfsl_lYfrh1t0rVw&s",
      "participants": 1000,
      "organizer": { "name": "Rajesh Kumar", "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiXzF0dSZ1jwWvHtwnt_-uz88Rm06Q1U6w8k&s" },
      "badge": "Hackathon",
      "logo": "https://marketplace.canva.com/EAFvxbQlQwU/1/0/1600w/hackathon-logo.jpg",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          { "title": "What is This Hackathon?", "content": "Join teams to build innovative projects in 48 hours." },
          { "title": "Judging Panel", "content": "Expert panel will judge projects based on creativity and technical merit." }
        ],
        "callToAction": { "title": "Register Now!", "content": "Register your team now and take on the challenge!" }
      },
      "guidelinesData": {
        "generalRules": [
          "Teams must consist of 3-5 members.",
          "Participants must bring their own laptops.",
          "Project submissions are due by the end of the event."
        ],
        "technicalGuidelines": ["Projects must use at least one open-source technology.", "Cloud hosting will be provided."],
        "judgingCriteria": ["Innovation", "Functionality", "Presentation"]
      },
      "scheduleData": {
        "eventDate": "2025-07-25",
        "eventTime": "08:30 AM - 6:00 PM",
        "location": "Innovation Centre",
        "timeline": [
          { "title": "Team Registration", "time": "08:30 AM - 09:00 AM" },
          { "title": "Opening Ceremony", "time": "09:00 AM - 09:30 AM" },
          { "title": "Hackathon Begins", "time": "09:30 AM - 09:30 PM" }
        ]
      },
      "announcements": [
        { "title": "Early Bird Registration", "date": "2025-06-01", "description": "Sign up early to get a discount!" },
        { "title": "Deadline Approaching", "date": "2025-07-15", "description": "Hurry up, registration closes soon!" }
      ],
      "people": [
        { "id": 1, "name": "Vikram Reddy", "role": "Event Head", "profilePicture": "https://picsum.photos/120/120?random=7" },
        { "id": 2, "name": "Anjali Sharma", "role": "Volunteer Coordinator", "profilePicture": "https://picsum.photos/120/120?random=8" }
      ]
    },
    {
      "name": "Cybersecurity 2025",
      "id": 4,
      "description": "A cybersecurity conference with the latest threats and protection techniques in the industry.",
      "location": "Berlin, Germany",
      "date": "2025-09-10",
      "time": "10:00:00",
      "eventBanner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uSQGmuQe0K2V7gQv92H9f7UEb1MjwG9Lkw&s",
      "participants": 600,
      "organizer": { "name": "Lena Fischer", "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lG5mj_O0G1sN4MQgRvd6U1lP5nU0JmXNN1k&s" },
      "badge": "Cybersecurity",
      "logo": "https://marketplace.canva.com/EAFvxbQlQwU/1/0/1600w/cybersecurity-logo.jpg",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          { "title": "What is This Conference?", "content": "Stay ahead of the curve with the latest cybersecurity insights." },
          { "title": "Featured Speakers", "content": "Learn from the best in the field of cybersecurity." }
        ],
        "callToAction": { "title": "Reserve Your Spot!", "content": "Don't miss the opportunity to learn from industry leaders." }
      },
      "guidelinesData": {
        "generalRules": [
          "Strictly no photography during confidential sessions.",
          "Keep your badge visible at all times.",
          "Respect the privacy of fellow attendees."
        ],
        "technicalGuidelines": ["Follow the best practices for network security.", "Ensure all devices are updated with the latest patches."],
        "judgingCriteria": ["Threat Detection", "Response Time", "Innovation"]
      },
      "scheduleData": {
        "eventDate": "2025-09-10",
        "eventTime": "10:00 AM - 5:30 PM",
        "location": "CyberTech Arena",
        "timeline": [
          { "title": "Keynote: The Future of Cybersecurity", "time": "10:00 AM - 11:30 AM" },
          { "title": "Workshops", "time": "11:30 AM - 1:00 PM" },
          { "title": "Panel Discussion: Protecting Your Business", "time": "01:30 PM - 3:00 PM" }
        ]
      },
      "announcements": [
        { "title": "Conference Agenda Live", "date": "2025-08-15", "description": "Check out the full conference agenda now." },
        { "title": "Call for Speakers", "date": "2025-06-01", "description": "Submit your proposals for speaking at the conference." }
      ],
      "people": [
        { "id": 1, "name": "Rita Weber", "role": "Conference Lead", "profilePicture": "https://picsum.photos/120/120?random=9" },
        { "id": 2, "name": "Daniel Koch", "role": "Security Expert", "profilePicture": "https://picsum.photos/120/120?random=10" }
      ]
    },





    // Add more events here...
  ],

  searchQuery: "",
  filteredEvents: [],

  selectedEventId: null,  // Add selectedEventId state to track the current event

  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilteredEvents: (filtered) => set({ filteredEvents: filtered }),

  setSelectedEventId: (id) => set({ selectedEventId: id }),  // Function to set the selected event ID

  // Get selected event details based on selectedEventId
  getSelectedEvent: () => {
    return (state) => {
      const selectedEvent = state.events.find((event) => event.id === state.selectedEventId);
      return selectedEvent || {};  // Return the selected event or an empty object if not found
    };
  },

  filterEvents: () => {
    set((state) => {
      const filtered = state.searchQuery
        ? state.events.filter((event) =>
            event.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.badge.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.organizer.name.toLowerCase().includes(state.searchQuery.toLowerCase())
          )
        : state.events;  // If searchQuery is empty, show all events
      return { filteredEvents: filtered };
    });
  },
}));

export default useEventStore;
