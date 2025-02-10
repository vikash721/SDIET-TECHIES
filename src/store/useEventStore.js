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
      "name": "Health & Wellness Summit 2025",
      "id": 3,
      "description": "A summit focusing on health, wellness, and fitness trends.",
      "location": "San Francisco, USA",
      "date": "2025-04-20",
      "time": "09:00:00",
      "eventBanner": "https://example.com/health_summit.jpg",
      "participants": 300,
      "organizer": { "name": "Emma Green", "profilePicture": "https://via.placeholder.com/120.png?text=Emma+Green" },
      "badge": "Health",
      "logo": "https://example.com/health_logo.png",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Summit",
        "sections": [
          { "title": "Summit Overview", "content": "Learn about the latest trends in health and wellness." },
          { "title": "Featured Speakers", "content": "Meet the experts in health and fitness." }
        ],
        "callToAction": { "title": "Sign Up Now!", "content": "Don't miss this opportunity to enhance your wellness journey. Register today!" }
      },
      "guidelinesData": {
        "generalRules": [
          "Participants must register in advance.",
          "Follow the event schedule strictly.",
          "No outside food or drinks allowed."
        ],
        "technicalGuidelines": ["Adhere to the event's code of conduct.", "Use eco-friendly products."],
        "judgingCriteria": ["Engagement", "Content Quality", "Practical Application"],
        "resources": { "text": "Explore wellness resources and tips.", "link": "#", "linkText": "Discover More" }
      },
      "scheduleData": {
        "eventDate": "2025-04-20",
        "eventTime": "09:00 AM - 5:00 PM",
        "location": "Conference Center, San Francisco",
        "timeline": [
          { "title": "Welcome Remarks", "time": "09:00 AM - 09:30 AM" },
          { "title": "Keynote Address", "time": "09:30 AM - 10:30 AM" },
          { "title": "Panel Discussion", "time": "10:30 AM - 12:00 PM" }
        ]
      },
      "announcements": [
        { "title": "Early Bird Registration Ends Soon!", "date": "2025-03-30", "description": "Take advantage of early bird discounts.", "urgency": "high" },
        { "title": "Agenda Released", "date": "2025-03-15", "description": "Check out the full summit agenda.", "urgency": "normal" }
      ],
      "people": [
        { "id": 6, "name": "Olivia Brown", "role": "Event Manager", "email": "olivia@example.com", "phone": "+1234567890", "image": "https://randomuser.me/api/portraits/women/1.jpg", "roleType": "organizer" },
        { "id": 7, "name": "Liam White", "role": "Assistant Manager", "email": "liam@example.com", "phone": "+0987654321", "image": "https://randomuser.me/api/portraits/men/1.jpg", "roleType": "organizer" },
        { "id": 8, "name": "Sophia Johnson", "role": "Fitness Expert", "email": "sophia@example.com", "phone": "+1122334455", "image": "https://randomuser.me/api/portraits/women/2.jpg", "roleType": "coordinator" },
        { "id": 9, "name": "Mason Williams", "role": "Nutritionist", "email": "mason@example.com", "phone": "+6677889900", "image": "https://randomuser.me/api/portraits/men/2.jpg", "roleType": "coordinator" },
        { "id": 10, "name": "Ava Taylor", "role": "Volunteer", "email": "ava@example.com", "phone": "+5566778899", "image": "https://randomuser.me/api/portraits/women/3.jpg", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "What is the Health & Wellness Summit?", "answer": "The Health & Wellness Summit is an event dedicated to promoting health, wellness, and fitness." },
        { "question": "How can I register for the summit?", "answer": "You can register for the summit through the event page by filling out the registration form." },
        { "question": "Is there a fee for attending the summit?", "answer": "Yes, there is a registration fee. Please check the event details for more information." },
        { "question": "Can I participate as a speaker?", "answer": "Yes, you can apply to be a speaker by contacting the event organizers." },
        { "question": "How do I contact the event organizers?", "answer": "You can find the organizers' contact details on the 'Contact Us' page or through the event page." }
      ]
    },
    {
      "name": "Startup Pitch Fest 2025",
      "id": 4,
      "description": "A platform for startups to pitch their ideas to investors and industry leaders.",
      "location": "Berlin, Germany",
      "date": "2025-05-10",
      "time": "11:00:00",
      "eventBanner": "https://example.com/startup_pitch.jpg",
      "participants": 200,
      "organizer": { "name": "Noah Lee", "profilePicture": "https://via.placeholder.com/120.png?text=Noah+Lee" },
      "badge": "Startup",
      "logo": "https://example.com/startup_logo.png",
      "socialLinks": { "instagram": "https://instagram.com", "linkedin": "https://linkedin.com" },
      "aboutData": {
        "title": "About the Pitch Fest",
        "sections": [
          { "title": "Event Purpose", "content": "Connecting startups with potential investors and mentors." },
          { "title": "Keynote Speakers", "content": "Prominent industry leaders sharing their insights." }
        ],
        "callToAction": { "title": "Apply Now!", "content": "Don't miss this opportunity to showcase your startup. Apply today!" }
      },
      "guidelinesData": {
        "generalRules": [
          "Startups must apply and be selected to pitch.",
          "Each pitch should not exceed 10 minutes.",
          "Follow the event's code of conduct."
        ],
        "technicalGuidelines": ["Prepare a professional pitch deck.", "Ensure your presentation is within the time limit."],
        "judgingCriteria": ["Innovation", "Market Potential", "Team Strength"],
        "resources": { "text": "Resources for preparing your pitch will be provided.", "link": "#", "linkText": "Learn More" }
      },
      "scheduleData": {
        "eventDate": "2025-05-10",
        "eventTime": "11:00 AM - 6:00 PM",
        "location": "Startup Hub, Berlin",
        "timeline": [
          { "title": "Registration & Networking", "time": "11:00 AM - 12:00 PM" },
          { "title": "Opening Remarks", "time": "12:00 PM - 12:30 PM" },
          { "title": "Startup Pitches", "time": "12:30 PM - 3:00 PM" }
        ]
      },
      "announcements": [
        { "title": "Application Deadline Approaching!", "date": "2025-04-20", "description": "Submit your application before the deadline.", "urgency": "high" },
        { "title": "Event Schedule Released", "date": "2025-04-15", "description": "Check out the detailed event schedule.", "urgency": "normal" }
      ],
      "people": [
        { "id": 11, "name": "Lucas Martin", "role": "Event Director", "email": "lucas@example.com", "phone": "+1234567890", "image": "https://randomuser.me/api/portraits/men/3.jpg", "roleType": "organizer" },
        { "id": 12, "name": "Mia Williams", "role": "Assistant Director", "email": "mia@example.com", "phone": "+0987654321", "image": "https://randomuser.me/api/portraits/women/4.jpg", "roleType": "organizer" },
        { "id": 13, "name": "Henry Brown", "role": "Pitch Coach", "email": "henry@example.com", "phone": "+1122334455", "image": "https://randomuser.me/api/portraits/men/4.jpg", "roleType": "coordinator" },
        { "id": 14, "name": "Emily Davis", "role": "Logistics Manager", "email": "emily@example.com", "phone": "+6677889900", "image": "https://randomuser.me/api/portraits/women/5.jpg", "roleType": "coordinator" },
        { "id": 15, "name": "Daniel Wilson", "role": "Volunteer", "email": "daniel@example.com", "phone": "+5566778899", "image": "https://randomuser.me/api/portraits/men/5.jpg", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "What is Startup Pitch Fest?", "answer": "Startup Pitch Fest is an event where startups can pitch their ideas to investors and industry leaders." },
        { "question": "How can I apply to pitch?", "answer": "You can apply to pitch through the event page by submitting your application." },
        { "question": "Is there a fee for pitching?", "answer": "There is no fee for selected startups to pitch. However, application fees may apply." },
        { "question": "How do I become a mentor?", "answer": "You can apply to be a mentor by contacting the event organizers." },
        { "question": "How do I get in touch with the event organizers?", "answer": "You can find the organizers' contact details on the 'Contact Us' page or through the event page." }
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
