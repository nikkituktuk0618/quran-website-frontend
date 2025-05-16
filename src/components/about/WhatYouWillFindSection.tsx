import React from "react";
import { Clock, Users, Lightbulb, Video } from "lucide-react";
import FeatureCard from "./ui/FeatureCard";

const WhatYouWillFindSection: React.FC = () => (
  <section className="py-16 bg-[#ECFFF4]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column - Heading and intro text */}
        <div className="lg:col-span-4">
          <h2 className="text-7xl font-abhaya font-bold mb-6">
            What
            <br />
            You'll
            <br />
            Find Here
          </h2>
          <p className="text-gray-700 font-poppins mb-8">
            No complicated terminology. No overwhelming lectures. Just a journey
            to understanding and applying Allah's words in real life.
          </p>
        </div>

        {/* Right column - Cards grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins">
          <FeatureCard
            icon={Clock}
            title="Daily Qur'an Classes"
            description="A structured, easy-to-follow approach to understanding the Qur'an, one verse at a time."
          />
          <FeatureCard
            icon={Users}
            title="Daily A Supportive Learning Community"
            description="Join discussions, ask questions, and connect with others on the same journey."
          />
          <FeatureCard
            icon={Lightbulb}
            title="Insights & Reflections"
            description="Explore blogs, thought-provoking discussions, and stories from the Qur'an that bring its lessons to life."
          />
          <FeatureCard
            icon={Video}
            title="Live & Recorded Sessions"
            description="Learn at your own pace, without time constraints."
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhatYouWillFindSection;
