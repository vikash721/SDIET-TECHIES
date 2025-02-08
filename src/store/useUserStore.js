import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    collegeRollNo: "SDIET12345",
    universityRollNo: "UNI67890",
    department: "Computer Science",
    studyYear: "3rd Year",
    profileImage: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=", // Default profile image
    linkedin: "#",
    github: "#",
    portfolio: "#",
    instagram: "#",
  },

  // Function to update user details
  updateUser: (newData) => set((state) => ({
    userData: { ...state.userData, ...newData }
  })),
}));

export default useUserStore;
