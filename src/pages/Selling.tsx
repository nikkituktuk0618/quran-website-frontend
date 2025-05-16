import { Navbar, Footer, FrequentAQ } from "@/components/common";
import { Link } from "react-router-dom";
import CommunitySupportSection from "@/components/about/CommunitySupportSection";
import ClientsCarousel from "@/components/Home/ClientsCaraousel";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/hero_image.png')] bg-cover bg-center" />
        <div className="container relative z-10 px-6 pt-16 pb-20">
          <div className="max-w-3xl ml-auto text-right">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-abhaya font-bold text-white leading-tight animate-fade-in">
              Qur&apos;an Everyday
              <br />
              Classes
            </h1>
            <p className="mt-6 text-lg font-poppins text-white/80 animate-slide-up">
              Learn, Reflect, and Connect with the Quran in Just 20 Minutes a
              Day, It's not just a religious scripture but a way of life.
            </p>
            <div className="my-4">
              <Link
                to="/login"
                className="bg-[#D9BC86] text-[#392618] px-8 py-3 rounded-full font-raleway font-bold hover:bg-[#c9ad79] transition-colors mt-8 animate-scale-in"
              >
                Enrol Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Disconnected Section */}
      <section className="relative py-20">
        <div className="container mx-auto py-16">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-2xl">
              Have you ever felt{" "}
              <b>
                <i>Disconnected</i>
              </b>{" "}
              from the Qur'an, struggling to understand its meanings?{" "}
              <b>
                <i>You're not alone.</i>
              </b>{" "}
              Many people want to connect{" "}
              <b>
                <i>deeply with Allah's</i>
              </b>{" "}
              words but don't know where to start." Expensive classes, Time
              shortage, Initial requirements of knowldge, Tight Schedule etc.
            </p>
          </div>
        </div>
        <img src="/selling-page.png" alt="About Middle" />
      </section>
      {/* Promise of transformation */}
      <section className="relative py-20">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-abhaya font-bold mb-8">
              Promise of transformation:
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-poppins text-md">
              Clearly state how your classes solve this problem. The Qur'an is
              not just a book - it's guidance, healing, and wisdom from Allah.
              But to truly benefit from it, we need to{" "}
              <span className="font-bold">understand, reflect, and apply</span>{" "}
              its teachings in our daily lives.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
              That's what my <span className="font-bold">Qur'an Everyday</span>{" "}
              classes are all about:{" "}
              <span className="font-bold">
                breaking down verses, exploring their meaning, and discovering
                how they can transform our hearts, minds, and actions.
              </span>
            </p>
            <div className="flex justify-center my-10">
              <img
                src="/promise_transform.png"
                alt="Person reading"
                className="w-32 h-auto"
              />
            </div>
            <div className="bg-white/80 rounded-lg p-6 mb-6">
              <p className="text-gray-800 font-poppins font-medium">
                No complex jargon. No overwhelming lectures. Just pure
                connection with Allah's words.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Most People Struggle with the Qur'an section */}
      <section className="relative py-20 bg-[#FFFCF4]">
        <div className="container mx-auto py-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <p className="text-[#392618] font-italiana text-3xl">
                  The Story Of
                </p>
                <h2 className="text-5xl font-abhaya font-bold mb-4 text-[#121212]">
                  Why Most People Struggle with the Qur'an
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 font-poppins text-md">
                  Many people want to connect with the Qur'an but face
                  challenges:
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <div className="bg-white rounded-full py-2 px-6 shadow-sm flex-1">
                      <p className="text-gray-800 font-poppins text-md font-bold">
                        "I don't have time for long classes."{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <div className="bg-white rounded-full py-2 px-6 shadow-sm flex-1">
                      <p className="text-gray-800 font-poppins text-md font-bold">
                        "It's too difficult to understand."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <div className="bg-white rounded-full py-2 px-6 shadow-sm flex-1">
                      <p className="text-gray-800 font-poppins text-md font-bold">
                        "I don't know where to start."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <div className="bg-white rounded-full py-2 px-6 shadow-sm flex-1">
                      <p className="text-gray-800 font-poppins text-md font-bold">
                        "I forget what I learn and struggle to apply it."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 italic mb-1 font-poppins text-xl">
                "And We have certainly made the Qur'an easy for remembrance, so
                is there anyone who will remember?"
              </p>
              <p className="text-gray-800 font-bold mb-8 font-poppins text-xl">
                — Surah Al-Qamar (54:17)
              </p>

              <hr className="border-gray-300 my-8" />

              <p className="text-gray-800 font-medium text-lg mb-12">
                This class is designed to remove these struggles — so you in a
                way that fits your life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <img
                    src="/selling_frame1.png"
                    alt="Simple"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-bold text-gray-800">SIMPLE</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/selling_frame2.png"
                    alt="Structured"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-bold text-gray-800">STRUCTURED</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/selling_frame3.png"
                    alt="Impactful"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="font-bold text-gray-800">DEEPLY IMPACTFUL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section */}
      <section className="relative py-20 w-full overflow-hidden">
        <div className="w-full">
          <img
            src="/selling_banner2.png"
            alt="Banner"
            className="w-full h-[800px] object-cover"
          />
        </div>
      </section>
      {/* Community Support Section */}
      <CommunitySupportSection />

      {/* Who Is This For? Section */}
      <section className="relative py-16 bg-[#475842] text-white pt-32">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4">
            {/* Image with rounded corners - positioned to overlap the section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-5xl px-4">
              <img
                src="/cave_people.png"
                alt="People meeting in a cave"
                className="w-full h-auto object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Content starts lower to accommodate the overlapping image */}
            <div className="text-center mb-12 mt-60">
              <h2 className="text-4xl md:text-5xl font-abhaya font-bold mb-4">
                Who Is This For?
              </h2>
              <p className="text-white/80 font-poppins text-lg">
                Clearly define who will benefit from your course
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1 */}
              <div className="bg-white rounded-lg p-8">
                <div className="text-black">
                  <h3 className="text-4xl font-abhaya font-bold mb-6 text-center">
                    01
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <p className="font-poppins">
                        If you struggle with understanding the Quran and wants
                        to <span className="font-bold">understand</span> the
                        Quran, not just read it.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-white rounded-lg p-8">
                <div className="text-black">
                  <h3 className="text-4xl font-abhaya font-bold mb-6 text-center">
                    02
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <p className="font-poppins">
                        If you feel{" "}
                        <span className="font-bold italic">disconnected</span>{" "}
                        from Allah's words and wants to strengthen your
                        relationship with Allah
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-white rounded-lg p-8">
                <div className="text-black">
                  <h3 className="text-4xl font-abhaya font-bold mb-6 text-center">
                    03
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <p className="font-poppins">
                        If you struggle with consistency in learning and you
                        need structured,{" "}
                        <span className="font-bold">easy-to-follow</span>{" "}
                        lessons
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 4 */}
              <div className="bg-white rounded-lg p-8">
                <div className="text-black">
                  <h3 className="text-4xl font-abhaya font-bold mb-6 text-center">
                    04
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <p className="font-poppins">
                        If you want to be{" "}
                        <span className="font-bold">
                          part of a supportive learning environment
                        </span>{" "}
                        that keeps you motivated, and an{" "}
                        <span className="font-bold">interactive</span> and{" "}
                        <span className="font-bold">engaging</span> learning
                        instead of passive studying
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-white font-poppins text-xl">
                If any of this sounds like you, these classes were made for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Course Breakdown) Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-5xl font-abhaya font-bold mb-4">
                How It Works
              </h2>
              <h3 className="text-5xl md:text-5xl font-abhaya mb-6">
                (Course Breakdown)
              </h3>

              <div className="flex justify-center items-center mb-2">
                <p className="text-gray-600 font-poppins">
                  Clearly define the benefit from your course:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/how_itworks_selling1.jpg"
                  alt="Daily Classes"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold font-abhaya mb-2">
                    Daily 10 - 15 Minute Classes
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    No long commitments, just focused learning.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/how_itworks_selling2.jpg"
                  alt="Live Sessions"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold font-abhaya mb-2">
                    Live Sessions Recordings Available
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    Join live or watch at your own pace.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/how_itworks_selling3.jpg"
                  alt="WhatsApp Group"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold font-abhaya mb-2">
                    Private WhatsApp Group Access
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    Ask questions, reflect, and stay engaged.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/how_itworks_selling4.jpg"
                  alt="Simple Lessons"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold font-abhaya mb-2">
                    Simple, Practical Lessons
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    No overwhelm, just clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surah Al-Asr Banner Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full h-[400px] md:h-[500px] relative">
          <div className="absolute inset-0 bg-[url('/selling_asar.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-abhaya font-bold mb-6">
              Surah Al-Asr 103 - "By Time!
            </h2>

            <p className="text-lg md:text-xl max-w-3xl mx-auto font-poppins mb-8">
              "Imagine finally understanding the Quran in a way that brings
              peace, clarity, and purpose to your life. Join today and take the
              first step toward a deeper connection with Allah!"
            </p>

            <Link
              to="/login"
              className="bg-[#D9BC86] text-[#392618] px-8 py-3 rounded-full font-raleway font-bold hover:bg-[#c9ad79] transition-colors"
            >
              ENROL NOW
            </Link>
          </div>
        </div>
      </section>
      {/* My vision section */}
      <section className="section-padding bg-[#EEF5FF]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass-card p-6">
                <img
                  src={"/selling_scrols.png"}
                  alt="About us"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl font-bold font-abhaya">My Vision</h2>
              <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
                He has certainly succeeded who purifies himself And mentions the
                name of his Lord and prays. But you prefer the worldly life,
                While the Hereafter is better and more enduring. Indeed, this is
                Selling Page 7 in the former scriptures, The scriptures of
                Abraham and Moses. Surah Al-A’la 14 - 19
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our clients section */}
      <ClientsCarousel />

      {/* FAQ section */}
      <FrequentAQ />
      <Footer />
    </div>
  );
};

export default About;
