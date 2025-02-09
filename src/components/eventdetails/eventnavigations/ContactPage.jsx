import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  const people = [
    { id: 1, name: "John Doe", role: "Lead Organizer", email: "john@example.com", phone: "+1234567890", image: "https://picsum.photos/120/120?random=1", roleType: "organizer" },
    { id: 2, name: "Jane Smith", role: "Co-Organizer", email: "jane@example.com", phone: "+0987654321", image: "https://picsum.photos/100/100?random=2", roleType: "organizer" },
    { id: 3, name: "Alice Johnson", role: "Tech Coordinator", email: "alice@example.com", phone: "+1122334455", image: "https://picsum.photos/90/90?random=3", roleType: "coordinator" },
    { id: 4, name: "Bob Williams", role: "Logistics Coordinator", email: "bob@example.com", phone: "+6677889900", image: "https://picsum.photos/90/90?random=4", roleType: "coordinator" },
    { id: 5, name: "Charlie Brown", role: "Volunteer", email: "charlie@example.com", phone: "+5566778899", image: "https://picsum.photos/80/80?random=5", roleType: "volunteer" },
  ];

  const getRoleBadgeColor = (roleType) => {
    switch (roleType) {
      case "organizer":
        return "bg-fuchsia-200 text-fuchsia-900 border border-fuchsia-300"; // Premium color for organizers
      case "coordinator":
        return "bg-orange-200 text-orange-900 border border-orange-300"; // Tech color for coordinators
      case "volunteer":
        return "bg-pink-200 text-pink-900 border border-pink-300"; // Cultural color for volunteers
      default:
        return "bg-gray-200 text-gray-900 border border-gray-300"; // Default gray color for unknown roles
    }
  };

  const formatPhoneNumber = (phone) => {
    const formatted = phone.replace("+", "").replace(/\D/g, ""); // Remove all non-digit characters
    const countryCode = "+91 ";
    const firstPart = formatted.slice(0, 5);
    const secondPart = formatted.slice(5, 10);
    return `${countryCode}${firstPart} ${secondPart}`;
  };

  const ContactCard = ({ person, size }) => (
    <div className={`bg-gray-100 shadow-md rounded-xl p-5 flex items-center space-x-6 ${size} transform transition-all duration-200 hover:scale-102`}>
      <img src={person.image} alt={person.name} className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-primary sm:w-16 sm:h-16" />
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{person.name}</h3>
          <span className={`${getRoleBadgeColor(person.roleType)} text-xs sm:text-sm font-semibold px-2 py-1 rounded-full`}>
            {person.role}
          </span>
        </div>
        <div className="mt-2 space-x-4 flex items-start flex-col sm:flex-row text-gray-700">
          <p className="flex items-center gap-2 w-full sm:w-auto"><FaEnvelope className="text-primary" /> {person.email}</p>
          <p className="flex items-center gap-2 w-full sm:w-auto"><FaPhone className="text-primary" /> {formatPhoneNumber(person.phone)}</p>
        </div>
      </div>
    </div>
  );

  const filterByRoleType = (roleType) => people.filter(person => person.roleType === roleType);

  return (
    <div className="w-full p-6 sm:p-8 bg-white shadow-md rounded-2xl space-y-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Contact Us</h2>

      <section>
        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">Organizers</h3>
        <div className="space-y-6">
          {filterByRoleType("organizer").map((person) => (
            <ContactCard key={person.id} person={person} size="p-4 sm:p-6" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">Coordinators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filterByRoleType("coordinator").map((person) => (
            <ContactCard key={person.id} person={person} size="p-4 sm:p-5" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">Volunteers</h3>
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-start">
          {filterByRoleType("volunteer").map((person) => (
            <ContactCard key={person.id} person={person} size="p-4 sm:p-5 w-full sm:w-auto" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
