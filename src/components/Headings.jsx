import React from "react";

const Headings = ({ title }) => {
  return (
    <div className="w-full px-4">
      <div className="mx-auto max-w-[700px] text-center mb-[100px] fadeInLeft-hidden">
        <h2 className="text-body font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
          {title}
        </h2>
        <p className="text-sub text-base md:text-lg leading-relaxed md:leading-relaxed">
        Our platform allows you to browse, select, and confirm appointments with ease.

        </p>
      </div>
    </div>
  );
};

export default Headings;
