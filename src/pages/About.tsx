import { Navbar, Footer, Blog } from "@/components/common";
import {
  HeroSection,
  AboutMeSection,
  PlansSection,
  WhatDrivesMeSection,
  GrowthAndStrugglesSection,
  WhatIFearSection,
  TransitionSection,
  MissionVisionSection,
  JoinMeSection,
  WhatYouWillFindSection,
  CommunitySupportSection,
  ConnectWithUsSection,
} from "@/components/about";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <PlansSection />
      <WhatDrivesMeSection />
      <GrowthAndStrugglesSection />
      <WhatIFearSection />
      <TransitionSection />
      <MissionVisionSection />
      <JoinMeSection />
      <WhatYouWillFindSection />
      <CommunitySupportSection />
      <ConnectWithUsSection />
      <Blog />
      <Footer />
    </div>
  );
};

export default About;
