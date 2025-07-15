import { useState, useCallback } from "react";
import { motion, px } from "framer-motion";
import {
  ChevronDown,
  Twitter,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
const TitleSponsorCard = ({
  name,
  imageUrl,
  website,
  description,
  industry,
  employees,
  founded,
  specialties,
  socialLinks,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);
  const handleClick = useCallback(
    () => setIsExpanded(!isExpanded),
    [isExpanded]
  );

  return (
    <motion.div
      className="relative cursor-pointer "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl bg-gray-900 border-2 border-gray-700 p-6"
        animate={{
          borderColor: isHovered ? "#00ffff" : "#374151",
          boxShadow: isHovered ? "0 0 20px rgba(0, 255, 255, 0.3)" : "none",
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="flex items-center space-x-4"
              style={{ position: "relative", width: "100%" }}
            >
              <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden border-2 border-cyan-400">
                <img
                  src={
                    imageUrl ||
                    "https://via.placeholder.com/64x64/374151/ffffff?text=Logo"
                  }
                  alt={name}
                  className="w-full h-full object-cover p-1 sm:p-2"
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                }}
              >
                <h3 className="text-xl sm:text-3xl lg:text-5xl font-bold text-white">
                  {name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{industry}</p>
              </div>
            </div>

            {/* Expand indicator */}
            <motion.div
              className="text-cyan-400 opacity-60"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </div>

          {/* Description preview */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4 border-t border-gray-700">
              {/* Full description */}
              <div>
                <h4 className="font-semibold mb-2 text-cyan-400">About</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="font-semibold mb-2 text-cyan-400">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-600"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links and website */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex space-x-3">
                  {socialLinks?.twitter && (
                    <motion.a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:opacity-80"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter size={20} />
                    </motion.a>
                  )}
                  {socialLinks?.linkedin && (
                    <motion.a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:opacity-80"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  )}
                  {socialLinks?.github && (
                    <motion.a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:opacity-80"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>

                {website && (
                  <motion.a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400 text-black hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={12} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TitleSponsorCard;
