import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding pt-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-primary tracking-wider font-italiana text-2xl font-medium">
              The Story Of
            </div>
            <h2 className="text-6xl font-bold font-abhaya">About Me</h2>
            <p className="text-secondary-foreground/80 leading-relaxed">
              I have always been a curious person, constantly searching for
              answers and questioning everything around me. Like everyone,
              difficulties and hardships pushed me to seek hope because it felt
              impossible to move forward, leaving me searching for meaning in
              this limited world. This curiosity led me down a path of deep
              observation and self-reflection, where I questioned not only the
              world but also myself.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed">
              I really loved studying but my academic journey wasn’t smooth
              because of the teachers and environment I was in, but in between
              all these struggles, I found solace and truth in Islam. Through
              deep study and reflection on the Qur’an and Sunnah, I realized
              that I had discovered the clearest path—one that everyone deserves
              to know.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed">
              So, I started creating content to make Islamic knowledge
              accessible and relatable to everyone. Unexpectedly, people
              connected deeply with what I shared. Since then I have continued
              to create content that strengthens faith, teaches reliance on
              Allah alone, clears cultural biases and misconceptions, and helps
              Muslims apply Islam in their daily lives.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Alhamdulillah, this journey has led to a growing community of over
              340K+ followers on Instagram, and my goal remains the same—to
              bring people closer to the true essence of Islam.
            </p>
            <div className="my-4">
              <Link to="/about" className="btn-primary">
                MORE ABOUT ME HERE
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-6">
              <img
                src={"/about_group.jpg"}
                alt="About us"
                className="rounded-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
