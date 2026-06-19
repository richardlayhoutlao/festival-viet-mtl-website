export default function FAQPage() {
  const faqs = [
    {
      question: "When and where is the festival?",
      answer:
        "The Vietnamese Festival of Montreal takes place annually in the summer. Check our contact page for the latest dates and location details.",
    },
    {
      question: "Is there an admission fee?",
      answer:
        "General admission is free. Some ticketed events or shows may require a separate ticket purchase.",
    },
    {
      question: "Is the festival family-friendly?",
      answer:
        "Absolutely! The festival welcomes people of all ages with activities, food, and performances suited for the whole family.",
    },
    {
      question: "Can I volunteer at the festival?",
      answer:
        "Yes! We welcome volunteers. Please reach out through our contact page to learn about volunteer opportunities.",
    },
    {
      question: "Is parking available on-site?",
      answer:
        "Parking availability depends on the venue. We recommend using public transit or nearby paid parking lots.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "For the safety and comfort of all attendees, pets are not permitted at the festival grounds unless they are certified service animals.",
    },
    {
      question: "How can I become a food vendor?",
      answer:
        "Vendors interested in participating can apply through our Food Vendors page. Applications open several months before the event.",
    },
    {
      question: "What payment methods are accepted at vendor booths?",
      answer:
        "Payment methods vary by vendor. We encourage vendors to accept both cash and card, but please carry some cash as a backup.",
    },
  ]

  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Have a question? Find answers to common inquiries below.
        </p>

        <div className="flex flex-col divide-y">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {question}
                <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
