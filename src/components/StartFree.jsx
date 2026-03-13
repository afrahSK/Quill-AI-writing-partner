const Startfree = () => {
  return (
    <section className="bg-[#080C14] px-12 py-32 relative overflow-hidden" id="startfree">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F8EF7]/8 blur-[120px] pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 max-w-4xl mx-auto rounded-3xl border border-[#1E2D40] bg-[#0D1117] p-20 flex flex-col items-center text-center overflow-hidden">

        {/* Inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#4F8EF7] to-transparent" />

        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4F8EF7] mb-6">
          Get Started Today
        </p>
        <h2 className="font-display text-[4vw] font-semibold text-[#E8EEF7] leading-tight mb-6">
          Your first draft is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#a78bfa]">
            one click away
          </span>
        </h2>
        <p className="font-body text-[#8B9BB4] max-w-md leading-relaxed mb-10">
          Join 12,000+ writers and teams already using Quill to ship better content, faster. Free to start. No credit card needed.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-body text-sm px-10 py-4 bg-[#4F8EF7] text-white rounded-full hover:bg-[#3a7ae8] transition-all duration-300"
          >
            Start Writing Free →
          </a>
          <a
            href="#"
            className="font-body text-sm px-10 py-4 border border-[#1E2D40] text-[#8B9BB4] rounded-full hover:border-[#4F8EF7] hover:text-[#E8EEF7] transition-all duration-300"
          >
            Book a Demo
          </a>
        </div>

        {/* Small trust note */}
        <p className="font-mono text-xs text-[#1E2D40] mt-8">
          No credit card · Cancel anytime · Free forever plan
        </p>
      </div>
    </section>
  );
};

export default Startfree;