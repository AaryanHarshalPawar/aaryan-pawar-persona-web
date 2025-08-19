import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is NSDR and how does it help with sleep?",
      answer: "NSDR (Non-Sleep Deep Rest) is a powerful relaxation technique that puts your body into a state of deep rest while keeping your mind aware. It helps reset your nervous system, reduces stress, and significantly improves sleep quality. Many participants report falling asleep faster and experiencing deeper, more restorative sleep."
    },
    {
      question: "How long does it take to see results from meditation practice?",
      answer: "Most people begin to notice positive changes within 1-2 weeks of consistent practice. These can include better sleep, reduced stress, improved focus, and a greater sense of inner calm. However, the transformational benefits often become more pronounced after 4-6 weeks of regular practice."
    },
    {
      question: "Do I need any prior experience with meditation?",
      answer: "Not at all! All my programs are designed for complete beginners. I guide you step-by-step through each technique, starting with simple practices and gradually building your skills. Whether you're new to meditation or looking to deepen your practice, you'll find the right level of support."
    },
    {
      question: "How much time do I need to practice each day?",
      answer: "You can start with just 5-10 minutes per day. The key is consistency rather than duration. My programs include practices ranging from 5-minute stress relief sessions to 30-minute deep transformation experiences, so you can choose what fits your schedule."
    },
    {
      question: "What makes your approach different from other meditation teachers?",
      answer: "My approach combines ancient wisdom with modern science, particularly focusing on NSDR and Yoga Nidra techniques that are backed by neuroscience research. I specialize in practical methods that work for busy, modern lives, and I've personally guided over 8,000 people through their wellness journey."
    },
    {
      question: "Can meditation really help with anxiety and stress?",
      answer: "Yes, absolutely. Meditation and NSDR practices activate your parasympathetic nervous system, which is responsible for the 'rest and digest' response. This helps reduce cortisol levels, lower heart rate, and create a natural state of calm. Many of my students report significant reductions in anxiety and stress levels."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about starting your meditation and wellness journey
          </p>
        </header>

        <Card className="calm-shadow border-0 bg-card">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* FAQ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;