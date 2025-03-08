import { Navbar, Footer, Blog } from "@/components/common";
import { Clock, BookOpen, Users, Lightbulb, Video } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/about-banner.png')] bg-cover bg-center" />
        <div className="container relative z-10 px-6 pt-16 pb-20"></div>
      </section>
      {/* about me section */}
      <section id="about" className="section-padding pt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-primary tracking-wider font-italiana text-2xl font-medium">
                About me
              </div>
              <h2 className="text-6xl font-bold font-abhaya">Al-faiz Saifi</h2>
              <p className="text-secondary-foreground/80 leading-relaxed">
                I have always been curious, constantly seeking answers to the
                world around me. As a child, I would bombard my father with
                endless questions—so many that it often left him frustrated
                because no one had all the answers to my questions. And that
                curiosity shaped my early years. My father and I used to watch
                automotive content, and I felt attracted to these machines.
                Liked them and I thought maybe my life would revolve around this
                passion, leading me to explore everything from cars, ships, and
                fighter jets to tanks and other machines that captured my
                interest.
              </p>
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
      {/* Plans Section */}
      <section className="relative py-20">
        <img src="/about-middle.png" alt="About Middle" />
        <div className="container mx-auto py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">
              But life had different plans.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-lg">
              Since the age of 15, I have been learning about Islam, though at
              first, it was out of necessity rather than devotion. The hardships
              in my life forced me to seek hope, and I found glimpses of it in
              Islam. However, I struggled with doubts. The propaganda against
              Islam, the divisions among Muslims, and my own skepticism held me
              back. It took years for my faith to solidify, and I wasn’t always
              consistent. But with each hardship, I found myself turning back to
              Allah, finding comfort in the Qur'an. The more I read, the more I
              realized that Islam was not just a religion—it was the ultimate
              guide to life.
            </p>
          </div>
        </div>
      </section>
      {/* Drives me section */}
      <section id="about" className="section-padding bg-[#FFFBEF]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass-card p-6">
                <img
                  src={"/about-wolf.png"}
                  alt="About us"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-abhaya">What Drives Me</h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                In Surah Al-A'raf (175-176), Allah describes a person who was
                blessed with knowledge and wisdom of His signs, yet this person
                detached himself from them and was ultimately led astray by his
                own choices he made, with Satan becoming his companion. If he
                had humbled himself and submitted to the truth revealed to him,
                Allah would have elevated the ranks of this person, honoring him
                with knowledge and blessings both in this world and the
                Hereafter. However, he chose worldly gains, which could never
                satisfy his nafs—no matter how much he acquired, he remained in
                constant pursuit, never feeling fulfilled.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Growth and Struggles */}
      <section className="relative py-20">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-5xl font-abhaya font-bold mb-8">
              My Growth and Struggles ( Surah Yusuf )
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
              Then it appeared to them after they had seen the signs that he
              [i.e., al-ʿAzeez] should surely imprison him for a time. ( 35 )
              And when he (Yusuf) reached maturity, We gave him judgement and
              knowledge. And thus We reward the doers of good. Surah Yusuf 22
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
              Since the age of 15, I have been learning about Islam, though at
              first, it was out of necessity rather than devotion. The hardships
              in my life forced me to seek hope, and I found glimpses of it in
              Islam. However, I struggled with doubts. The propaganda against
              Islam, the divisions among Muslims, and my own skepticism held me
              back. It took years for my faith to solidify, and I wasn’t always
              consistent. But with each hardship, I found myself turning back to
              Allah, finding comfort in the Qur'an. The more I read, the more I
              realized that Islam was not just a religion—it was the ultimate
              guide to life.
            </p>
          </div>
        </div>
      </section>
      {/* What I fear */}
      <section id="about" className="section-padding pt-16 bg-[#EEF5FF]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-abhaya">What I fear</h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                And recite to them, O Muḥammad, the news of him to whom We gave
                knowledge of Our signs, but he detached himself from them; so
                Satan pursued him, and he became of the deviants. And if We had
                willed, We could have elevated him thereby, but he adhered
                instead to the earth and followed his own desire. So his example
                is like that of the dog: if you chase him, he pants, or if you
                leave him, he still pants. That is the example of the people who
                denied Our signs. So relate the stories that perhaps they will
                give thought. Surah Al-A'raf 175 -176
              </p>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                In <b>Surah Al-A'raf (175-176)</b>, Allah describes a person who
                was blessed with knowledge and wisdom of His signs, yet this
                person detached himself from them and was ultimately led astray
                by his own choices he made, with Satan becoming his companion.
                If he had humbled himself and submitted to the truth revealed to
                him, Allah would have elevated the ranks of this person,
                honoring him with knowledge and blessings both in this world and
                the Hereafter. However, he chose worldly gains, which could
                never satisfy his nafs—no matter how much he acquired, he
                remained in constant pursuit, never feeling fulfilled.
              </p>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                This verse serves as a powerful reminder that influence and
                wealth, power and fame can easily consume a person, leading them
                away from the true purpose of life that Allah has given all of
                us to live by. I fear becoming such a person. I seek knowledge
                not for the sake of worldly status but for the guidance that
                Allah bestows upon His righteous servants as an honour. I want
                to be among those whom Allah, in His mercy, grants wisdom and
                understanding—those He guides in times of need, protects from
                evil, and safeguards from calamity. And with this knowledge
                Allah bestows, I desire to fulfill the duty of spreading the
                truth:{" "}
                <b>
                  There is no god except Allah, and only He deserves to be
                  worshipped
                </b>
                . This is the path I wish to walk for the rest of my life. It
                gives me <b>hope, purpose, and peace.</b>
              </p>
            </div>
            <div className="relative">
              <div className="glass-card p-6">
                <img
                  src={"/what_drives_me.png"}
                  alt="About us"
                  className="rounded-xl w-full h-[800px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transition */}
      <section className="relative py-20">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-7xl md:text-7xl font-abhaya font-bold mb-8">
              The Transition to Teaching
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
              Once my faith became firm, I couldn’t ignore the overwhelming
              misinformation and propaganda  about Islam spreading online
              because over 55% of anti-Muslim content comes from India alone in
              the whole world. The negative portrayal, the misconceptions, the
              cultural distortions—I knew I had to do something about it. That’s
              when I created my Instagram page, where I could share authentic
              Islamic content and help young people clear their doubts about
              Islam.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
              What happened next was beyond my expectations. The page grew
              rapidly, with thousands of people resonating with my content. It
              became clear that people were searching for the truth, just like I
              had been. They needed someone to guide them toward Islam in a way
              that was clear, practical, and free from cultural biases.
            </p>
            <p className="text-gray-700 leading-relaxed font-poppins text-md font-bold">
              {" "}
              That's why Qur'an Everyday exists.{" "}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
              To make learning the Qur'an accessible, engaging, and truly
              life-changing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-poppins text-md">
              Because understanding Allah's words should never feel intimidating
              <br />- <b>it should feel like coming home.</b>
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md font-bold">
              If you're ready to begin this journey, start learning today.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Mission - Vision */}
      <section id="about" className="section-padding bg-[#ECFFF4]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass-card p-6">
                <h2 className="text-7xl md:text-7xl font-abhaya font-bold mb-8">
                  My Mission and Vision
                </h2>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-abhaya">What Drives Me</h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                What I have felt and experienced in diving deep into the Qur’an
                is beyond my imagination and I can’t even explain it to you, it
                overwhelms and takes control of me often. But I believe that
                everyone deserves to know the truth. And this is why I want to
                make Islamic knowledge accessible to everyone—regardless of age,
                background, or personal struggles. I want to introduce people to
                the <b>real and practical Islam</b> that exists in the Qur’an
                and Sunnah, unfiltered by cultural misconceptions or modern
                distortions.
              </p>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                Islam is not just a set of rituals; it is a{" "}
                <b>beacon of light</b>, capable of erasing the darkness that so
                many people carry in their hearts that they received from the
                corruption of this Dunya. The answers, the comfort, and the
                peace that people seek—they are all found in the remembrance{" "}
                <b>of Allah and the teachings of the Qur’an and Sunnah.</b> My
                goal is to show people that Islam is not just something to
                believe in; it is something to live by and is more than capable
                to not only transform your life but this whole world as well,
                and cleanse it from the chaos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Join me */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass-card p-6">
                <img
                  src={"/about_group.jpg"}
                  alt="About us"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-abhaya">
                Join Me on This Journey
              </h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                If my journey resonates with you, then maybe you’re seeking
                clarity, if you want to reconnect with Islam in a way that is
                both meaningful and practical—join me. I share Islamic knowledge
                in a way that is{" "}
                <b>easy to understand, deeply personal, and transformative.</b>
              </p>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                You can follow me on my{" "}
                <b>social media platforms or also join my classes.</b> Let’s
                walk this path together, seeking knowledge and growing in faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you will find here? */}
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
                No complicated terminology. No overwhelming lectures. Just a
                journey to understanding and applying Allah's words in real
                life.
              </p>
            </div>

            {/* Right column - Cards grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gray-100 rounded-md mr-4">
                    <Clock className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-medium font-poppins">
                    Daily Qur'an Classes
                  </h3>
                </div>
                <p className="text-gray-600">
                  A structured, easy-to-follow approach to understanding the
                  Qur'an, one verse at a time.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gray-100 rounded-md mr-4">
                    <Users className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-medium font-poppins">
                    Daily A Supportive Learning Community
                  </h3>
                </div>
                <p className="text-gray-600">
                  Join discussions, ask questions, and connect with others on
                  the same journey.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gray-100 rounded-md mr-4">
                    <Lightbulb className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-medium font-poppins">
                    Insights & Reflections
                  </h3>
                </div>
                <p className="text-gray-600">
                  Explore blogs, thought-provoking discussions, and stories from
                  the Qur'an that bring its lessons to life.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gray-100 rounded-md mr-4">
                    <Video className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-medium font-poppins">
                    Live & Recorded Sessions
                  </h3>
                </div>
                <p className="text-gray-600">
                  Learn at your own pace, without time constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h3 className="text-amber-800 font-italiana mb-2 text-3xl">
              Support
            </h3>
            <h2 className="text-6xl md:text-6xl font-bold font-abhaya">
              Community Support
            </h2>
          </div>

          {/* Support Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Interactive Learning */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6">
                {/* Placeholder for Interactive Learning icon */}
                <img
                  src="/community-1.png"
                  alt="Interactive Learning"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold font-abhaya mb-3">
                Interactive Learning
              </h3>
              <p className="text-gray-600 text-sm font-poppins">
                Refers to concepts or initiatives that extend beyond traditional
                teaching.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6">
                {/* Placeholder for WhatsApp icon */}
                <img
                  src="/community-2.png"
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold font-abhaya mb-3">
                WhatsApp
              </h3>
              <p className="text-gray-600 text-sm font-poppins">
                Refers to concepts or initiatives that extend beyond traditional
                teaching.
              </p>
            </div>

            {/* Live Sessions */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6">
                {/* Placeholder for Zoom/Live Sessions icon */}
                <img
                  src="/community-3.png"
                  alt="Live Sessions"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold font-abhaya mb-3">
                live sessions
              </h3>
              <p className="text-gray-600 text-sm font-poppins">
                Refers to concepts or initiatives that extend beyond traditional
                teaching.
              </p>
            </div>

            {/* Supportive Network */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6">
                {/* Placeholder for Supportive Network icon */}
                <img
                  src="/community-4.png"
                  alt="Supportive Network"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold font-abhaya mb-3">
                supportive network
              </h3>
              <p className="text-gray-600 text-sm font-poppins">
                Refers to concepts or initiatives that extend beyond traditional
                teaching.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
              JOIN NOW
            </button>
          </div>
        </div>
      </section>

      {/* Connect with us */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass-card p-6">
                <img
                  src={"/about_group.jpg"}
                  alt="About us"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-abhaya">
                Connect with us
              </h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                Insights and Inspiration: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam dolor quisquam aspernatur.
                <br />
                My blog and videos highlight reflections on the Qur’an, mental
                health, and the social issues we face today. These pieces are
                meant to spark thought and provide practical ways to align our
                lives with Allah’s guidance.
              </p>
              <a
                href="https://www.youtube.com/channel/YOUR_CHANNEL_ID?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 text-white font-medium py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
};

export default About;
