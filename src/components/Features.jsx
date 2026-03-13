const Features = () => {
  const mainFeatures = [
    {
      icon: "⚡",
      title: "10x Faster Writing",
      desc: "Generate full drafts in seconds. No more staring at blank pages — just describe what you need and Quill handles the rest.",
    },
    {
      icon: "🎯",
      title: "Tone Control",
      desc: "Switch between professional, casual, persuasive or creative tones instantly. Your voice, amplified by AI.",
    },
    {
      icon: "🌐",
      title: "50+ Languages",
      desc: "Write in any language. Quill understands context and nuance across 50+ languages for global teams.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      desc: "Your data never trains our models. Everything you write stays yours — encrypted, private, secure.",
    },
  ];

  const terminalLines = [
    { prompt: "$", text: "quill generate --type email --tone professional", color: "#8B9BB4" },
    { prompt: "→", text: "Analyzing context...", color: "#4F8EF7" },
    { prompt: "→", text: "Generating draft...", color: "#4F8EF7" },
    { prompt: "✓", text: "Done in 1.2s", color: "#28C840" },
    { prompt: "", text: "", color: "" },
    { prompt: "$", text: "Subject: Partnership Opportunity — Q1 2025", color: "#E8EEF7" },
    { prompt: "", text: "Hi Sarah,", color: "#8B9BB4" },
    { prompt: "", text: "I wanted to reach out regarding a potential", color: "#8B9BB4" },
    { prompt: "", text: "collaboration that could benefit both our teams...", color: "#8B9BB4" },
  ];

  return (
    <section id="features" className="bg-[#080C14] px-12 py-32">

      {/* Header */}
      <div className="text-center mb-20">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4F8EF7] mb-4">
          Features
        </p>
        <h2 className="font-display text-[4vw] font-semibold text-[#E8EEF7] mb-4">
          Everything you need to write{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#a78bfa]">
            brilliantly
          </span>
        </h2>
        <p className="font-body text-[#8B9BB4] max-w-xl mx-auto leading-relaxed">
          Quill isn't just autocomplete. It's a full writing system built for professionals who care about quality.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {mainFeatures.map((feature) => (
          <div
            key={feature.title}
            className="group p-6 rounded-2xl border border-[#1E2D40] bg-[#0D1117] hover:border-[#4F8EF7]/40 hover:bg-[#4F8EF7]/5 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="font-display text-lg font-semibold text-[#E8EEF7] mb-3">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-[#8B9BB4] leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Big feature highlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Left — Terminal mockup */}
        <div className="rounded-2xl border border-[#1E2D40] bg-[#0D1117] overflow-hidden">
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-[#1E2D40]">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 font-mono text-xs text-[#8B9BB4]">quill — terminal</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 space-y-2">
            {terminalLines.map((line, i) => (
              <div key={i} className="flex gap-3 font-mono text-sm">
                <span style={{ color: line.color }} className="shrink-0">
                  {line.prompt}
                </span>
                <span style={{ color: line.color }}>
                  {line.text}
                </span>
              </div>
            ))}
            {/* Blinking cursor */}
            <div className="flex gap-3 font-mono text-sm">
              <span className="text-[#8B9BB4]">$</span>
              <span className="w-2 h-4 bg-[#4F8EF7] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex flex-col gap-6 px-6">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4F8EF7]">
            How It Works
          </p>
          <h3 className="font-display text-4xl font-semibold text-[#E8EEF7] leading-tight">
            Describe it. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#a78bfa]">
              Quill writes it.
            </span>
          </h3>
          <p className="font-body text-[#8B9BB4] leading-relaxed">
            Just tell Quill what you need — the format, the tone, the audience. It handles structure, flow and language so you can focus on ideas.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              "Emails & cold outreach",
              "Blog posts & articles",
              "Ad copy & landing pages",
              "LinkedIn & social content",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/30 flex items-center justify-center text-[#4F8EF7] text-xs">
                  ✓
                </span>
                <span className="font-body text-sm text-[#8B9BB4]">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#pricing"
            className="self-start font-body text-sm px-8 py-4 bg-[#4F8EF7] text-white rounded-full hover:bg-[#3a7ae8] transition-all duration-300 mt-4"
          >
            Try It Free →
          </a>
        </div>
      </div>

    </section>
  );
};

export default Features;