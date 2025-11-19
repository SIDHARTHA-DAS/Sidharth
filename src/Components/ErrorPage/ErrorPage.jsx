import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <div className="h-svh w-svw flex flex-col items-center justify-center relative overflow-hidden bg-black text-gray-200">

      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,195,255,0.3),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,0,180,0.25),transparent_60%)] animate-pulse"
      />

      {/* Floating 3D 404 */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0, rotateX: -45 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ rotateX: 15, rotateY: -15 }}
        className="text-[clamp(5rem,40vmin,20rem)] font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-br from-cyan-400 to-pink-500 drop-shadow-[0_0_40px_rgba(0,200,255,0.6)]
                   relative mb-10 cursor-pointer"
      >
        404

        {/* Glow Layer */}
        <span className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-br from-cyan-300 to-pink-400"></span>
      </motion.h1>

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-xl bg-white/10 px-8 py-6 rounded-2xl shadow-2xl 
                   border border-white/10 text-center max-w-[90vw] md:max-w-[26rem]"
      >
        <h2 className="text-2xl font-bold mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-300 mb-6">
          This page seems to have slipped into another dimension.  
          Don’t worry — you can return safely.
        </p>

        {/* Futuristic Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,200,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="px-10 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black
                     font-semibold tracking-wider shadow-md hover:shadow-cyan-500/50 transition-all"
        >
          Go Back
        </motion.button>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 right-10 w-40 h-40 bg-pink-500/20 blur-2xl rounded-full"
      />
    </div>
  );
};

export default ErrorPage;

