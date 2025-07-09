import ScrollReveal from "./ScrollReveal";
import SimpleSponsorCard from "./SimpleSponsorCard";
import { motion } from "framer-motion";
// import "./Sponsors.css";

// Sample sponsors data - replace with your own
const defaultSponsorsData = [
  {
    name: "TechVision",
    imageUrl: "https://via.placeholder.com/100x100/00ffff/000000?text=TV",
    website: "https://techvision.com",
    description:
      "TechVision Global is the world's leading technology innovation company, pioneering the future of AI, quantum computing, and digital transformation. We're committed to nurturing the next generation of tech leaders through education and innovation.",
    industry: "Technology Innovation",
    employees: "50,000+",
    founded: "2005",
    specialties: [
      "Artificial Intelligence",
      "Quantum Computing",
      "Cloud Infrastructure",
      "Digital Transformation",
      "Cybersecurity",
    ],
    socialLinks: {
      twitter: "https://twitter.com/techvision",
      linkedin: "https://linkedin.com/company/techvision",
      github: "https://github.com/techvision",
    },
  },
  {
    name: "InnovateCorp",
    imageUrl: "https://via.placeholder.com/100x100/00ff00/000000?text=IC",
    website: "https://innovatecorp.com",
    description:
      "InnovateCorp is a leading technology company specializing in enterprise solutions, cloud infrastructure, and AI-powered applications. We're passionate about empowering developers to build the future of technology.",
    industry: "Enterprise Technology",
    employees: "15,000+",
    founded: "2010",
    specialties: [
      "Enterprise Software",
      "Cloud Computing",
      "AI Solutions",
      "DevOps",
      "Data Analytics",
    ],
    socialLinks: {
      twitter: "https://twitter.com/innovatecorp",
      linkedin: "https://linkedin.com/company/innovatecorp",
      github: "https://github.com/innovatecorp",
    },
  },
  {
    name: "GameDev Studios",
    imageUrl: "https://via.placeholder.com/100x100/ff00ff/000000?text=GD",
    website: "https://gamedevstudios.com",
    description:
      "GameDev Studios creates immersive gaming experiences across mobile, web, and console platforms. We're passionate about pushing the boundaries of interactive entertainment and supporting indie developers worldwide.",
    industry: "Game Development",
    employees: "800+",
    founded: "2015",
    specialties: [
      "Mobile Games",
      "Web Games",
      "Unity Development",
      "Unreal Engine",
      "Game Design",
    ],
    socialLinks: {
      twitter: "https://twitter.com/gamedevstudios",
      linkedin: "https://linkedin.com/company/gamedevstudios",
    },
  },
  {
    name: "CloudTech Solutions",
    imageUrl: "https://via.placeholder.com/100x100/ffff00/000000?text=CT",
    website: "https://cloudtech.com",
    description:
      "CloudTech Solutions provides scalable cloud infrastructure and services to businesses worldwide. Our mission is to make cloud computing accessible and efficient for organizations of all sizes.",
    industry: "Cloud Services",
    employees: "3,000+",
    founded: "2012",
    specialties: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Microservices",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/cloudtech",
      github: "https://github.com/cloudtech",
    },
  },
  {
    name: "PixelCraft Design",
    imageUrl: "https://via.placeholder.com/100x100/ff6b6b/000000?text=PC",
    website: "https://pixelcraft.com",
    description:
      "PixelCraft Design is a creative digital agency specializing in UI/UX design, branding, and digital experiences. We help startups and enterprises create beautiful, user-centered products that delight users.",
    industry: "Digital Design",
    employees: "200+",
    founded: "2018",
    specialties: [
      "UI/UX Design",
      "Branding",
      "Web Design",
      "Mobile Design",
      "Prototyping",
    ],
    socialLinks: {
      twitter: "https://twitter.com/pixelcraft",
      linkedin: "https://linkedin.com/company/pixelcraft",
    },
  },
  {
    name: "RetroTech Labs",
    imageUrl: "https://via.placeholder.com/100x100/9ca3af/000000?text=RT",
    website: "https://retrotech.com",
    description:
      "RetroTech Labs specializes in modernizing vintage technology and creating retro-inspired modern devices. We bridge the gap between nostalgia and cutting-edge technology to create unique products.",
    industry: "Consumer Electronics",
    employees: "150+",
    founded: "2019",
    specialties: [
      "Retro Computing",
      "Electronics",
      "Product Design",
      "Manufacturing",
      "IoT",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/retrotech",
      github: "https://github.com/retrotech",
    },
  },
  {
    name: "RetroTech Labs",
    imageUrl: "https://via.placeholder.com/100x100/9ca3af/000000?text=RT",
    website: "https://retrotech.com",
    description:
      "RetroTech Labs specializes in modernizing vintage technology and creating retro-inspired modern devices. We bridge the gap between nostalgia and cutting-edge technology to create unique products.",
    industry: "Consumer Electronics",
    employees: "150+",
    founded: "2019",
    specialties: [
      "Retro Computing",
      "Electronics",
      "Product Design",
      "Manufacturing",
      "IoT",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/retrotech",
      github: "https://github.com/retrotech",
    },
  },
  {
    name: "RetroTech Labs",
    imageUrl: "https://via.placeholder.com/100x100/9ca3af/000000?text=RT",
    website: "https://retrotech.com",
    description:
      "RetroTech Labs specializes in modernizing vintage technology and creating retro-inspired modern devices. We bridge the gap between nostalgia and cutting-edge technology to create unique products.",
    industry: "Consumer Electronics",
    employees: "150+",
    founded: "2019",
    specialties: [
      "Retro Computing",
      "Electronics",
      "Product Design",
      "Manufacturing",
      "IoT",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/retrotech",
      github: "https://github.com/retrotech",
    },
  },
  {
    name: "RetroTech Labs",
    imageUrl: "https://via.placeholder.com/100x100/9ca3af/000000?text=RT",
    website: "https://retrotech.com",
    description:
      "RetroTech Labs specializes in modernizing vintage technology and creating retro-inspired modern devices. We bridge the gap between nostalgia and cutting-edge technology to create unique products.",
    industry: "Consumer Electronics",
    employees: "150+",
    founded: "2019",
    specialties: [
      "Retro Computing",
      "Electronics",
      "Product Design",
      "Manufacturing",
      "IoT",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/retrotech",
      github: "https://github.com/retrotech",
    },
  },
];

const Sponsors = ({
  title = " Our Sponsors",
  subtitle = "Amazing companies supporting innovation and the next generation of developers.",
  showStats = true,
  showCTA = true,
  customSponsors = null,
  backgroundColor = "bg-purple",
  className = "",
}) => {
  const sponsors = customSponsors || defaultSponsorsData;

  return (
    <section
      className={`py-20 px-4 ${backgroundColor} relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6  pixel-font ">
              OUR <span className="text-yellow-400">SPONSORS</span>
            </h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>

            {/* Stats - Optional */}
            {showStats && (
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 pixel-font gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {[
                  { label: "Sponsors", value: "25+", color: "text-cyan-400" },
                  {
                    label: "Prize Pool",
                    value: "75K+",
                    color: "text-green-400",
                  },
                  {
                    label: "Participants",
                    value: "500+",
                    color: "text-purple-400",
                  },
                  { label: "Cities", value: "20+", color: "text-yellow-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                  >
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* Sponsors Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sponsors.map((sponsor, index) => (
              <ScrollReveal key={sponsor.name} delay={index * 0.1}>
                <SimpleSponsorCard {...sponsor} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Sponsors;
