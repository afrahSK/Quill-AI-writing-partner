import { useState } from "react";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: annual ? 0 : 0,
      desc: "Perfect for solo writers just getting started.",
      features: [
        "50 AI generations / month",
        "3 tones",
        "Email & blog formats",
        "Community support",
      ],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: annual ? 12 : 19,
      desc: "For professionals who write every day.",
      features: [
        "Unlimited generations",
        "All tones & formats",
        "50+ languages",
        "Priority support",
        "Team sharing",
        "Custom brand voice",
      ],
      cta: "Start Pro →",
      highlight: true,
    },
    {
      name: "Team",
      price: annual ? 39 : 59,
      desc: "For agencies and teams shipping content at scale.",
      features: [
        "Everything in Pro",
        "Unlimited team seats",
        "Admin dashboard",
        "API access",
        "SSO & permissions",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#080C14] px-12 py-32 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#4F8EF7]/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4F8EF7] mb-4">
          Pricing
        </p>
        <h2 className="font-display text-[4vw] font-semibold text-[#E8EEF7] mb-4">
          Simple,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#a78bfa]">
            honest
          </span>{" "}
          pricing
        </h2>
        <p className="font-body text-[#8B9BB4] mb-8">
          No hidden fees. Cancel anytime.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`font-body text-sm ${!annual ? "text-[#E8EEF7]" : "text-[#8B9BB4]"}`}>
            Monthly
          </span>
          <div
            className="w-12 h-6 rounded-full bg-[#1E2D40] cursor-pointer relative flex items-center px-1"
            onClick={() => setAnnual(!annual)}
          >
            <div className={`w-4 h-4 rounded-full bg-[#4F8EF7] transition-all duration-300 ${annual ? "translate-x-6" : "translate-x-0"}`} />
          </div>
          <span className={`font-body text-sm ${annual ? "text-[#E8EEF7]" : "text-[#8B9BB4]"}`}>
            Annual
          </span>
          {annual && (
            <span className="font-mono text-xs px-2 py-1 rounded-full bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20">
              Save 35%
            </span>
          )}
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300
              ${plan.highlight
                ? "bg-[#4F8EF7]/10 border-2 border-[#4F8EF7]/60 shadow-lg shadow-[#4F8EF7]/10"
                : "bg-[#0D1117] border border-[#1E2D40] hover:border-[#4F8EF7]/30"
              }`}
          >
            {/* Popular badge */}
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs px-4 py-1 rounded-full bg-[#4F8EF7] text-white">
                Most Popular
              </div>
            )}

            {/* Plan name & price */}
            <div>
              <p className="font-display text-lg font-semibold text-[#E8EEF7] mb-1">
                {plan.name}
              </p>
              <p className="font-body text-sm text-[#8B9BB4] mb-4">
                {plan.desc}
              </p>
              <div className="flex items-end gap-1">
                <span className="font-display text-5xl font-semibold text-[#E8EEF7]">
                  ${plan.price}
                </span>
                <span className="font-body text-sm text-[#8B9BB4] mb-2">
                  / month
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#1E2D40]" />

            {/* Features */}
            <div className="flex flex-col gap-3 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className={`text-sm ${plan.highlight ? "text-[#4F8EF7]" : "text-[#8B9BB4]"}`}>
                    ✓
                  </span>
                  <span className="font-body text-sm text-[#8B9BB4]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className={`text-center font-body text-sm py-3 rounded-full transition-all duration-300
                ${plan.highlight
                  ? "bg-[#4F8EF7] text-white hover:bg-[#3a7ae8]"
                  : "border border-[#1E2D40] text-[#8B9BB4] hover:border-[#4F8EF7] hover:text-[#E8EEF7]"
                }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;