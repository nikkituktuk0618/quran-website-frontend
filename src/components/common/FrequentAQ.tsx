import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentAQ = () => {
  return (
    <section id="faq" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about our Quran learning program
          </p>
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
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card"
              >
                <AccordionTrigger className="px-6 text-lg font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-secondary-foreground/80">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentAQ;
