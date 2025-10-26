import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Menu } from "lucide-react";

const FloatingIcon = ({ icon: Icon, className, delay }) => {
  return (
    <div
      className={`absolute ${className} opacity-10`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon size={48} className="text-gray-400" />
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          form.current.reset();
          setToast({ show: true, success: true, message: "Message sent successfully!" });
          setTimeout(() => setToast({ ...toast, show: false }), 3000); // hide after 3s
        },
        (error) => {
          setLoading(false);
          setToast({ show: true, success: false, message: "Failed to send message. Try again." });
          setTimeout(() => setToast({ ...toast, show: false }), 3000); // hide after 3s
        }
      );
  };

  return (
    <section id="contact" className="relative px-8 py-20 overflow-hidden">
      <FloatingIcon icon={Send} className="top-10 left-20" delay={0} />
      <FloatingIcon icon={Menu} className="bottom-10 right-20" delay={1.5} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <h2 className="text-4xl font-bold mb-6">
            Got a project in
            <br />
            <span className="gradient-text">mind?</span>
          </h2>
          <div className="w-64 h-64 relative">
            {/* Decorative blocks */}
            <div className="absolute inset-0">
              <div className="w-full h-full relative">
                <div className="absolute bottom-0 left-8 w-16 h-32 bg-gradient-to-t from-[#00d4ff] to-[#7b2ff7] rounded-t-lg"></div>
                <div className="absolute bottom-0 left-28 w-16 h-48 bg-gradient-to-t from-[#7b2ff7] to-pink-500 rounded-t-lg"></div>
                <div className="absolute bottom-0 left-48 w-16 h-40 bg-gradient-to-t from-pink-500 to-[#00d4ff] rounded-t-lg"></div>
                <div className="absolute top-12 right-8 w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#1a1d2e] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="w-full bg-[#252938] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
              className="w-full bg-[#252938] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-[#252938] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone"
              required
              className="w-full bg-[#252938] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full bg-[#252938] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#00d4ff] text-[#1a1d2e] px-8 py-3 rounded-full font-semibold hover:bg-[#00b8e6] transition-all neon-border"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-8 right-8 px-6 py-4 rounded-lg text-white font-semibold shadow-lg transition-all ${
            toast.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
