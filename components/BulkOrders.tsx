import React from "react";
import BulkCard from "./BulkCard";
import Scattered from "./ScatteredDots";

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

           <Scattered/>
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
