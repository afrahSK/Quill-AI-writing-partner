import { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "Is there a free plan?",
      a: "Yes! Our Starter plan is free forever with 50 generations per month. No credit card required to get started.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. No contracts, no lock-ins. Cancel from your dashboard in one click and you won't be charged again.",
    },
    {
      q: "Is my data used to train your models?",
      a: "Never. Your content is yours. We do not use your writing to train any AI models. Everything is encrypted and private.",
    },
    {
      q: "What languages does Quill support?",
      a: "Quill supports 50+ languages including English, Spanish, French, German, Japanese, Arabic, Hindi and many more.",
    },
    {
      q: "Can I use Quill for my whole team?",
      a: "Yes — our Team plan includes unlimited seats, an admin dashboard, and shared brand voice settings for consistent output across your team.",
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 7-day money-back guarantee on all paid plans. If you're not happy, just reach out and we'll sort it.",
    },
  ];

  return (
    <section id="faq" className="bg-[#0D1117] px-12 py-32">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4F8EF7] mb-4">
          FAQ
        </p>
        <h2 className="font-display text-[4vw] font-semibold text-[#E8EEF7]">
          Got questions?
        </h2>
      </div>

      {/* FAQ list */}
      <div className="max-w-3xl mx-auto flex flex-col divide-y divide-[#1E2D40]">
        {faqs.map((faq, i) => (
          <div key={i} className="py-6 cursor-pointer" onClick={() => setActive(active === i ? null : i)}>
            <div className="flex justify-between items-center gap-4">
              <p className="font-display text-lg text-[#E8EEF7]">
                {faq.q}
              </p>
              <span className={`text-[#4F8EF7] text-xl transition-transform duration-300 shrink-0 ${active === i ? "rotate-45" : ""}`}>
                +
              </span>
            </div>
            {active === i && (
              <p className="font-body text-sm text-[#8B9BB4] leading-relaxed mt-4">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;