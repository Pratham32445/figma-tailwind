import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const BulkCard = ({
  coalImage = "/coal-closeup.avif",
  alt = "Coal burning",
  title,
}: {
  title: string;
  coalImage: string;
  alt: string;
}) => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div
        className="group relative bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        style={{ boxShadow: " 6px 6px 25.7px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex items-center">
          <div className="relative w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 flex-shrink-0">
            <Image
              src={coalImage}
              alt={alt}
              fill
              className="object-cover rounded-l-2xl"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-l-2xl"></div>
          </div>

          <div className="flex-1 px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                {title}
              </h3>
              <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                Quote
              </h3>
            </div>

            <div className="flex-shrink-0 ml-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black ml-0.5"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default BulkCard;
