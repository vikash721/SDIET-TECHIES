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
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbP1SjH7EkE1TXIwAcnjd0wZOTem0iIlysA&s",
      participants: 500,
      organizer: { name: "Aleni Doe", profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nstASo8BdadWs3X-ji8e1O0hd5AMByZdGQ&s"},
      badge: "Tech",
    },
    {
      name: "IoT & Smart Devices Conference",
      id: 3,
      description: "Exploring innovations in the Internet of Things (IoT).",
      location: "Lucknow, India",
      date: "2025-12-05",
      time: "15:15:00",
      banner: "https://soracom.io/wp-content/uploads/2023/12/iot-tech-expo-edited.jpeg",
      participants: 220,
      organizer: { name: "Alice Johnson",  profilePicture: "https://preview.redd.it/the-best-poses-for-girls-profile-pictures-v0-k3kxvh4czthb1.jpg?width=911&format=pjpg&auto=webp&s=5928c38dc54f0dbe37fc68519b2f23f2507e6d15" },
      badge: "Tech",
    },
    {
      name: "Open Source Hackathon",
      id: 4,
      description: "Contribute to open-source projects and collaborate with developers.",
      location: "Jaipur, India",
      date: "2025-11-08",
      time: "12:00:00",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXPW_iRs3Miqx6e3U_Qq-5BNyJSmgKAYlSg&s",
      participants: 180,
      organizer: { name: "Michael Lee", profilePicture: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" },
      badge: "Hackathon",
    },

    {
        name: "Yoga Retreat 2025",
        id: 5,
        description: "A 3-day yoga retreat in the serene mountains to rejuvenate your body and mind.",
        location: "Rishikesh, India",
        date: "2025-09-12",
        time: "06:00:00",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9X9-lfEBx5misoAqroEpLjsNlsWrBXiAL6Q&shttps://images.unsplash.com/photo-1511451148487-51f0ff83e8b3",
        participants: 50,
        organizer: { name: "Anita Singh", profilePicture: "https://randomuser.me/api/portraits/women/10.jpg" },
        badge: "Wellness",
      },
      {
        name: "Art Exhibition 2025",
        id: 6,
        description: "A showcase of modern art with works by emerging and renowned artists.",
        location: "Paris, France",
        date: "2025-11-05",
        time: "18:00:00",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodj5F8neUwFPDXZzrDJcsfy6zvuURFstDlg&s",
        participants: 200,
        organizer: { name: "Marie Dubois", profilePicture: "https://randomuser.me/api/portraits/women/3.jpg" },
        badge: "Art",
      },
      {
        name: "Food Festival 2025",
        id: 7,
        description: "Experience a wide variety of cuisines from around the world in one place.",
        location: "Tokyo, Japan",
        date: "2025-10-01",
        time: "12:00:00",
        banner: "https://i.ytimg.com/vi/BLsQyx604Yc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYWKCLjjwlIHVaM6MGC9bvpVLe_A",
        participants: 1500,
        organizer: { name: "Taro Yamamoto", profilePicture: "https://randomuser.me/api/portraits/men/1.jpg" },
        badge: "Food",
      },
      {
        name: "Startup Summit 2025",
        id: 8,
        description: "A summit bringing together entrepreneurs, investors, and innovators.",
        location: "Berlin, Germany",
        date: "2025-05-20",
        time: "09:30:00",
        banner: "https://static.wixstatic.com/media/cd1114_b4773488c31e443bb4b942251fb25152~mv2.jpg",
        participants: 700,
        organizer: { name: "Karl Muller", profilePicture: "https://randomuser.me/api/portraits/men/9.jpg" },
        badge: "Business",
      },
      {
        name: "Film Festival 2025",
        id: 9,
        description: "An international film festival showcasing groundbreaking films from around the world.",
        location: "Cannes, France",
        date: "2025-05-15",
        time: "18:30:00",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3X5wnA7re95iNpaqMuzNoxzpW6yyHL1u-g&s",
        participants: 1000,
        organizer: { name: "Sophie Laurent", profilePicture: "https://randomuser.me/api/portraits/women/5.jpg" },
        badge: "Film",
      },
      {
        name: "Sports Gala 2025",
        id: 10,
        description: "An exciting evening showcasing the achievements of top athletes.",
        location: "London, UK",
        date: "2025-08-25",
        time: "19:00:00",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHHD1H26KEZPYsnqOTEfzqM7d06MDNjF4dw&s",
        participants: 300,
        organizer: { name: "James Henry", profilePicture: "https://randomuser.me/api/portraits/men/6.jpg" },
        badge: "Sports",
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
