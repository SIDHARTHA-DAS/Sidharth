import { motion } from "framer-motion";


const Qualification = ({ title, details }) => (


  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative bg-white/10 backdrop-blur-2xl 
               border border-white/20 rounded-3xl 
               shadow-lg p-8 overflow-hidden group 
               transition-all duration-500 hover:bg-white/20"
  >
    {/* Liquid Blob Animation */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>

    <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>

    <div className="space-y-6">
      {details.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="relative bg-white/5 p-4 rounded-2xl border border-white/10
                     hover:bg-white/10 transition-all duration-300"
        >
          <h4 className="text-xl font-semibold text-white">
            {detail.degree || detail.role}
          </h4>
          <p className="text-gray-200">{detail.institution || detail.company}</p>
          <p className="text-purple-300 text-sm">{detail.year || detail.duration}</p>

          {detail.description && (
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
              {detail.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Qualification;
