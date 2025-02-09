import { create } from 'zustand';

const useEventStore = create((set) => ({
  events: [
    {
      "name": "Tech Conference 2025",
      "id": 2,
      "description": "Annual technology conference covering AI, Cloud, and DevOps.",
      "location": "New Delhi, India",
      "date": "2025-03-15",
      "time": "10:00:00",
      "eventBanner": "https://www.penguins.co.uk/hubfs/event_tech.jpg",
      "participants": 500,
      "organizer": { "name": "Aleni Doe", "profilePicture": "https://via.placeholder.com/120.png?text=Aleni+Doe" },
      "badge": "Tech",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPOgRFWrdMFat1-sQBbnzqHYVj88FF1OSJQ&s",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          { "title": "What is This Event?", "content": "Details about the event, including its importance and goals." },
          { "title": "Keynote Speakers", "content": "Information about keynote speakers and their topics." }
        ],
        "callToAction": { "title": "Register Now!", "content": "Join us for an unforgettable experience. Register today!" }
      },
      "guidelinesData": {
        "generalRules": [
          "Participants must be registered by the deadline.",
          "Each team can have a maximum of 5 members.",
          "Late entries will not be accepted."
        ],
        "technicalGuidelines": ["Follow all event submission guidelines.", "Use permitted resources only."],
        "judgingCriteria": ["Innovation", "Presentation", "Technical Implementation"],
        "resources": { "text": "Additional resources and references will be provided during the event.", "link": "#", "linkText": "Learn More" }
      },
      "scheduleData": {
        "eventDate": "2025-03-15",
        "eventTime": "10:00 AM - 5:00 PM",
        "location": "Venue Details Here",
        "timeline": [
          { "title": "Opening Ceremony", "time": "10:00 AM - 10:30 AM" },
          { "title": "Keynote Speech", "time": "10:30 AM - 11:30 AM" },
          { "title": "Workshops", "time": "11:30 AM - 1:00 PM" }
        ]
      },
      "announcements": [
        { "title": "Registration Closing Soon!", "date": "2025-02-25", "description": "Register before it's too late!", "urgency": "high" },
        { "title": "Event Updates", "date": "2025-02-10", "description": "Check out the latest updates on the event page.", "urgency": "normal" }
      ],
      "people": [
        { "id": 1, "name": "John Doe", "role": "Lead Organizer", "email": "john@example.com", "phone": "+1234567890", "image": "https://randomuser.me/api/portraits/men/9.jpg", "roleType": "organizer" },
        { "id": 2, "name": "Jane Smith", "role": "Co-Organizer", "email": "jane@example.com", "phone": "+0987654321", "image": "https://randomuser.me/api/portraits/men/9.jpg", "roleType": "organizer" },
        { "id": 3, "name": "Alice Johnson", "role": "Tech Coordinator", "email": "alice@example.com", "phone": "+1122334455", "image": "https://randomuser.me/api/portraits/men/9.jpg", "roleType": "coordinator" },
        { "id": 4, "name": "Bob Williams", "role": "Logistics Coordinator", "email": "bob@example.com", "phone": "+6677889900", "image": "https://randomuser.me/api/portraits/men/9.jpg", "roleType": "coordinator" },
        { "id": 5, "name": "Charlie Brown", "role": "Volunteer", "email": "charlie@example.com", "phone": "+5566778899", "image": "https://randomuser.me/api/portraits/men/9.jpg", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "What is SDIETTechies?", "answer": "SDIETTechies is an event management platform for organizing and managing college events at SDIET." },
        { "question": "How can I register for an event?", "answer": "You can register for events through the event page by filling out the required details." },
        { "question": "Is there a fee for participating in events?", "answer": "The participation fee varies depending on the event. Please check the event details for more information." },
        { "question": "How do I become an event coordinator?", "answer": "You can apply to be an event coordinator by expressing your interest through the event registration or reaching out to the event organizers." },
        { "question": "How do I get in touch with an event organizer?", "answer": "You can find the event organizers' contact details on the 'Contact Us' page or directly through the event page." }
      ]
    },
    {
      "name": "AI Summit 2025",
      "id": 3,
      "description": "A global summit bringing together AI experts and enthusiasts.",
      "location": "San Francisco, USA",
      "date": "2025-05-20",
      "time": "09:00:00",
      "eventBanner": "https://via.placeholder.com/800x400.png?text=AI+Summit+2025",
      "participants": 300,
      "organizer": { "name": "Emily Davis", "profilePicture": "https://via.placeholder.com/120.png?text=Emily+Davis" },
      "badge": "AI",
      "logo": "https://via.placeholder.com/160x160.png?text=AI+Logo",
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
        "judgingCriteria": ["Impact", "Scalability", "Innovation"],
        "resources": { "text": "For more details, refer to the official event guidelines document.", "link": "#", "linkText": "View Full Guidelines" }
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
        { "title": "Early Bird Tickets Available!", "date": "2025-03-15", "description": "Get your tickets at discounted rates!", "urgency": "high" },
        { "title": "Event Schedule Released", "date": "2025-04-01", "description": "Check out the full event schedule now.", "urgency": "normal" }
      ],
      "people": [
        { "id": 1, "name": "Anna Lee", "role": "Event Manager", "email": "anna@example.com", "phone": "+1234567890", "image": "https://via.placeholder.com/120.png?text=Anna+Lee", "roleType": "organizer" },
        { "id": 2, "name": "Chris Brown", "role": "Technical Lead", "email": "chris@example.com", "phone": "+0987654321", "image": "https://via.placeholder.com/100.png?text=Chris+Brown", "roleType": "coordinator" },
        { "id": 3, "name": "Megan Fox", "role": "Marketing Head", "email": "megan@example.com", "phone": "+1122334455", "image": "https://via.placeholder.com/90.png?text=Megan+Fox", "roleType": "coordinator" },
        { "id": 4, "name": "John Smith", "role": "Volunteer", "email": "john.smith@example.com", "phone": "+6677889900", "image": "https://via.placeholder.com/90.png?text=John+Smith", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "What is AI Summit 2025?", "answer": "AI Summit 2025 is a global summit bringing together AI experts and enthusiasts." },
        { "question": "How can I register for the summit?", "answer": "You can register for the summit through the event page by filling out the required details." },
        { "question": "Is there a fee for participating in the summit?", "answer": "The participation fee varies depending on the event. Please check the event details for more information." },
        { "question": "How do I become a speaker at the summit?", "answer": "You can apply to be a speaker by expressing your interest through the event registration or reaching out to the event organizers." },
        { "question": "How do I get in touch with an event organizer?", "answer": "You can find the event organizers' contact details on the 'Contact Us' page or directly through the event page." }
      ]
    },
    {
      "name": "Cloud Dev 2025",
      "id": 4,
      "description": "A conference focused on cloud computing, DevOps, and modern development practices.",
      "location": "London, UK",
      "date": "2025-06-10",
      "time": "09:30:00",
      "eventBanner": "https://via.placeholder.com/800x400.png?text=Cloud+Dev+2025",
      "participants": 800,
      "organizer": { "name": "John Smith", "profilePicture": "https://via.placeholder.com/120.png?text=John+Smith" },
      "badge": "Cloud",
      "logo": "https://via.placeholder.com/160x160.png?text=Cloud+Logo",
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
        "judgingCriteria": ["Creativity", "Scalability", "Deployment Efficiency"],
        "resources": { "text": "For more details, refer to the official event guidelines document.", "link": "#", "linkText": "View Full Guidelines" }
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
        { "title": "Limited Seats Left!", "date": "2025-05-01", "description": "Seats are filling up fast, book yours now.", "urgency": "high" },
        { "title": "Workshop Registration Open", "date": "2025-04-20", "description": "Sign up for exclusive hands-on workshops.", "urgency": "normal" }
      ],
      "people": [
        { "id": 1, "name": "Sara Patel", "role": "Event Coordinator", "email": "sara@example.com", "phone": "+1234567890", "image": "https://via.placeholder.com/120.png?text=Sara+Patel", "roleType": "organizer" },
        { "id": 2, "name": "Mark Spencer", "role": "Lead Developer", "email": "mark@example.com", "phone": "+0987654321", "image": "https://via.placeholder.com/100.png?text=Mark+Spencer", "roleType": "coordinator" },
        { "id": 3, "name": "Emily Clark", "role": "Volunteer", "email": "emily@example.com", "phone": "+1122334455", "image": "https://via.placeholder.com/90.png?text=Emily+Clark", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "What is Cloud Dev 2025?", "answer": "Cloud Dev 2025 is a conference focused on cloud computing, DevOps, and modern development practices." },
        { "question": "How can I register for the conference?", "answer": "You can register for the conference through the event page by filling out the required details." },
        { "question": "Is there a fee for participating in the conference?", "answer": "The participation fee varies depending on the event. Please check the event details for more information." },
        { "question": "How do I become a speaker at the conference?", "answer": "You can apply to be a speaker by expressing your interest through the event registration or reaching out to the event organizers." },
        { "question": "How do I get in touch with an event organizer?", "answer": "You can find the event organizers' contact details on the 'Contact Us' page or directly through the event page." }
      ]
    },


     // New events
  {
    name: "Rock Concert 2025",
    location: "Mumbai, India",
    date: "2025-05-01",
    time: "18:00:00",
    description: "A live rock concert featuring top bands from around the world.",
    "badge": "Music",
    participants: 2000,
    socialLinks: { instagram: "https://instagram.com/rockconcert2025", linkedin: "https://linkedin.com/rockconcert2025" },
    aboutData: {
      title: "About the Concert",
      sections: [
        { title: "What to Expect", content: "A high-energy rock concert with performances from international and local bands." },
        { title: "Band Lineup", content: "Bands include The Rolling Stones, Queen Tribute, and others." }
      ],
      callToAction: { title: "Get Your Tickets Now!", content: "Don't miss out on the biggest concert of the year!" }
    },
    guidelinesData: {
      generalRules: [
        "No outside food or beverages allowed.",
        "Dress code: Casual.",
        "No professional cameras allowed."
      ],
      technicalGuidelines: ["Make sure your devices are fully charged before attending."],
      judgingCriteria: ["Audience engagement", "Stage presence", "Sound quality"],
      resources: { text: "View the complete concert schedule and artist details on our website.", link: "#", linkText: "View Schedule" }
    },
    scheduleData: {
      eventDate: "2025-05-01",
      eventTime: "6:00 PM - 11:00 PM",
      location: "Stadium",
      timeline: [
        { title: "Opening Act", time: "6:00 PM - 6:45 PM" },
        { title: "Main Performance", time: "7:00 PM - 10:00 PM" },
        { title: "Encore", time: "10:15 PM - 11:00 PM" }
      ]
    },
    announcements: [
      { title: "Tickets Now Available", date: "2025-03-20", description: "Get your tickets now before they're sold out!", urgency: "high" }
    ],
    people: [
      { id: 1, name: "Alice Cooper", role: "Event Organizer", email: "alice@concert.com", phone: "+1234567890", image: "https://randomuser.me/api/portraits/men/9.jpg", roleType: "organizer" },
      { id: 2, name: "John Lennon", role: "Band Coordinator", email: "john@concert.com", phone: "+9876543210", image: "https://randomuser.me/api/portraits/men/10.jpg", roleType: "coordinator" }
    ],
    faqData: [
      { question: "Where can I buy tickets?", answer: "Tickets are available on our official website." },
      { question: "Is parking available?", answer: "Yes, parking is available at the venue." }
    ]
  },
  {
    name: "Classical Dance Performance",
    location: "Delhi, India",
    date: "2025-06-05",
    time: "19:00:00",
    description: "A stunning performance of traditional Indian classical dance by renowned artists.",
    participants: 300,
    "badge": "Dance",
    socialLinks: { instagram: "https://instagram.com/classicaldance2025", linkedin: "https://linkedin.com/classicaldance2025" },
    aboutData: {
      title: "About the Performance",
      sections: [
        { title: "Event Highlights", content: "Experience the grace of Bharatanatyam, Kathak, and Odissi dances performed by world-class dancers." },
        { title: "Artists", content: "Performances by famous classical dancers such as Rukmini Vijayakumar and Shovana Narayan." }
      ],
      callToAction: { title: "Book Your Seats Now!", content: "Don't miss the mesmerizing classical dance performances!" }
    },
    guidelinesData: {
      generalRules: [
        "Wear comfortable attire.",
        "No photography or videography during the performance.",
        "Arrive at least 30 minutes before the event starts."
      ],
      technicalGuidelines: ["Ensure your mobile phone is on silent mode."],
      judgingCriteria: ["Precision", "Grace", "Artistry"],
      resources: { text: "Learn more about classical dance traditions on our website.", link: "#", linkText: "Learn More" }
    },
    scheduleData: {
      eventDate: "2025-06-05",
      eventTime: "7:00 PM - 9:00 PM",
      location: "Cultural Center",
      timeline: [
        { title: "Opening Remarks", time: "7:00 PM - 7:10 PM" },
        { title: "Bharatanatyam Performance", time: "7:15 PM - 7:45 PM" },
        { title: "Kathak Performance", time: "7:50 PM - 8:20 PM" },
        { title: "Odissi Performance", time: "8:25 PM - 8:55 PM" }
      ]
    },
    announcements: [
      { title: "Early Bird Tickets", date: "2025-04-10", description: "Book now to avail 20% off on early bird tickets!", urgency: "normal" }
    ],
    people: [
      { id: 1, name: "Vidya Balan", role: "Event Organizer", email: "vidya@dance.com", phone: "+1234567890", image: "https://randomuser.me/api/portraits/women/11.jpg", roleType: "organizer" },
      { id: 2, name: "Deepa Mehta", role: "Cultural Coordinator", email: "deepa@dance.com", phone: "+9876543210", image: "https://randomuser.me/api/portraits/women/12.jpg", roleType: "coordinator" }
    ],
    faqData: [
      { question: "What should I wear?", answer: "We recommend semi-formal attire to match the event’s ambiance." },
      { question: "Is food available?", answer: "Yes, refreshments will be available at the venue." }
    ]
  },
  {
    name: "Basketball Championship",
    location: "Chennai, India",
    date: "2025-07-15",
    time: "16:00:00",
    description: "The biggest basketball championship featuring teams from across the country.",
    participants: 500,
    "badge": "Sports",
    socialLinks: { instagram: "https://instagram.com/basketballchampionship2025", linkedin: "https://linkedin.com/basketballchampionship2025" },
    aboutData: {
      title: "About the Championship",
      sections: [
        { title: "Event Overview", content: "A nationwide championship featuring the top basketball teams." },
        { title: "Teams Participating", content: "Teams from all major colleges and clubs will compete." }
      ],
      callToAction: { title: "Get Your Tickets!", content: "Cheer for your favorite team at the basketball championship!" }
    },
    guidelinesData: {
      generalRules: [
        "No personal items allowed on the court.",
        "Teams must follow the official basketball rules."
      ],
      technicalGuidelines: ["Wear proper sports attire and shoes."],
      judgingCriteria: ["Teamwork", "Skill", "Sportsmanship"],
      resources: { text: "Check out the championship rules and regulations on the event page.", link: "#", linkText: "View Rules" }
    },
    scheduleData: {
      eventDate: "2025-07-15",
      eventTime: "4:00 PM - 9:00 PM",
      location: "Sports Arena",
      timeline: [
        { title: "Match 1", time: "4:00 PM - 5:30 PM" },
        { title: "Match 2", time: "5:45 PM - 7:15 PM" },
        { title: "Finals", time: "8:00 PM - 9:00 PM" }
      ]
    },
    announcements: [
      { title: "Ticket Sales Open", date: "2025-06-01", description: "Get your tickets before they sell out!", urgency: "high" }
    ],
    people: [
      { id: 1, name: "Rajesh Kumar", role: "Event Coordinator", email: "rajesh@basketball.com", phone: "+1234567890", image: "https://randomuser.me/api/portraits/men/13.jpg", roleType: "coordinator" },
      { id: 2, name: "Priya Rani", role: "Volunteer Coordinator", email: "priya@basketball.com", phone: "+9876543210", image: "https://randomuser.me/api/portraits/women/14.jpg", roleType: "coordinator" }
    ],
    faqData: [
      { question: "Can I bring my own basketball?", answer: "No, all players must use the official event basketballs." },
      { question: "Where can I watch the matches?", answer: "Matches will be streamed live on our YouTube channel." }
    ]
  },
  {
    name: "Fashion Show Extravaganza",
    location: "Kolkata, India",
    date: "2025-08-10",
    time: "19:30:00",
    description: "A grand fashion show showcasing the latest trends by top designers.",
    participants: 1000,
    badge: "Fashion",
    socialLinks: { instagram: "https://instagram.com/fashionshow2025", linkedin: "https://linkedin.com/fashionshow2025" },
    aboutData: {
      title: "About the Show",
      sections: [
        { title: "Fashion Trends", content: "The latest trends in fashion, from haute couture to streetwear." },
        { title: "Featured Designers", content: "Designers from around the world will showcase their creations." }
      ],
      callToAction: { title: "Reserve Your Seat!", content: "Witness fashion at its finest at our exclusive show!" }
    },
    guidelinesData: {
      generalRules: [
        "No photography allowed during the runway show.",
        "Dress code: Formal attire.",
        "VIP guests will have priority seating."
      ],
      technicalGuidelines: ["Stay seated during the show. No standing in the aisles."],
      judgingCriteria: ["Design", "Creativity", "Execution"],
      resources: { text: "Learn more about the designers and their collections on the event website.", link: "#", linkText: "Discover Designers" }
    },
    scheduleData: {
      eventDate: "2025-08-10",
      eventTime: "7:30 PM - 10:30 PM",
      location: "Grand Ballroom",
      timeline: [
        { title: "Opening Remarks", time: "7:30 PM - 7:45 PM" },
        { title: "Runway Show", time: "8:00 PM - 9:30 PM" },
        { title: "Closing Ceremony", time: "9:30 PM - 10:00 PM" }
      ]
    },
    announcements: [
      { title: "VIP Tickets Available", date: "2025-06-01", description: "VIP tickets provide exclusive seating and meet-and-greet with designers.", urgency: "normal" }
    ],
    people: [
      { id: 1, name: "Siddharth Roy", role: "Event Organizer", email: "siddharth@fashion.com", phone: "+1234567890", image: "https://randomuser.me/api/portraits/men/15.jpg", roleType: "organizer" },
      { id: 2, name: "Ananya Singh", role: "Designer Coordinator", email: "ananya@fashion.com", phone: "+9876543210", image: "https://randomuser.me/api/portraits/women/16.jpg", roleType: "coordinator" }
    ],
    faqData: [
      { question: "Can I purchase outfits from the show?", answer: "Yes, some outfits will be available for purchase after the show." },
      { question: "Are there any discounts for students?", answer: "Yes, students can avail 15% discount on general tickets." }
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
