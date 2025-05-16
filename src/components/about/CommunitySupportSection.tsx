import React from "react";
import SupportFeature from "./ui/SupportFeature";

const CommunitySupportSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h3 className="text-amber-800 font-italiana mb-2 text-3xl">Support</h3>
        <h2 className="text-6xl md:text-6xl font-bold font-abhaya">
          Community Support
        </h2>
      </div>

      {/* Support Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <SupportFeature
          imageSrc="/community-1.png"
          title="Interactive Learning"
          description="Refers to concepts or initiatives that extend beyond traditional teaching."
        />
        <SupportFeature
          imageSrc="/community-2.png"
          title="WhatsApp"
          description="Refers to concepts or initiatives that extend beyond traditional teaching."
        />
        <SupportFeature
          imageSrc="/community-3.png"
          title="live sessions"
          description="Refers to concepts or initiatives that extend beyond traditional teaching."
        />
        <SupportFeature
          imageSrc="/community-4.png"
          title="supportive network"
          description="Refers to concepts or initiatives that extend beyond traditional teaching."
        />
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
          JOIN NOW
        </button>
      </div>
    </div>
  </section>
);

export default CommunitySupportSection;
