import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    section: "General",
    qa: [
      {
        question: "How can I try the software?",
        answer: (
          <span>
            Wise Twin offer a variety of software licenses, 
            and free trials of early digital twin projects to showcase our platform.
            By completing the registration form, you will discover our free demo.
          </span>
        ),
      },
      {
        question: "Which industries can benefit from Wise Twin's solutions?",
        answer: (
          <span>Wise Twin's solutions are versatile and can be applied to various industries including energy, manufacturing, healthcare, agriculture, real estate, and more.</span>
        ),
      },

      {
        question: "What is a Digital Twin and how does it work?",
        answer: (
          <span>A Digital Twin is a virtual replica of a physical object or system. It uses real-time data and simulations to provide insights and optimize performance. See
            <a href="/ressources/about/digital-twin"><strong> What is a Digital Twin?</strong></a>
          </span>
        ),
      },

      {
        question: "How to implement a Digital Twin?",
        answer: (
          <span>A practical guide to implementing Digital Twin technology in Industry 4.0. See
            <a href="/ressources/blog/how-to-implement-a-digital-twin"><strong> How to implement a Digital Twin?</strong></a>
          </span>
        ),
      },



    ],
  },
  {
    section: "Support",
    qa: [
      {
        question: "I have specific needs for my use case, do you provide support for this?",
        answer: (
          <span>
            Yes! Depending on your subscription plan, we provide technical support for the platform itself.
          </span>
        ),
      },
      {
        question: "How can I contact technical support?",
        answer: (
          <span>You can reach our technical support team by emailing support@wisetwin.eu or through our support portal.</span>
        ),
      },
      {
        question: "What kind of training is provided for new users?",
        answer: (
          <span>We offer comprehensive training programs including online tutorials, webinars, and on-site training sessions depending on your subscription plan.</span>
        ),
      },
    ],
  },
  {
    section: "Customization",
    qa: [
      {
        question: "Can I modify my Digital Twin once acquired?",
        answer: (
          <span>
            Absolutely! We provide all the necessary support for your specific needs, and our digital twins are evolutive, meaning that they can be infinitely modified in real time!
          </span>
        ),
      },
      {
        question: "I already have monitoring systems, can I integrate them into Wise Twin's solutions?",
        answer: (
          <span>For sure! We offer basic plans for implementing your own dashboards to your 3D Digital Twins.
          </span>
        ),
        
      },
    ],
  },
  {
    section: "Security",
    qa: [
      {
        question: "How secure is my data on Wise Twin's platform?",
        answer: (
          <span>We prioritize security and ensure that your data is protected with advanced encryption and security protocols.</span>
        ),
      },
      {
        question: "Is that possible to get the software on premise?",
        answer: (
          <span>
            We now offer on-premise installations. Our process is evolutive with a tailor-made cloud-based building for agile development. Both cloud and on-premise permit to access the digital twin from anywhere, securely and easily.
          </span>
        ),
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
              You are still hesitating? Here are some of the most common
              questions we get.
            </p>
          </div>
          <div className="container mx-auto my-12 max-w-[600px] space-y-12">
            {faqs.map((faq, idx) => (
              <section key={idx} id={"faq-" + faq.section}>
                <h2 className="mb-4 text-left text-base font-semibold tracking-tight text-foreground/60">
                  {faq.section}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col"
                >
                  {faq.qa.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={faq.question}
                      className="w-full max-w-[600px]"
                    >
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
          <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
            Still have questions? Email us at{" "}
            <a href="mailto:support@wisetwin.eu" className="underline">
              support@wisetwin.eu
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
}
