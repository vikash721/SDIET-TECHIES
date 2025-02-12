import React from "react";
import { Masonry } from "masonic";
import photos from "../data/EventImages";

const MasonryGrid = () => {
  const items = photos.map((photo, index) => ({
    id: index,
    src: photo,
    alt: `Image ${index + 1}`,
  }));

  // Function to dynamically adjust column width based on screen size
  const getColumnWidth = () => {
    if (window.innerWidth < 640) return 120; // Small screens (Mobile)
    if (window.innerWidth < 1024) return 180; // Tablets
    return 250; // Larger screens (Desktop)
  };

  return (
    <div className="p-4 mt-10 ">
     

      <Masonry
        items={items}
        columnGutter={8} // Reduced gutter for better mobile layout
        columnWidth={getColumnWidth()} // Dynamic width
        overscanBy={5}
        render={({ data: { src, alt } }) => (
          <div key={alt} className="w-full mb-4">
            <img className="w-full h-auto object-cover rounded-lg shadow-md" src={src} alt={alt} />
          </div>
        )}
      />
    </div>
  );
};

export default MasonryGrid;
