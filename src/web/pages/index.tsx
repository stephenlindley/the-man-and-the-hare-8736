import { useState, useEffect, useRef } from "react";

const BookStar = () => (
  <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Only update parallax when hero is in view
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e8e4dc] overflow-hidden relative">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1612_0%,_#0a0908_50%,_#050403_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(139,90,43,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(76,102,76,0.06)_0%,_transparent_50%)]" />
        {/* Celtic knot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C15.3 5 5 15.3 5 30s10.3 25 25 25 25-10.3 25-25S44.7 5 30 5zm0 45c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z' fill='%23a88f6a' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Mist effect */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/80 to-transparent" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
          {/* Hero background image with parallax */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background image of Celtic standing stones */}
            <img 
              src="./hero-background.jpg" 
              alt="" 
              className="hero-bg-img absolute inset-0 w-full h-[120%] object-cover will-change-transform"
              style={{
                transform: `translateY(${scrollY * 0.4}px)`,
                top: '-10%',
                objectPosition: 'right center',
              }}
            />
            <style>{`
              @media (min-width: 1200px) {
                .hero-bg-img { object-position: center center !important; }
              }
            `}</style>
            
            {/* Dark overlay gradient for text readability - lightened to show more background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/40 via-[#0a0908]/25 to-[#0a0908]/70" />
            
            {/* Additional radial overlay to enhance center text area - lightened */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,9,8,0.15)_0%,rgba(10,9,8,0.35)_50%,rgba(10,9,8,0.6)_100%)]" />
            
            {/* Subtle golden atmospheric glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,89,0.08)_0%,transparent_50%)]" />
            
            {/* Bottom fade to match page background - lightened */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/60 to-transparent" />
          </div>
          <div 
            className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Decorative element */}
            <div className="mb-8 flex justify-center">
              <svg className="w-24 h-8 text-[#8b5a2b]/60" viewBox="0 0 120 32">
                <path d="M0 16h45 M75 16h45" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="60" cy="16" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="60" cy="16" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="font-serif leading-[0.9] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              <span className="block text-5xl sm:text-5xl md:text-6xl lg:text-[7.5rem] tracking-[0.08em] font-normal text-[#ecedd1] drop-shadow-[0_0_40px_rgba(201,169,89,0.25)]">
                THE MAN
              </span>
              <span className="block text-[#e8e4dc]/60 text-xl sm:text-2xl md:text-3xl my-4 tracking-[0.6em] font-light">&</span>
              <span className="block text-5xl sm:text-5xl md:text-6xl lg:text-[7.5rem] tracking-[0.08em] font-normal text-[#ecedd1] drop-shadow-[0_0_40px_rgba(201,169,89,0.25)]">
                THE HARE
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl md:text-2xl text-[#babb99] italic tracking-wide mt-6 mb-4 transition-all duration-1500 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The land remembers lest we forget
            </p>

            {/* Author */}
            <p 
              className={`text-sm sm:text-base tracking-[0.3em] uppercase text-[#babb99] mt-8 transition-all duration-1500 delay-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              by Stephen Lindley
            </p>

            {/* Rating */}
            <div 
              className={`flex items-center justify-center gap-1 mt-6 transition-all duration-1500 delay-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <BookStar /><BookStar /><BookStar /><BookStar /><BookStar />
              <span className="ml-2 text-[#babb99] text-sm">5.0 / 5</span>
            </div>

            {/* CTA */}
            <div 
              className={`mt-12 transition-all duration-1500 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="https://www.amazon.co.uk/dp/B0G819RYX9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#8b5a2b] to-[#6d4520] text-[#f5f0e8] font-medium tracking-wider uppercase text-sm rounded hover:from-[#a06830] hover:to-[#8b5a2b] transition-all duration-300 shadow-lg shadow-black/30"
              >
                <span>Available on Amazon UK</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-[#8b7355]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Synopsis Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a2b]/30 to-transparent" />
          
          <div className="max-w-3xl mx-auto">
            <h2 
              className="text-center text-2xl sm:text-3xl text-[#ecedd1] mb-16 tracking-wider"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Story
            </h2>

            <div 
              className="text-[#c4bba8] leading-relaxed space-y-6 text-base sm:text-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#c9a959] first-letter:float-left first-letter:mr-3 first-letter:mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                In a land where memory is older than kings and every field holds the echo of a story, a nameless man awakens to a world unraveling. Drawn by a relic carved from myth and moonlight, he is thrust into a conflict older than Camelot itself.
              </p>

              <p>
                Balor, the god of endings, has broken free. His shadow poisons the rivers, empties villages, and turns despair into an army. To stand against him, the man must walk the seam between worlds: the everyday soil under his feet, and the ancient realm that breathes just beneath it.
              </p>

              <p>
                Guided by Merlin, hunted by Mordred, and joined by the fae who remember the first dawn, he becomes something neither wholly mortal nor wholly legend—a vessel for the land's last hope.
              </p>

              <p>
                As Camelot burns and the old powers wake, he must choose what he is willing to become, and what he is willing to lose, to keep the world from slipping into oblivion.
              </p>

              <div className="pt-8 border-t border-[#8b5a2b]/20 mt-12">
                <p className="text-[#a88f6a] italic text-center">
                  "A meditation on transformation, belonging, and the thin boundary between the ordinary and the eternal. Rooted in Celtic myth and told with the stark beauty of a dying dawn, it is a story of a man finding his place in a world where field and legend share the same breath, and where the land remembers, even when its people forget."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Details Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a2b]/30 to-transparent" />
          
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-center text-2xl sm:text-3xl text-[#ecedd1] mb-16 tracking-wider"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Book Details
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Publication', value: 'December 15, 2025' },
                { label: 'Pages', value: '112' },
                { label: 'Genre', value: 'Fantasy / Celtic Mythology / Arthurian' },
                { label: 'ISBN', value: '979-8277364819' },
              ].map((detail, index) => (
                <div key={index} className="text-center">
                  <p className="text-[#8b7355] text-xs tracking-[0.2em] uppercase mb-2">{detail.label}</p>
                  <p className="text-[#e8e4dc] text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a2b]/30 to-transparent" />
          
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              className="text-2xl sm:text-3xl text-[#ecedd1] mb-8 tracking-wider"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              About the Author
            </h2>

            <p className="text-[#c4bba8] leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="text-[#e8e4dc] font-semibold">Stephen Lindley</span> weaves tales that blur the boundaries between the mundane and the mythical. Drawing from the rich tapestry of Celtic folklore and Arthurian legend, his writing explores themes of identity, transformation, and humanity's eternal connection to the land and its stories.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a2b]/30 to-transparent" />
          
          <div className="max-w-2xl mx-auto text-center">
            <p 
              className="text-xl sm:text-2xl text-[#a88f6a] italic mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Where field and legend share the same breath"
            </p>

            <a
              href="https://www.amazon.co.uk/dp/B0G819RYX9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#8b5a2b] to-[#6d4520] text-[#f5f0e8] font-medium tracking-wider uppercase text-sm rounded hover:from-[#a06830] hover:to-[#8b5a2b] transition-all duration-300 shadow-lg shadow-black/30"
            >
              <span>Get Your Copy Now</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[#8b5a2b]/20 to-transparent mb-8" />
          <p className="text-[#8b7355] text-xs tracking-wider">
            © 2025{" "}
            <a 
              href="mailto:stephenlindley@btinternet.com" 
              className="hover:text-[#babb99] transition-colors"
            >
              Stephen Lindley
            </a>
            . All rights reserved.
          </p>
        </footer>
      </main>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      `}</style>
    </div>
  );
}

export default Index;
