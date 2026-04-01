import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20">
      
      {/* Title */}
      <p className="text-gray-400 font-medium text-lg text-center">
        Trailers
      </p>

      {/* Video Player */}
      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
          <ReactPlayer
            url={currentTrailer.videoUrl}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className="group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-10 max-w-4xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative cursor-pointer transform hover:-translate-y-1 transition duration-300 group-hover:opacity-50 hover:!opacity-100"
          >
            {/* Thumbnail */}
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />

            {/* Play Icon */}
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12 text-white transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;