import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentAQ = () => {
  return (
    <section id="faq" className="section-padding bg-[#525B44] text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-white font-italiana text-3xl">
            Ask Your Query
          </p>
          <h2 className="text-5xl font-abhaya font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What level of Arabic is required to start?",
                a: "No prior knowledge of Arabic is required. We have courses for complete beginners and will guide you through the basics.",
              },
              {
                q: "How are the online classes conducted?",
                a: "Classes are conducted through video conferencing with qualified instructors. Sessions are interactive and tailored to your learning pace.",
              },
              {
                q: "What materials do I need for the classes?",
                a: "You'll need a stable internet connection, a device with a camera and microphone, and we'll provide all the necessary learning materials.",
              },
              {
                q: "What materials do I need for the classes?",
                a: "You'll need a stable internet connection, a device with a camera and microphone, and we'll provide all the necessary learning materials.",
              },
              {
                q: "What materials do I need for the classes?",
                a: "You'll need a stable internet connection, a device with a camera and microphone, and we'll provide all the necessary learning materials.",
              },
              {
                q: "What materials do I need for the classes?",
                a: "You'll need a stable internet connection, a device with a camera and microphone, and we'll provide all the necessary learning materials.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white glass-card"
              >
                <AccordionTrigger className="px-6 text-lg font-medium text-black">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-black">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrequentAQ;
