import { create } from 'zustand';

const useEventStore = create((set) => ({
  events: [
    {
      "name": "Tech Conference 2025",
      "id": 1,
      "description": "Annual technology conference covering AI, Cloud, and DevOps.",
      "location": "New Delhi, India",
      "date": "2025-03-15",
      "time": "10:00:00",
      "eventBanner": "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "participants": 500,
      "organizer": {
        "name": "Aleni Doe",
        "profilePicture": "https://randomuser.me/api/portraits/women/21.jpg"
      },
      "badge": "Tech",
      "logo": "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "socialLinks": {
        "instagram": "https://instagram.com",
        "linkedin": "https://linkedin.com"
      },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          {
            "title": "What is This Event?",
            "content": "Details about the event, including its importance and goals."
          },
          {
            "title": "Keynote Speakers",
            "content": "Information about keynote speakers and their topics."
          }
        ],
        "callToAction": {
          "title": "Register Now!",
          "content": "Join us for an unforgettable experience. Register today!"
        }
      },
      "guidelinesData": {
        "generalRules": [
          "Participants must be registered by the deadline.",
          "Each team can have a maximum of 5 members.",
          "Late entries will not be accepted."
        ],
        "technicalGuidelines": [
          "Follow all event submission guidelines.",
          "Use permitted resources only."
        ],
        "judgingCriteria": ["Innovation", "Presentation", "Technical Implementation"],
        "resources": {
          "text": "Additional resources and references will be provided during the event.",
          "link": "#",
          "linkText": "Learn More"
        }
      },
      "scheduleData": {
        "eventDate": "2025-03-15",
        "eventTime": "10:00 AM - 5:00 PM",
        "location": "Venue Details Here",
        "timeline": [
          {
            "title": "Opening Ceremony",
            "time": "10:00 AM - 10:30 AM"
          },
          {
            "title": "Keynote Speech",
            "time": "10:30 AM - 11:30 AM"
          },
          {
            "title": "Workshops",
            "time": "11:30 AM - 1:00 PM"
          }
        ]
      },
      "announcements": [
        {
          "title": "Registration Closing Soon!",
          "date": "2025-02-25",
          "description": "Register before it's too late!",
          "urgency": "high"
        },
        {
          "title": "Event Updates",
          "date": "2025-02-10",
          "description": "Check out the latest updates on the event page.",
          "urgency": "normal"
        }
      ],
      "people": [
        {
          "id": 1,
          "name": "John Doe",
          "role": "Lead Organizer",
          "email": "john@example.com",
          "phone": "+1234567890",
          "image": "https://randomuser.me/api/portraits/men/32.jpg",
          "roleType": "organizer"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "role": "Co-Organizer",
          "email": "jane@example.com",
          "phone": "+0987654321",
          "image": "https://randomuser.me/api/portraits/women/36.jpg",
          "roleType": "organizer"
        },
        {
          "id": 3,
          "name": "Alice Johnson",
          "role": "Tech Coordinator",
          "email": "alice@example.com",
          "phone": "+1122334455",
          "image": "https://randomuser.me/api/portraits/women/45.jpg",
          "roleType": "coordinator"
        },
        {
          "id": 4,
          "name": "Bob Williams",
          "role": "Logistics Coordinator",
          "email": "bob@example.com",
          "phone": "+6677889900",
          "image": "https://randomuser.me/api/portraits/men/41.jpg",
          "roleType": "coordinator"
        },
        {
          "id": 5,
          "name": "Charlie Brown",
          "role": "Volunteer",
          "email": "charlie@example.com",
          "phone": "+5566778899",
          "image": "https://randomuser.me/api/portraits/men/48.jpg",
          "roleType": "volunteer"
        }
      ],
      "faqData": [
        {
          "question": "What is SDIETTechies?",
          "answer": "SDIETTechies is an event management platform for organizing and managing college events at SDIET."
        },
        {
          "question": "How can I register for an event?",
          "answer": "You can register for events through the event page by filling out the required details."
        },
        {
          "question": "Is there a fee for participating in events?",
          "answer": "The participation fee varies depending on the event. Please check the event details for more information."
        },
        {
          "question": "How do I become an event coordinator?",
          "answer": "You can apply to be an event coordinator by expressing your interest through the event registration or reaching out to the event organizers."
        },
        {
          "question": "How do I get in touch with an event organizer?",
          "answer": "You can find the event organizers' contact details on the 'Contact Us' page or directly through the event page."
        }
      ]
    },
    
   






     // New events


     {
      "name": "Tech Innovators Meetup 2025",
      "id": 2,
      "description": "A meetup for tech enthusiasts to discuss the latest innovations in technology.",
      "location": "Bangalore, India",
      "date": "2025-04-10",
      "time": "09:00:00",
      "eventBanner": "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "participants": 150,
      "organizer": {
        "name": "Rahul Verma",
        "profilePicture": "https://randomuser.me/api/portraits/men/1.jpg"
      },
      "badge": "Technology",
      "logo": "https://images.pexels.com/photos/10538542/pexels-photo-10538542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "socialLinks": {
        "instagram": "https://instagram.com/techinnovators",
        "linkedin": "https://linkedin.com/company/techinnovators"
      },
      "aboutData": {
        "title": "About the Event",
        "sections": [
          {
            "title": "Event Overview",
            "content": "Join us to explore the latest trends and innovations in the tech industry."
          },
          {
            "title": "Featured Speakers",
            "content": "Industry leaders will share their insights on emerging technologies."
          }
        ],
        "callToAction": {
          "title": "Join Us!",
          "content": "Be a part of the future of technology. Register now!"
        }
      },
      "guidelinesData": {
        "generalRules": [
          "Registration is mandatory for all participants.",
          "Please carry a valid ID proof.",
          "Maintain decorum during sessions."
        ],
        "technicalGuidelines": [
          "Ensure your devices are fully charged.",
          "Adhere to the event's code of conduct."
        ],
        "judgingCriteria": [
          "Innovation",
          "Feasibility",
          "Presentation"
        ],
        "resources": {
          "text": "Access the event schedule and resources here.",
          "link": "#",
          "linkText": "Event Resources"
        }
      },
      "scheduleData": {
        "eventDate": "2025-04-10",
        "eventTime": "09:00 AM - 5:00 PM",
        "location": "Tech Park Auditorium",
        "timeline": [
          {
            "title": "Registration",
            "time": "09:00 AM - 10:00 AM"
          },
          {
            "title": "Keynote Address",
            "time": "10:00 AM - 11:00 AM"
          },
          {
            "title": "Panel Discussion",
            "time": "11:15 AM - 12:30 PM"
          }
        ]
      },
      "announcements": [
        {
          "title": "Early Bird Registration Open!",
          "date": "2025-03-01",
          "description": "Register early to avail discounts.",
          "urgency": "high"
        },
        {
          "title": "Speaker Lineup Announced",
          "date": "2025-03-15",
          "description": "Check out the list of speakers for the event.",
          "urgency": "normal"
        }
      ],
      "people": [
        {
          "id": 1,
          "name": "Anita Sharma",
          "role": "Event Coordinator",
          "email": "anita@example.com",
          "phone": "+911234567890",
          "image": "https://randomuser.me/api/portraits/women/1.jpg",
          "roleType": "organizer"
        },
        {
          "id": 2,
          "name": "Vikram Singh",
          "role": "Technical Lead",
          "email": "vikram@example.com",
          "phone": "+919876543210",
          "image": "https://randomuser.me/api/portraits/men/2.jpg",
          "roleType": "coordinator"
        },
        {
          "id": 3,
          "name": "Priya Desai",
          "role": "Volunteer",
          "email": "priya@example.com",
          "phone": "+911122334455",
          "image": "https://randomuser.me/api/portraits/women/2.jpg",
          "roleType": "volunteer"
        }
      ],
      "faqData": [
        {
          "question": "What is the Tech Innovators Meetup?",
          "answer": "It's a gathering for technology enthusiasts to discuss and learn about the latest innovations."
        },
        {
          "question": "How can I register?",
          "answer": "Visit our official website and fill out the registration form."
        },
        {
          "question": "Is there a participation fee?",
          "answer": "Yes, please refer to the event details for fee information."
        },
        {
          "question": "Can I volunteer for the event?",
          "answer": "Yes, reach out to the organizers through the contact details provided."
        },
        {
          "question": "How do I contact the organizers?",
          "answer": "You can email us at info@techinnovators.com or call us at +911234567890."
        }
      ]
    },

    {
      "name": "Sunset Music Festival 2025",
      "id": 3,
      "description": "Experience an unforgettable night of live music with top artists from around the world.",
      "location": "Goa, India",
      "date": "2025-12-15",
      "time": "18:00:00",
      "eventBanner": "https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg",
      "participants": 5000,
      "organizer": {
        "name": "Aarav Kapoor",
        "profilePicture": "https://randomuser.me/api/portraits/men/4.jpg"
      },
      "badge": "Music",
      "logo": "https://images.pexels.com/photos/1267317/pexels-photo-1267317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "socialLinks": {
        "instagram": "https://instagram.com/sunsetfest",
        "linkedin": "https://linkedin.com/company/sunsetfest"
      },
      "aboutData": {
        "title": "About the Festival",
        "sections": [
          {
            "title": "Event Highlights",
            "content": "Enjoy electrifying performances from top DJs and bands at the scenic beaches of Goa."
          },
          {
            "title": "Food & Drinks",
            "content": "Delight in a variety of food trucks and beverage stalls throughout the festival."
          }
        ],
        "callToAction": {
          "title": "Get Your Tickets Now!",
          "content": "Don't miss the biggest music festival of the year. Book your spot today!"
        }
      },
      "guidelinesData": {
        "generalRules": [
          "Entry is restricted to attendees aged 18 and above.",
          "Outside food and beverages are not allowed.",
          "Follow the event staff's instructions at all times."
        ],
        "technicalGuidelines": [
          "Bring ear protection if needed.",
          "Wear comfortable shoes for dancing."
        ],
        "judgingCriteria": [],
        "resources": {
          "text": "Check the lineup and festival map here.",
          "link": "#",
          "linkText": "Festival Guide"
        }
      },
      "scheduleData": {
        "eventDate": "2025-12-15",
        "eventTime": "6:00 PM - 2:00 AM",
        "location": "Goa Beach Arena",
        "timeline": [
          {
            "title": "Gates Open",
            "time": "6:00 PM"
          },
          {
            "title": "Opening DJ Set",
            "time": "7:00 PM"
          },
          {
            "title": "Main Performance",
            "time": "9:00 PM"
          },
          {
            "title": "Afterparty",
            "time": "12:00 AM"
          }
        ]
      },
      "announcements": [
        {
          "title": "Early Bird Tickets Available!",
          "date": "2025-10-01",
          "description": "Get discounted tickets before they sell out!",
          "urgency": "high"
        },
        {
          "title": "Official Lineup Released!",
          "date": "2025-11-01",
          "description": "Check out the list of artists performing at the festival.",
          "urgency": "normal"
        }
      ],
      "people": [
        {
          "id": 1,
          "name": "Meera Joshi",
          "role": "Festival Director",
          "email": "meera@example.com",
          "phone": "+911122334455",
          "image": "https://randomuser.me/api/portraits/women/3.jpg",
          "roleType": "organizer"
        },
        {
          "id": 2,
          "name": "Rohan Malhotra",
          "role": "Stage Manager",
          "email": "rohan@example.com",
          "phone": "+919876543210",
          "image": "https://randomuser.me/api/portraits/men/5.jpg",
          "roleType": "coordinator"
        },
        {
          "id": 3,
          "name": "Sanya Gupta",
          "role": "Volunteer",
          "email": "sanya@example.com",
          "phone": "+911234567890",
          "image": "https://randomuser.me/api/portraits/women/4.jpg",
          "roleType": "volunteer"
        }
      ],
      "faqData": [
        {
          "question": "What time does the festival start?",
          "answer": "The gates open at 6:00 PM, and the event runs until 2:00 AM."
        },
        {
          "question": "Can I bring my own drinks?",
          "answer": "No, outside food and beverages are not allowed. There will be plenty of stalls available."
        },
        {
          "question": "Are refunds available?",
          "answer": "Tickets are non-refundable but can be transferred to another person."
        },
        {
          "question": "Is there parking available?",
          "answer": "Yes, paid parking is available near the venue."
        },
        {
          "question": "How can I contact the organizers?",
          "answer": "You can email us at info@sunsetfest.com or call us at +911234567890."
        }
      ]
    },

    {
      "name": "InnovateX 2025",
      "id": 6,
      "description": "A premier tech conference bringing together innovators, developers, and industry leaders to discuss the future of technology.",
      "location": "Bangalore International Convention Centre, India",
      "date": "2025-11-10",
      "time": "09:00:00",
      "eventBanner": "https://www.brightidea.com/wp-content/uploads/Who_Participates_in_a_Hackathon.png",
      "participants": 2000,
      "organizer": {
        "name": "Dr. Rajesh Kumar",
        "profilePicture": "https://randomuser.me/api/portraits/men/6.jpg"
      },
      "badge": "Technology",
      "logo": "https://ieee-dataport.org/sites/default/files/Hackathonimage_3.png",
      "socialLinks": {
        "instagram": "https://instagram.com/innovatex2025",
        "linkedin": "https://linkedin.com/company/innovatex"
      },
      "aboutData": {
        "title": "About InnovateX 2025",
        "sections": [
          {
            "title": "Conference Theme",
            "content": "Exploring the latest advancements in AI, Blockchain, and Cloud Computing with keynotes from industry pioneers."
          },
          {
            "title": "Workshops & Networking",
            "content": "Hands-on sessions led by experts and networking opportunities with industry professionals."
          }
        ],
        "callToAction": {
          "title": "Register Now!",
          "content": "Secure your spot at the most anticipated tech conference of the year!"
        }
      },
      "guidelinesData": {
        "generalRules": [
          "All attendees must carry a valid ID for entry.",
          "Photography and recording are restricted in certain sessions.",
          "Respect the privacy and opinions of fellow attendees."
        ],
        "technicalGuidelines": [
          "Bring your own laptop for hands-on workshops.",
          "Ensure you have a stable internet connection for virtual sessions."
        ],
        "judgingCriteria": [],
        "resources": {
          "text": "View the full schedule and speaker list here.",
          "link": "#",
          "linkText": "Conference Guide"
        }
      },
      "scheduleData": {
        "eventDate": "2025-11-10",
        "eventTime": "9:00 AM - 6:00 PM",
        "location": "Bangalore International Convention Centre",
        "timeline": [
          {
            "title": "Registration & Breakfast",
            "time": "9:00 AM"
          },
          {
            "title": "Keynote: The Future of AI",
            "time": "10:00 AM"
          },
          {
            "title": "Panel Discussion: Blockchain Innovations",
            "time": "11:30 AM"
          },
          {
            "title": "Lunch Break",
            "time": "1:00 PM"
          },
          {
            "title": "Hands-on Workshop: Cloud Security",
            "time": "2:30 PM"
          },
          {
            "title": "Closing Remarks & Networking",
            "time": "5:00 PM"
          }
        ]
      },
      "announcements": [
        {
          "title": "Early Bird Registrations Open!",
          "date": "2025-08-01",
          "description": "Get a 20% discount on conference passes before September 30th!",
          "urgency": "high"
        },
        {
          "title": "Speaker Lineup Revealed!",
          "date": "2025-09-15",
          "description": "Meet the tech leaders who will be sharing their insights at InnovateX 2025.",
          "urgency": "normal"
        }
      ],
      "people": [
        {
          "id": 1,
          "name": "Anita Sharma",
          "role": "Conference Director",
          "email": "anita@example.com",
          "phone": "+911122334466",
          "image": "https://randomuser.me/api/portraits/women/5.jpg",
          "roleType": "organizer"
        },
        {
          "id": 2,
          "name": "Vikram Mehta",
          "role": "Technical Lead",
          "email": "vikram@example.com",
          "phone": "+919876543211",
          "image": "https://randomuser.me/api/portraits/men/7.jpg",
          "roleType": "coordinator"
        },
        {
          "id": 3,
          "name": "Pooja Verma",
          "role": "Volunteer Coordinator",
          "email": "pooja@example.com",
          "phone": "+911234567891",
          "image": "https://randomuser.me/api/portraits/women/6.jpg",
          "roleType": "volunteer"
        }
      ],
      "faqData": [
        {
          "question": "Is the event hybrid?",
          "answer": "Yes, you can attend both in person and virtually."
        },
        {
          "question": "Will recordings be available?",
          "answer": "Yes, recordings will be available for registered attendees after the event."
        },
        {
          "question": "Are there group discounts?",
          "answer": "Yes, group discounts are available for teams of 5 or more."
        },
        {
          "question": "What is the dress code?",
          "answer": "Smart casual or business attire is recommended."
        },
        {
          "question": "How can I contact the organizers?",
          "answer": "You can email us at contact@innovatex.com or call us at +911234567891."
        }
      ]
    },

    {
      "name": "National Sports Championship 2025",
      "id": 5,
      "description": "A national-level sports championship featuring multiple disciplines including football, basketball, and athletics.",
      "location": "Mumbai, India",
      "date": "2025-04-10",
      "time": "09:00:00",
      "eventBanner": "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "participants": 1000,
      "organizer": { 
        "name": "Rahul Mehta", 
        "profilePicture": "https://randomuser.me/api/portraits/men/10.jpg" 
      },
      "badge": "Sports",
      "logo": "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "socialLinks": { 
        "instagram": "https://instagram.com", 
        "linkedin": "https://linkedin.com" 
      },
      "aboutData": {
        "title": "About the Championship",
        "sections": [
          { "title": "What is This Event?", "content": "A prestigious multi-sport championship bringing together athletes from across the country." },
          { "title": "Sports Categories", "content": "Includes football, basketball, athletics, and more." }
        ],
        "callToAction": { 
          "title": "Join the Competition!", 
          "content": "Register now and compete with the best!" 
        }
      },
      "guidelinesData": {
        "generalRules": [
          "All participants must carry a valid ID proof.",
          "Sports kits and equipment will be provided as per event rules.",
          "Team registrations must be completed before the deadline."
        ],
        "technicalGuidelines": [
          "Athletes must adhere to the standard game rules of respective sports.",
          "Anti-doping measures will be strictly enforced."
        ],
        "judgingCriteria": ["Performance", "Teamwork", "Discipline"],
        "resources": { 
          "text": "Official rulebooks and guidelines available.", 
          "link": "#", 
          "linkText": "Learn More" 
        }
      },
      "scheduleData": {
        "eventDate": "2025-04-10",
        "eventTime": "09:00 AM - 6:00 PM",
        "location": "National Sports Complex, Mumbai",
        "timeline": [
          { "title": "Opening Ceremony", "time": "09:00 AM - 10:00 AM" },
          { "title": "Football Quarterfinals", "time": "10:00 AM - 12:00 PM" },
          { "title": "Athletics Finals", "time": "02:00 PM - 04:00 PM" }
        ]
      },
      "announcements": [
        { 
          "title": "Final Registration Deadline", 
          "date": "2025-03-20", 
          "description": "Make sure to register before the deadline!", 
          "urgency": "high" 
        },
        { 
          "title": "Venue Change Alert", 
          "date": "2025-03-15", 
          "description": "The event will now be held at National Sports Complex, Mumbai.", 
          "urgency": "normal" 
        }
      ],
      "people": [
        { "id": 1, "name": "Rahul Mehta", "role": "Event Director", "email": "rahul@example.com", "phone": "+919876543210", "image": "https://randomuser.me/api/portraits/men/11.jpg", "roleType": "organizer" },
        { "id": 2, "name": "Ananya Sharma", "role": "Sports Coordinator", "email": "ananya@example.com", "phone": "+919812345678", "image": "https://randomuser.me/api/portraits/women/12.jpg", "roleType": "coordinator" },
        { "id": 3, "name": "Vikram Patel", "role": "Logistics Head", "email": "vikram@example.com", "phone": "+919876123456", "image": "https://randomuser.me/api/portraits/men/13.jpg", "roleType": "coordinator" },
        { "id": 4, "name": "Riya Kapoor", "role": "Volunteer", "email": "riya@example.com", "phone": "+919832165478", "image": "https://randomuser.me/api/portraits/women/14.jpg", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "How can I participate?", "answer": "You can register on our official event page before the deadline." },
        { "question": "What sports are included?", "answer": "Football, Basketball, Athletics, and more." },
        { "question": "Is there an entry fee?", "answer": "Entry fees vary by sport. Check the event details for specifics." },
        { "question": "How do I contact the organizers?", "answer": "You can reach out via email or phone as listed in the contact section." }
      ]
    },

    {
      "name": "Infinity Fest 2025",
      "id": 4,
      "description": "A grand college fest featuring cultural, technical, and entertainment events.",
      "location": "SDIET College, Faridabad, India",
      "date": "2025-04-20",
      "time": "10:00:00",
      "eventBanner": "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "participants": 2000,
      "organizer": { 
        "name": "Aryan Verma", 
        "profilePicture": "https://randomuser.me/api/portraits/men/15.jpg" 
      },
      "badge": "Fest",
      "logo": "https://images.pexels.com/photos/976863/pexels-photo-976863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "socialLinks": { 
        "instagram": "https://instagram.com", 
        "linkedin": "https://linkedin.com" 
      },
      "aboutData": {
        "title": "About Infinity Fest",
        "sections": [
          { "title": "What is Infinity Fest?", "content": "A vibrant annual college festival featuring music, dance, technical competitions, and cultural events." },
          { "title": "Star Performers", "content": "Celebrity artists and DJs will be performing live!" }
        ],
        "callToAction": { 
          "title": "Join the Celebration!", 
          "content": "Be part of the biggest college fest. Register now!" 
        }
      },
      "guidelinesData": {
        "generalRules": [
          "Entry is allowed only for registered participants.",
          "College ID cards are mandatory for entry.",
          "Outside food and beverages are not allowed."
        ],
        "technicalGuidelines": [
          "Follow the rules for individual competitions.",
          "Technical events have specific registration deadlines."
        ],
        "judgingCriteria": ["Creativity", "Performance", "Audience Engagement"],
        "resources": { 
          "text": "Download the official event guide for details.", 
          "link": "#", 
          "linkText": "Learn More" 
        }
      },
      "scheduleData": {
        "eventDate": "2025-04-20",
        "eventTime": "10:00 AM - 11:00 PM",
        "location": "SDIET College Campus",
        "timeline": [
          { "title": "Inauguration Ceremony", "time": "10:00 AM - 11:00 AM" },
          { "title": "Battle of Bands", "time": "12:00 PM - 02:00 PM" },
          { "title": "Dance Competition", "time": "03:00 PM - 05:00 PM" },
          { "title": "DJ Night", "time": "08:00 PM - 11:00 PM" }
        ]
      },
      "announcements": [
        { 
          "title": "Early Bird Registrations Open!", 
          "date": "2025-03-05", 
          "description": "Register early to get exclusive access to special events.", 
          "urgency": "high" 
        },
        { 
          "title": "Lineup Announcement Soon!", 
          "date": "2025-03-15", 
          "description": "Stay tuned for the artist lineup reveal.", 
          "urgency": "normal" 
        }
      ],
      "people": [
        { "id": 1, "name": "Aryan Verma", "role": "Fest Coordinator", "email": "aryan@example.com", "phone": "+919876543210", "image": "https://randomuser.me/api/portraits/men/16.jpg", "roleType": "organizer" },
        { "id": 2, "name": "Sanya Kapoor", "role": "Cultural Head", "email": "sanya@example.com", "phone": "+919812345678", "image": "https://randomuser.me/api/portraits/women/17.jpg", "roleType": "coordinator" },
        { "id": 3, "name": "Rohan Malhotra", "role": "Technical Coordinator", "email": "rohan@example.com", "phone": "+919876123456", "image": "https://randomuser.me/api/portraits/men/18.jpg", "roleType": "coordinator" },
        { "id": 4, "name": "Isha Sharma", "role": "Volunteer", "email": "isha@example.com", "phone": "+919832165478", "image": "https://randomuser.me/api/portraits/women/19.jpg", "roleType": "volunteer" }
      ],
      "faqData": [
        { "question": "How can I register for the fest?", "answer": "Visit our website and fill out the registration form." },
        { "question": "Is there an entry fee?", "answer": "Entry is free for SDIET students. Others need to buy passes." },
        { "question": "Can non-students attend?", "answer": "Yes, but they must purchase event passes." },
        { "question": "How do I contact the organizers?", "answer": "Reach out via email or phone provided in the contact section." }
      ]
    },
    


    
    
    












  

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
      console.log('Filtered Events:', filtered);  // Debug log
      return { filteredEvents: filtered };
    });
  },
}));

export default useEventStore;



