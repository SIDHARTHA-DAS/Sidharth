import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../ThemesContext/DarkTheme";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // MAIN SUBMIT FUNCTION (Single clean handling)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", {
        theme: theme === "dark" ? "dark" : "light",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address.", {
        theme: theme === "dark" ? "dark" : "light",
      });
      setIsSubmitting(false);
      return;
    }

    // Sending message
    try {
      const res = await fetch("https://formspree.io/f/mdknolno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀", {
          theme: theme === "dark" ? "dark" : "light",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong.", {
          theme: theme === "dark" ? "dark" : "light",
        });
      }
    } catch (error) {
      console.log(error)
      toast.error("Network error occurred.", {
        theme: theme === "dark" ? "dark" : "light",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]"
          : "bg-gradient-to-br from-[#e9e9f3] to-[#ffffff]"
      }`}
    >
      {/* GLASS CARD */}
      <div
        className={`w-full max-w-lg rounded-3xl p-8 shadow-2xl bg-opacity-30 backdrop-blur-xl border transition-all duration-500 ${
          theme === "dark"
            ? "bg-white/5 border-white/10"
            : "bg-white/40 border-white/50"
        }`}
      >
        <h1
          className={`text-3xl font-bold text-center mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Contact Me ✨
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Floating Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-transparent peer outline-none transition-all duration-300 ${
                theme === "dark"
                  ? "border-white/20 text-white placeholder-transparent"
                  : "border-gray-500/30 text-gray-900 placeholder-transparent"
              }`}
              placeholder="Name"
              required
            />
            <label
              className={`absolute left-4 top-3 px-1 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
          </div>

          {/* Floating Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-transparent peer outline-none transition-all duration-300 ${
                theme === "dark"
                  ? "border-white/20 text-white placeholder-transparent"
                  : "border-gray-500/30 text-gray-900 placeholder-transparent"
              }`}
              placeholder="Email"
              required
            />
            <label
              className={`absolute left-4 top-3 px-1 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
          </div>

          {/* Floating Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-transparent peer outline-none transition-all duration-300 ${
                theme === "dark"
                  ? "border-white/20 text-white placeholder-transparent"
                  : "border-gray-500/30 text-gray-900 placeholder-transparent"
              }`}
              placeholder="Message"
              required
            ></textarea>
            <label
              className={`absolute left-4 top-3 px-1 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
          </div>

          {/* Liquid Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl text-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
              theme === "dark"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-500 text-white"
            }`}
          >
            <span className="relative z-10">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>

            {/* Liquid animation */}
            <div className="absolute inset-0 bg-indigo-400 group-hover:translate-x-0 translate-x-full transition-all duration-500 blur-xl opacity-40"></div>
          </button>
        </form>

        {/* CONTACT INFO */}
        <div
          className={`mt-8 text-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p>
            📧 Email:{" "}
            <a
              href="mailto:sidharthadas2898@gmail.com"
              className="text-indigo-500"
            >
              sidharthadas2898@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+917077091042" className="text-indigo-500">
              +91 7077091042
            </a>
          </p>
          <p>
            💬 WhatsApp:{" "}
            <a href="https://wa.me/7077091042" className="text-indigo-500">
              +91 7077091042
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
