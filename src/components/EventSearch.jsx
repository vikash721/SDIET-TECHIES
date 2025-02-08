import React from "react";
import useEventStore from "../store/useEventStore"; // ✅ Correct import

const EventSearch = () => {
  const { searchQuery, setSearchQuery, filterEvents } = useEventStore();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update the query in the store
    filterEvents(); // Trigger filtering of events
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* Typewriter Effect Text */}
      <div className="text-xl text-black font-semibold">
        <span>Search for events...</span>
      </div>

      {/* Centered Search Bar with Search Button */}
      <label className="flex items-center gap-2 bg-white rounded-lg shadow-lg px-3 py-2 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for events..."
          className="text-lg text-black bg-white h-10 w-full border-none focus:outline-none focus:ring-0 font-semibold"
        />
        <button className="bg-black text-white text-lg font-semibold rounded-lg px-6 py-2 ml-2 hover:bg-[#444] transition-colors duration-300 cursor-pointer hover:scale-101">
          Search
        </button>
      </label>
    </div>
  );
};

export default EventSearch;
