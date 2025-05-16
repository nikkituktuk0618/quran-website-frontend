import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start mb-4">
      <div className="p-2 bg-gray-100 rounded-md mr-4">
        <Icon className="h-6 w-6 text-gray-700" />
      </div>
      <h3 className="text-xl font-medium font-poppins">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
