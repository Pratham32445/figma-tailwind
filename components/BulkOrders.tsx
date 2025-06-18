import React from "react";
import BulkCard from "./BulkCard";

const BulkOrdersComponent = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">
              Need Bulk Orders or Custom Specs?
            </h2>
            <p className="text-semibold text-base sm:text-lg leading-relaxed font-poppins">
              Looking for a specific grade or size of coal? We support custom
              orders and multi-ton shipments across India.
            </p>

            <div className="relative h-16 pt-4">
              <div className="w-3 h-3 bg-black rounded-full absolute transform translate-x-2 translate-y-1"></div>
              <div className="w-3 h-3 bg-black rounded-full absolute transform translate-x-16 -translate-y-2"></div>
              <div className="w-3 h-3 bg-black rounded-full absolute transform translate-x-32 translate-y-3"></div>
              <div className="w-3 h-3 bg-black rounded-full absolute transform translate-x-48 -translate-y-1"></div>
              <div className="w-3 h-3 bg-black rounded-full absolute transform translate-x-64 translate-y-4"></div>
              <div className="w-3 h-3 bg-black rounded-full absolute transform translate-x-80 translate-y-1"></div>
              <div className="hidden md:block w-3 h-3 bg-black rounded-full absolute transform translate-x-96 -translate-y-3"></div>
            </div>
          </div>

          <div className="space-y-4">
            <BulkCard title="Request Bulk Quote" />
            <div className="lg:ml-30 xl:ml-50">
              <BulkCard title="Contact Sales" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrdersComponent;
