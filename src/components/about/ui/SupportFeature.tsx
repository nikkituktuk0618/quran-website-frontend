import React from "react";

interface SupportFeatureProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SupportFeature: React.FC<SupportFeatureProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-32 h-32 mb-6">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-xl font-semibold font-abhaya mb-3">{title}</h3>
    <p className="text-gray-600 text-sm font-poppins">{description}</p>
  </div>
);

export default SupportFeature;
