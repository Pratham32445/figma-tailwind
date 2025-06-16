import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const NewsUpdate = () => {
  const newsItems = [
    {
      id: 1,
      image: "/news1.avif",
      title:
        "Announcement of Extraordinary General Meeting of Shareholders PT. Borneo Olah Sarana Sukses Tbk 2022",
      date: "12 Agustus 2022",
    },
    {
      id: 2,
      image: "/news2.avif",
      title:
        "Announcement of Extraordinary General Meeting of Shareholders PT. Borneo Olah Sarana Sukses Tbk 2022",
      date: "12 Agustus 2022",
    },
    {
      id: 3,
      image: "/news3.avif",
      title:
        "Announcement of Extraordinary General Meeting of Shareholders PT. Borneo Olah Sarana Sukses Tbk 2022",
      date: "12 Agustus 2022",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 pb-5 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-0 font-poppins">
            News Update
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm sm:text-base transition-colors duration-200 group"
          >
            All News
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100">
                <div className="relative aspect-[4/4] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-tight mb-2 line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdate;
