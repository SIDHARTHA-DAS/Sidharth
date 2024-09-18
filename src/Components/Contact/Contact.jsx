import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../ThemesContext/DarkTheme";

const Contact = () => {
  const { theme } = useContext(ThemeContext); // Access the theme from context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mdknolno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme === "dark" ? "dark" : "light", // Use theme for toast
        });
      }
    } catch (error) {
      toast.error("Error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === "dark" ? "dark" : "light", // Use theme for toast
      });
      console.log(error.message);
      
    }
  };

  // send message button animation
  const handleSubmits = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === "dark" ? "dark" : "light", // Use theme for toast
      });
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === "dark" ? "dark" : "light", // Use theme for toast
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      toast.success("Thank you! Your message has been sent successfully.❤️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === "dark" ? "dark" : "light", // Use theme for toast
      });

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${theme === "dark" ? "bg-gray-800" : "bg-gray-400"}`}>
      <div className={`max-w-md w-full my-28 p-8 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
          Contact Me ☎️
        </h2>

        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {errorMessage}
          </div>
        )}

        {!isSubmitted && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "border-gray-700 bg-gray-700 text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "border-gray-700 bg-gray-700 text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 ${
                  theme === "dark"
                    ? "border-gray-700 bg-gray-700 text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                }`}
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg shadow transition 
        ${isSubmitting ? "cursor-not-allowed" : "hover:bg-indigo-600"}
        ${theme === "dark" ? "bg-indigo-400 text-white hover:bg-indigo-500" : "bg-indigo-500 text-white hover:bg-indigo-600"}`}
              onClick={handleSubmits}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}

        <div className={`mt-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <h3 className="font-bold mb-2">Contact Information:</h3>
          <p>
            Email:{" "}
            <a href="mailto:sidharthadas2898@gmail.com" className="text-indigo-500">
              sidharthadas2898@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+917077091042" className="text-indigo-500">
              +91 7077091042
            </a>
          </p>
          <p>
            WhatsApp:{" "}
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


// import { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setErrorMessage("Please fill in all the fields.");
//       return;
//     }

//     try {
//       const response = await fetch("https://formspree.io/f/mdknolno", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         setSuccessMessage();
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         toast.error("Something went wrong. Please try again.", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//         setErrorMessage();
//       }
//     } catch (error) {
//       toast.error("Error occurred. Please try again later.", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//       setErrorMessage(error.message);
//       setErrorMessage();
//     }
//   };

//   // send message button animation

//   const handleSubmits = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validation logic
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const { name, email, message } = formData;

//     // Check if all fields are filled
//     if (!name || !email || !message) {
//       toast.error("Please fill in all fields.", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "dark",
//       });
//       setIsSubmitting(false); // Stop loading
//       return;
//     }

//     // Check if email format is valid
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address.", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "dark",
//       });
//       setIsSubmitting(false); // Stop loading
//       return;
//     }

//     // Simulate sending a message (e.g., calling an API)
//     setTimeout(() => {
//       toast.success("Thank you! Your message has been sent successfully.❤️", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "dark",
//       });

//       // Clear form fields after success
//       setFormData({ name: "", email: "", message: "" });

//       setIsSubmitting(false); // Stop loading
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-00 bg-gray-800 p-4">
//       <div className="max-w-md w-full my-28 bg-gray-900 p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-gray-100 mb-6">
//           Contact Me ☎️
//         </h2>

//         {successMessage && (
//           <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
//             {successMessage}
//           </div>
//         )}

//         {errorMessage && (
//           <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
//             {errorMessage}
//           </div>
//         )}

//         {!isSubmitted && (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-300 font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
//                 placeholder="Your Message"
//                 rows="4"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className={`w-full bg-indigo-500 text-white py-2 px-4 rounded-lg shadow transition 
//         ${
//           isSubmitting
//             ? "bg-indigo-400 cursor-not-allowed"
//             : "hover:bg-indigo-600"
//         } 
//         dark:bg-indigo-400 dark:hover:bg-indigo-500`}
//               onClick={handleSubmits}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center justify-center space-x-2">
//                   <svg
//                     className="animate-spin h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
//                     ></path>
//                   </svg>
//                   <span>Sending...</span>
//                 </div>
//               ) : (
//                 "Send Message"
//               )}
//             </button>
//           </form>
//         )}

//         <div className="mt-8 text-gray-700 dark:text-gray-300">
//           <h3 className="font-bold mb-2">Contact Information:</h3>
//           <p>
//             Email:{" "}
//             <a href="mailto:sidharthadas2898@gmail.com" className="text-indigo-500">
//               sidharthadas2898@gmail.com
//             </a>
//           </p>
//           <p>
//             Phone:{" "}
//             <a href="tel: +91 7077091042" className="text-indigo-500">
//               +91 7077091042
//             </a>
//           </p>
//           <p>
//             WhatsApp:{" "}
//             <a href="https://wa.me/7077091042" className="text-indigo-500">
//               +91 7077091042
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
