import React from "react";

const BlackCircle = () => {
  return (
    <section className="relative bg-white overflow-hidden py-12">
        

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="font-bold text-lg md:text-xl text-neutral-900 mb-8">
          What Sets Us Apart:
        </h2>
        <ul className="space-y-10">
          <li className="flex items-center">
            {/* Bullet connector */}
            <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 rounded-full mr-4 relative">
              <span className="absolute left-full top-1/2 -translate-y-1/2 w-12 h-1 bg-neutral-300"></span>
            </span>
            <span className="font-semibold text-lg text-neutral-900">
              Wide variety of coal grades
              <br />
              <span className="font-normal text-base text-neutral-700">
                (GCV, ash, moisture, sulfur)
              </span>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 rounded-full mr-4 relative">
              <span className="absolute left-full top-1/2 -translate-y-1/2 w-12 h-1 bg-neutral-300"></span>
            </span>
            <span className="font-semibold text-lg text-neutral-900">
              Reliable bulk and retail fulfillment.
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 rounded-full mr-4 relative">
              <span className="absolute left-full top-1/2 -translate-y-1/2 w-12 h-1 bg-neutral-300"></span>
            </span>
            <span className="font-semibold text-lg text-neutral-900">
              Transparent pricing &amp; technical specs.
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 rounded-full mr-4 relative">
              <span className="absolute left-full top-1/2 -translate-y-1/2 w-12 h-1 bg-neutral-300"></span>
            </span>
            <span className="font-semibold text-lg text-neutral-900">
              Nationwide delivery &amp; support.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlackCircle;
