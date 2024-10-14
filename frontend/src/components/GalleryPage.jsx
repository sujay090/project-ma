import React from "react";
import Footer from "./Footer";
import i1 from "../puja-images/i1.jpg";
import i2 from "../puja-images/i2.jpg";
import i3 from "../puja-images/i3.jpg";
import i4 from "../puja-images/i4.jpg";
import i5 from "../puja-images/i5.jpg";
import i6 from "../puja-images/i6.jpg";
import i7 from "../puja-images/i7.jpg";
import i8 from "../puja-images/i8.jpg";
import i9 from "../puja-images/i9.jpg";
import i10 from "../puja-images/i10.jpg";
import i11 from "../puja-images/i11.jpg";
import i12 from "../puja-images/i12.jpg";
import i13 from "../puja-images/i13.jpg";
import i14 from "../puja-images/i14.jpg";
import i15 from "../puja-images/i15.jpg";
import i16 from "../puja-images/i16.jpg";
import i17 from "../puja-images/i17.jpg";
import i18 from "../puja-images/i18.jpg";
import i19 from "../puja-images/i19.jpg";
import i20 from "../puja-images/i20.jpg";
import i21 from "../puja-images/i21.jpg";
// Static data for gallery images
const images = [
  {
    imageUrl: i1,
    description: "Durga Puja Celebration 1",
  },
  {
    imageUrl: i2,
    description: "Durga Puja Celebration 2",
  },
  {
    imageUrl: i3,
    description: "Durga Puja Celebration 3",
  },
  {
    imageUrl: i4,
    description: "Durga Puja Celebration 4",
  },
  {
    imageUrl: i5,
    description: "Durga Puja Celebration 5",
  },
  {
    imageUrl: i6,
    description: "Durga Puja Celebration 6",
  },
  {
    imageUrl: i7,
    description: "Durga Puja Celebration 7",
  },
  {
    imageUrl: i8,
    description: "Durga Puja Celebration 8",
  },
  {
    imageUrl: i9,
    description: "Durga Puja Celebration 9",
  },
  {
    imageUrl: i10,
    description: "Durga Puja Celebration 10",
  },
  {
    imageUrl: i11,
    description: "Durga Puja Celebration 12",
  },
  {
    imageUrl: i12,
    description: "Durga Puja Celebration 13",
  },
  {
    imageUrl: i13,
    description: "Durga Puja Celebration 14",
  },
  {
    imageUrl: i14,
    description: "Durga Puja Celebration 15",
  },
  {
    imageUrl: i15,
    description: "Durga Puja Celebration 16",
  },
  {
    imageUrl: i16,
    description: "Durga Puja Celebration  17",
  },
  {
    imageUrl: i17,
    description: "Durga Puja Celebration 18",
  },
  {
    imageUrl: i18,
    description: "Durga Puja Celebration 19",
  },
  {
    imageUrl: i19,
    description: "Durga Puja Celebration 20",
  },
  {
    imageUrl: i20,
    description: "Durga Puja Celebration 21",
  },
  {
    imageUrl: i21,
    description: "Durga Puja Celebration 21",
  },
];

const GalleryPage = () => {
  return (
    <>
      <div className="w-full h-full p-10 bg-gradient-to-b from-gray-800 to-black text-white">
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">
          Durga Puja Gallery
        </h1>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              {/* Image */}
              <img
                src={image.imageUrl}
                alt={image.description}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105"
              />

              {/* Overlay with Description */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
