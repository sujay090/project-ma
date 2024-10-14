import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Durga from "../assets/durga.png";
import them from "../assets/ma1.mp3";
import Arati from "../assets/ma.mp3";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const quotes = [
  "শুভ দুর্গা পূজা, আনন্দে ভরে যাক জীবন।",
  "মায়ের আশীর্বাদে থাকুক শান্তি ও সাফল্য।",
  "দুর্গা মায়ের কৃপায় এগিয়ে যাক সকলের পথ।",
  "পূজার আনন্দে হাসি, ছড়িয়ে পড়ুক চারদিকে।",
];

// Accordion Item Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none"
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-white bg-opacity-10 p-4 rounded-lg mt-2">
          {content}
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const greeting = "শুভ সারাদিয়ে!"; // Bengali greeting

  // Animation for the Durga image
  const durgaAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: [{ transform: "translateY(-10px)" }, { transform: "translateY(0px)" }],
    config: { tension: 120, friction: 30 },
    loop: { reverse: true },
  });

  // State for current quote
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Change quote every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setCurrentQuote(quotes[quoteIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [quoteIndex]);

  // Animation for the greeting
  const greetingAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  // State for controlling Aarti play/stop
  const [isAartiPlaying, setIsAartiPlaying] = useState(false);
  const [aartiAudio, setAartiAudio] = useState(null);

  // Function to toggle Aarti
  const toggleAarti = () => {
    if (isAartiPlaying) {
      aartiAudio.pause(); // Pause the Aarti
      setIsAartiPlaying(false);
    } else {
      const audio = new Audio(them); // Create new Aarti audio
      audio.play();
      setAartiAudio(audio);
      setIsAartiPlaying(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Durga Puja 2024 | Celebrating with Joy and Devotion</title>
      </Helmet>
      <div className="flex flex-col justify-between  items-center h-full bg-gradient-to-b from-yellow-300 to-orange-600 relative ">
        {/* Background Music (hidden player) */}
        <audio autoPlay loop controls className="absolute bottom-0 right-0">
          <source src={Arati} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>

        {/* Content Section */}
        <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row items-center justify-between h-full">
          {/* Animated Durga Image */}
          <animated.div
            style={durgaAnimation}
            className="relative w-full md:w-1/2 lg:w-[40%] mb-4 md:mb-0"
          >
            <img
              src={Durga} // Durga image path
              alt="Durga"
              className="w-full h-auto glow-effect " // Adjust size as needed
            />
            {/* Glowing Effect */}
            {/* <div className="absolute inset-0 rounded-lg "></div> */}
          </animated.div>

          {/* Right Side Content */}
          <div className="flex flex-col items-start justify-center text-white p-5 w-full md:w-1/2 lg:w-[50%]">
            <animated.h1
              style={greetingAnimation}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-shadow">{greeting}</span>
            </animated.h1>
            <br />
            {/* Changing Quote */}
            <animated.div
              style={greetingAnimation}
              className="text-lg text-white mb-4"
            >
              <p>{currentQuote}</p>
            </animated.div>
            <br />
            <p className="text-lg mb-2 font-merienda">Durga Puja 2024</p>
            <p className="text-lg mb-4 font-merienda">
              Join us in celebrating this puja, check the schedule, donate, and
              explore our gallery.
            </p>

            {/* Puja Related Information Accordion */}
            <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-8 w-full">
              <h2 className="text-2xl font-semibold mb-2 font-merienda">
                Puja Related Information
              </h2>
              <AccordionItem
                title="Puja Schedule: October 8 - 13"
                content={
                  <p>Details about the schedule will be provided soon!</p>
                }
              />
              <AccordionItem
                title="Evening Aarti"
                content={<p>Join us for evening Aarti every day at 7 PM.</p>}
              />
              <AccordionItem
                title="Cultural Events"
                content={
                  <p>Enjoy various cultural events throughout the puja.</p>
                }
              />
              <AccordionItem
                title="Special Prasad and Bhog Distribution"
                content={
                  <p>Join us for Prasad distribution every afternoon.</p>
                }
              />
            </div>

            {/* Aarti Play/Stop Button */}
            <button
              onClick={toggleAarti}
              className={`${
                isAartiPlaying ? "bg-red-500" : "bg-yellow-500"
              } text-black p-2 rounded hover:bg-yellow-600 transition font-merienda`}
            >
              {isAartiPlaying ? "Stop Aarti" : "Play Aarti"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
