import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGem,
  FaAward,
  FaTruck,
  FaClock,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-4 lg:pt-8">
      {/* ─── HERO COVER BANNER STRIPE ─── */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden rounded-2xl max-w-6xl mx-auto shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15),transparent_75%)] animate-pulse duration-4000" />
        <div className="container mx-auto max-w-3xl relative z-10 space-y-4">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block bg-slate-800/60 px-3 py-1 rounded-full w-fit mx-auto border border-slate-700/50">
            The Art of Fragrance
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black tracking-wide uppercase text-white drop-shadow-md">
            About{" "}
            <span className="text-amber-500 font-light lowercase italic capitalize">
              Joyce Perfumier
            </span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal max-w-xl mx-auto px-2">
            Nairobi's elite multi-brand hub for authentic designer fragrance
            vectors, masterclass horology watches, and pristine custom gift
            boxes.
          </p>
        </div>
      </div>

      {/* ─── HIGH-CONTRAST VISUAL IMAGE CATALOG GRID ─── */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Boutique Display */}
          <div className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div className="h-56 bg-slate-100 overflow-hidden relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80"
                alt="Luxury Perfume Boutique Aesthetic Display"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-xs font-extrabold uppercase tracking-widest drop-shadow">
                Our Boutique Atmosphere
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-2">
                Experience an immersive world of luxury tailored to help you
                find your unique seasonal signature scent profiles.
              </p>
              <span className="text-[11px] text-amber-600 font-bold uppercase tracking-wider block mt-2">
                Premium Curation
              </span>
            </div>
          </div>

          {/* Card 2: Exquisite Vanity Bottle Arrays */}
          <div className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div className="h-56 bg-slate-100 overflow-hidden relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80"
                alt="Designer Perfume Bottle Display Vanity Elegant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-xs font-extrabold uppercase tracking-widest drop-shadow">
                Curated Masterpieces
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-2">
                Every single bottle inside our catalog is meticulously audited
                to ensure a flawless retail batch code history.
              </p>
              <span className="text-[11px] text-amber-600 font-bold uppercase tracking-wider block mt-2">
                100% Verified Genuine
              </span>
            </div>
          </div>

          {/* Card 3: Curated Gift Wrapping */}
          <div className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div className="h-56 bg-slate-100 overflow-hidden relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80"
                alt="Luxury Perfume Gift Sets Packaging Curated"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-xs font-extrabold uppercase tracking-widest drop-shadow">
                Presentation Giftboxes
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-2">
                Unbox perfection with our custom structural gift linings
                engineered to deliver lasting sensory impressions.
              </p>
              <span className="text-[11px] text-amber-600 font-bold uppercase tracking-wider block mt-2">
                Bespoke Packaging
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BRAND CHRONICLE STORY LINE ─── */}
      <div className="container mx-auto px-4 py-8 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl md:text-2xl font-serif font-black text-slate-900 tracking-wide uppercase border-b-2 pb-3 border-amber-500 w-fit">
            Crafting Unforgettable Memories
          </h2>
          <p className="text-slate-800 font-medium text-xs md:text-sm leading-relaxed">
            Founded on the principle of uncompromised sensory distinction,{" "}
            <span className="font-bold text-slate-950">Joyce Perfumier</span>{" "}
            has evolved into a premier luxury standard bearer across Nairobi. We
            operate on the ethos that a premium perfume behaves as an intimate
            extension of character—a silent dialogue that captures presence and
            commands memory long after you leave the room.
          </p>
          <p className="text-slate-800 font-medium text-xs md:text-sm leading-relaxed">
            By maintaining deep verified supply pipelines with leading global
            distribution houses, we bridge the divide between international
            design luxury and local fragrance collectors in Kenya. Our display
            rows carefully interlace the high-volume projection of Arabian oud
            expressions with the pristine, delicate finish of classical European
            extraits.
          </p>
        </div>

        {/* Decorative Blueprint Block Quotes */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-2xl shadow-md text-center space-y-5 relative min-h-[220px] flex flex-col justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-md border border-amber-500">
            Our Core Blueprint
          </div>
          <p className="font-serif italic text-base md:text-xl text-slate-100 pt-2 leading-relaxed font-medium drop-shadow-sm">
            "To curate absolute authenticity, eliminate the distribution barrier
            for local genuine enthusiasts, and provide world-class unboxing
            visuals across every package."
          </p>
          <div className="text-[10px] text-amber-500 font-mono font-bold tracking-widest uppercase pt-2">
            — The Joyce Perfumier Executive Bench
          </div>
        </div>
      </div>

      {/* ─── HIGH-CONTRAST VALUE CARDS MATRIX ─── */}
      <div className="bg-white border-y border-slate-200 py-16 px-4 mt-16 shadow-inner">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h3 className="text-center font-serif text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase">
            The Pillars of Our Customer Service
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-xl text-xl shadow">
                <FaGem />
              </div>
              <h4 className="font-black text-xs md:text-sm text-slate-900 tracking-wider uppercase">
                100% Genuine Only
              </h4>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                Zero-tolerance loop for counterfeits or replicas. Every batch
                code stands cataloged for audit trail checks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-xl text-xl shadow">
                <FaAward />
              </div>
              <h4 className="font-black text-xs md:text-sm text-slate-900 tracking-wider uppercase">
                Elite Selection Layouts
              </h4>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                We consistently track elite, luxury trends alongside classic
                designer staples to offer the best choices across Kenya.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-xl text-xl shadow">
                <FaTruck />
              </div>
              <h4 className="font-black text-xs md:text-sm text-slate-900 tracking-wider uppercase">
                Express Distribution
              </h4>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                Same-day messenger runs directly inside the Nairobi CBD area,
                paired with express courier service countrywide.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-xl text-xl shadow">
                <FaClock />
              </div>
              <h4 className="font-black text-xs md:text-sm text-slate-900 tracking-wider uppercase">
                Consultative Guidance
              </h4>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                Our direct support lines provide real-time recommendations to
                guide you smoothly to your ideal match choice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DUAL-ACTION CONTEXTUAL CALL TO ACTION ─── */}
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10">
          <h3 className="font-serif text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-wide">
            Ready to Begin Your Scent Journey?
          </h3>
          <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Return to our main home displays to explore trending gift items, or
            connect directly with our studio concierge numbers for real-time
            order configuration help.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-colors duration-300"
            >
              <FaHome /> Return to Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-colors duration-300"
            >
              <FaPhoneAlt /> Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
