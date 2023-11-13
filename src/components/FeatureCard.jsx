import React from "react";

const FeatureCard = ({ info }) => {
  const { title, svg } = info;
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 fadeInUp-hidden feature-card">
      <div className="w-[70px] h-[70px] flex-center rounded-md bg-primary-800 bg-opacity-20 mb-10 text-primary-800 dark:text-primary-500 select-none cursor-pointer group mx-auto max-w-[700px] text-center ">
        {svg}
      </div>
      <h3 className="font-bold text-body text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-3">
        {title}
      </h3>
    </div>
  );
};

export default FeatureCard;
