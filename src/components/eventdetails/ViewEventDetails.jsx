const EventDetail = ({ event }) => {
    const badgeEmojiMap = {
      Tech: "💻",
      Music: "🎶",
      Sports: "⚽",
      Art: "🎨",
      Science: "🔬",
      Business: "💼",
    };
  
    // Fallback event object in case the passed event is undefined
    const defaultEvent = {
      name: "Tech Expo 2025",
      date: "March 12, 2025",
      description: "An exciting event showcasing the latest in tech innovations, featuring speakers from leading companies.",
      badge: "Tech",
      location: "SDIET Campus, Main Auditorium",
      speakers: ["John Doe", "Jane Smith", "Alice Johnson"],
      contact: "tech@sdiet.com",
      registrationLink: "https://sdiet.com/register",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      agenda: [
        { time: "9:00 AM", topic: "Registration & Welcome" },
        { time: "10:00 AM", topic: "Keynote: The Future of AI" },
        { time: "11:00 AM", topic: "Panel Discussion: Tech Innovations" },
        { time: "12:00 PM", topic: "Networking Lunch" },
      ],
      highlights: [
        "Leading industry experts as speakers.",
        "Hands-on workshops on AI and Blockchain.",
        "Networking with like-minded professionals.",
      ],
      faqs: [
        { question: "What should I bring?", answer: "Just your curiosity and enthusiasm!" },
        { question: "Is there a registration fee?", answer: "Yes, the registration fee is $50." },
      ],
    };
  
    const eventData = event || defaultEvent;
  
    const { name, date, description, badge, location, speakers, contact, registrationLink, imageUrl, agenda, highlights, faqs } = eventData;
  
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-xl">
        {/* Event Image with Gradient Overlay */}
        <div className="relative mb-6">
          <img src={imageUrl} alt={name} className="w-full h-64 object-cover rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-xl"></div>
        </div>
  
        {/* Event Name and Badge */}
        <div className="flex items-center mb-4">
          <span className="text-4xl font-semibold text-gray-900 mr-2">{badgeEmojiMap[badge] || "✨"}</span>
          <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
        </div>
  
        {/* Event Date */}
        <div className="text-lg text-gray-600 mb-6">{date}</div>
  
        {/* Event Description */}
        <div className="text-lg text-gray-700 mb-6">
          <p>{description}</p>
        </div>
  
        {/* Event Location */}
        <div className="text-lg text-gray-600 mb-4">
          <strong>Location: </strong>
          {location}
        </div>
  
        {/* Speakers/Guests */}
        <div className="text-lg text-gray-600 mb-4">
          <strong>Speakers: </strong>
          {speakers.length > 0 ? speakers.join(", ") : "TBD"}
        </div>
  
        {/* Event Highlights */}
        <div className="text-lg text-gray-600 mb-6">
          <strong>Event Highlights:</strong>
          <ul className="list-disc ml-6 space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700">{highlight}</li>
            ))}
          </ul>
        </div>
  
        {/* Event Agenda */}
        <div className="text-lg text-gray-600 mb-6">
          <strong>Agenda:</strong>
          <ul className="list-decimal ml-6 space-y-2">
            {agenda.map((item, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold">{item.time}</span>: {item.topic}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Contact Info */}
        <div className="flex items-center text-lg text-gray-600 mb-6">
          <span className="material-icons-outlined mr-2">email</span>
          <strong>Contact: </strong>
          <a href={`mailto:${contact}`} className="text-blue-600 hover:underline">{contact}</a>
        </div>
  
        {/* Registration Link */}
        {registrationLink && (
          <div className="text-lg text-blue-600 mb-6">
            <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <span className="material-icons-outlined">event</span>
              <span>Register Now</span>
            </a>
          </div>
        )}
  
        {/* FAQs */}
        <div className="text-lg text-gray-600">
          <strong>FAQs:</strong>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800">{faq.question}</p>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default EventDetail;
  