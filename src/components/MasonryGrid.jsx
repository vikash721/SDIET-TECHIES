import React from "react";
import { Masonry } from "masonic";
import photos from "../data/EventImages";

// Your sample images array


const MasonryGrid = () => {
  const items = photos.map((photo, index) => ({
    id: index,
    src: photo,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className="p-4  mt-15 mb-15"> {/* Added margin top (mt-6) and bottom (mb-6) */}

      <h1 className="text-center text-4xl font-bold mb-10">Memories</h1>


      <Masonry
        items={items}
        columnGutter={16}
        columnWidth={200}
        overscanBy={5}
        render={({ data: { src, alt } }) => (
          <div key={alt} className="w-full mb-4">
            <img className="w-full h-auto object-cover rounded-lg" src={src} alt={alt} />
          </div>
        )}
      />
    </div>
  );
};


export default MasonryGrid;
