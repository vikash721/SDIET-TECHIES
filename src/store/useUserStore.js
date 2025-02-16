import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "9958749688",
    collegeRollNo: "SDIET12345",
    bio: "I'm a Computer Science student at SDIET, passionate about coding and building cool projects. I love to learn new technologies and frameworks.",
    universityRollNo: "UNI67890",
    department: "Computer Science",
    studyYear: "3rd Year",
    profileImage: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=", // Default profile image
    linkedin: "#",
    github: "#",
    portfolio: "#",
    instagram: "#",

    // Coordinating Events Section
    coordinatingEvents: {
      ongoingEvents: [
        {
          id: 1,
          name: "Tech Innovation Fest",
          description: "A grand festival of technology and innovation.",
          date: "March 15, 2025",
          time: "10:00 AM - 5:00 PM",
          location: "SDIET Auditorium",
          badge: "Tech",
          participants: 120,
          logo: "https://images.pexels.com/photos/10538542/pexels-photo-10538542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          organizer: { name: "John Doe", profilePicture: "" },
          status: "ongoing",
        },
        {
          id: 2,
          name: "AI & ML Workshop",
          description: "A deep dive into Artificial Intelligence and Machine Learning.",
          date: "April 5, 2025",
          time: "9:00 AM - 4:00 PM",
          location: "SDIET Hall B",
          badge: "AI/ML",
          participants: 85,
          logo: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          organizer: { name: "John Doe", profilePicture: "" },
          status: "ongoing",
        },
      ],
      pastEvents: [
        {
          id: 3,
          name: "Cultural Night",
          description: "An evening of cultural performances and fun.",
          date: "March 20, 2024",
          time: "6:00 PM - 10:00 PM",
          location: "SDIET Open Grounds",
          badge: "Cultural",
          participants: 80,
          logo: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          organizer: { name: "Alice Smith", profilePicture: "" },
          status: "completed",
        },
      ],
    },
  },

  // Function to update user details
  updateUser: (newData) =>
    set((state) => ({
      userData: { ...state.userData, ...newData },
    })),
}));

export default useUserStore;
