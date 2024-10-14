import React from "react";
import Footer from "./Footer";

// Static data for Puja Schedule with images
const schedule = [
  {
    event: "Bilva Nimantran",
    date: "2024-10-8",
    time: "10:00 AM",
    imageUrl:
      "https://thedailyguardian.com/wp-content/uploads/2023/10/story-3-page-6.jpeg", // Replace with actual image paths
  },
  {
    event: "Kalparambha",
    date: "2024-10-9",
    time: "09:00 AM",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pushpanjali_-_Maha_Ashtami_-_Durga_Puja_-_Biswamilani_Club_-_Padmapukur_Water_Treatment_Plant_Road_-_Howrah_2015-10-21_6086.JPG/1200px-Pushpanjali_-_Maha_Ashtami_-_Durga_Puja_-_Biswamilani_Club_-_Padmapukur_Water_Treatment_Plant_Road_-_Howrah_2015-10-21_6086.JPG?20151021040307", // Replace with actual image paths
  },
  {
    event: "Durga Saptami",
    date: "2024-10-10",
    time: "12:00 PM",
    imageUrl: "https://banglahunt.com/wp-content/uploads/1-1412251020.jpg.webp", // Replace with actual image paths
  },
  {
    event: "Durga Ashatami, Maha Navami",
    date: "2024-10-11",
    time: "04:00 PM",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_N_uSskh56jvwuNJPLreMkBcmbzrD8StKOw&s", // Replace with actual image paths
  },
  {
    event: "Vijayadashami",
    date: "2024-10-12",
    time: "05:00 PM",
    imageUrl:
      "https://navbharattimes.indiatimes.com/thumb/91281219/durga-visarjan-rituals-significance-and-celebrations-91281219.jpg?imgsize=25973&width=700&height=394&resizemode=75", // Replace with actual image paths
  },
];

const SchedulePage = () => {
  return (
    <>
      <div className="w-full h-full p-4 bg-gradient-to-b from-gray-800 to-black text-white">
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">
          Puja Schedule
        </h1>

        {/* Calendar-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center"
            >
              {/* Image section */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.event}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="text-center border-t border-yellow-300 pt-2">
                <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </h2>
                <h3 className="text-lg mb-2">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                  {item.event}
                </h3>
                <p className="text-lg">Time: {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchedulePage;
