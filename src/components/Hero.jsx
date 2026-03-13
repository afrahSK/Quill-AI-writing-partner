const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-12 overflow-hidden bg-[#080C14]">

      {/* Glowing background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F8EF7]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#4F8EF7]/5 blur-[80px] pointer-events-none" />

    

      {/* Main heading */}
      <h1 className="font-display text-center text-[6.5vw] font-semibold leading-none text-[#E8EEF7] mb-6 max-w-5xl m-8">
        Write Less.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#a78bfa]">
          Say More.
        </span>
      </h1>

      {/* Subheading */}
      <p className="font-body text-center text-lg text-[#8B9BB4] max-w-xl leading-relaxed mb-10">
        Quill is your AI writing partner — drafts emails, blogs, ad copy and more in seconds. Built for teams who ship fast.
      </p>

      {/* CTA buttons */}
      <div className="flex items-center gap-4 mb-20">
        <a
          href="#pricing"
          className="font-body text-sm px-8 py-4 bg-[#4F8EF7] text-white rounded-full hover:bg-[#3a7ae8] transition-all duration-300"
        >
          Start for Free →
        </a>
        <a
          href="#features"
          className="font-body text-sm px-8 py-4 border border-[#1E2D40] text-[#8B9BB4] rounded-full hover:border-[#4F8EF7] hover:text-[#E8EEF7] transition-all duration-300"
        >
          See How It Works
        </a>
      </div>

      
      {/* Social proof below mockup */}
      <div className="mt-10 flex items-center gap-8">
        <p className="font-body text-xs text-[#8B9BB4]">Trusted by 12,000+ writers & teams</p>
        <div className="flex gap-6">
          {["Notion", "Shopify", "Linear", "Vercel"].map((brand) => (
            <span key={brand} className="font-display text-sm font-medium text-[#1E2D40]">
              {brand}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;