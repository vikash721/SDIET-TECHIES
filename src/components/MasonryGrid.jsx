import React, { useState, useEffect } from "react";
import { Masonry } from "masonic";
import photos from "../data/EventImages";

const MasonryGrid = () => {
  const [columnWidth, setColumnWidth] = useState(getColumnWidth());

  // Function to determine column width based on screen size
  function getColumnWidth() {
    if (window.innerWidth < 640) return 120; // Mobile
    if (window.innerWidth < 1024) return 180; // Tablet
    return 250; // Desktop
  }

  // Update column width on window resize
  useEffect(() => {
    const handleResize = () => setColumnWidth(getColumnWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = photos.map((photo, index) => ({
    id: index,
    src: photo,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className="p-4 mt-10">
      <Masonry
        items={items}
        columnGutter={8} // Reduced gutter for better mobile layout
        columnWidth={columnWidth} // Dynamic width
        overscanBy={5}
        render={({ data: { src, alt } }) => (
          <div key={alt} className="w-full mb-4">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src={src}
              alt={alt}
            />
          </div>
        )}
      />
    </div>
  );
};

export default MasonryGrid;
