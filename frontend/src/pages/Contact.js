import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard messaging delay / email routing payload action
    setTimeout(() => {
      toast.success("Thank you! Your message has been sent to our email team.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-8 lg:pt-12">
      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        {/* HEADER BRAND BANNER */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide uppercase text-slate-900">
            Contact{" "}
            <span className="text-amber-600 font-light lowercase italic capitalize">
              Shop
            </span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
            Have inquiries about our designer fragrances, order delivery
            protocols inside Kenya, or looking to set up a personalized gift
            box? Send us a line directly.
          </p>
        </div>

        {/* TWO COLUMN INTERACTIVE FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[320px,1fr] gap-8 bg-white border border-slate-100 rounded-2xl p-6 md:p-10 shadow-sm">
          {/* LEFT PANEL: CONTACT INFO MATRIX */}
          <div className="bg-slate-900 text-slate-300 p-6 rounded-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.1),transparent_70%)]" />

            <div className="space-y-6 relative z-10">
              <h3 className="font-serif font-bold text-white text-lg tracking-wide uppercase border-b border-slate-800 pb-2">
                Joyce Perfumier
              </h3>

              <ul className="space-y-4 text-xs font-light">
                <li className="flex items-start gap-3.5 leading-relaxed">
                  <FaMapMarkerAlt className="text-amber-500 mt-0.5 shrink-0 text-sm" />
                  <span>
                    Nairobi Central Business District, Capital Plaza, Shop 12,
                    Nairobi, Kenya
                  </span>
                </li>
                <li className="flex items-center gap-3.5">
                  <FaPhoneAlt className="text-amber-500 shrink-0" />
                  <a
                    href="tel:+254748583735"
                    className="hover:text-amber-500 transition-colors font-medium text-white"
                  >
                    +254 748 583735
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <FaEnvelope className="text-amber-500 shrink-0" />
                  <a
                    href="mailto:info@joyceperfumier.com"
                    className="hover:text-amber-500 transition-colors"
                  >
                    info@joyceperfumier.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-[10px] text-slate-500 font-mono tracking-wider pt-4 border-t border-slate-800 relative z-10">
              Response Window:{" "}
              <span className="text-slate-400 block">
                Mon - Sat (8:00 AM - 6:00 PM)
              </span>
            </div>
          </div>

          {/* RIGHT PANEL: INTERACTIVE FORM LAYOUT */}
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="border border-slate-200 rounded-lg p-2.5 outline-none focus:border-amber-500 bg-slate-50/50 focus:bg-white text-xs text-slate-700 transition-all font-light"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  className="border border-slate-200 rounded-lg p-2.5 outline-none focus:border-amber-500 bg-slate-50/50 focus:bg-white text-xs text-slate-700 transition-all font-light"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
              >
                Subject Inquiry
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Product availability, delivery help etc."
                className="border border-slate-200 rounded-lg p-2.5 outline-none focus:border-amber-500 bg-slate-50/50 focus:bg-white text-xs text-slate-700 transition-all font-light"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
              >
                Detailed Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className="border border-slate-200 rounded-lg p-2.5 outline-none focus:border-amber-500 bg-slate-50/50 focus:bg-white text-xs text-slate-700 transition-all resize-none font-light"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow disabled:bg-slate-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaPaperPlane size={10} />{" "}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
