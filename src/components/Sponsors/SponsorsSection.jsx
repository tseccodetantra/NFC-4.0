import ScrollReveal from "./ScrollReveal";
import SimpleSponsorCard from "./SimpleSponsorCard";
import { motion } from "framer-motion";
// import "./Sponsors.css";

// Sample sponsors data - replace with your own
const defaultSponsorsData = [
  {
    name: "Unstop",
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png",
    website: "https://unstop.com/",
    description:
      "Unstop is a leading platform for students and professionals to discover and participate in competitions, hackathons, and challenges. We empower the next generation of innovators by connecting them with opportunities to showcase their skills.",
    industry: "Technology Innovation",
    employees: "100+",
    founded: "2017",
    specialties: [
      "Event Hosting",
      "Hackathons",
      "Job-Seeking",
      "Skill Development",
    ],
    socialLinks: {
      twitter: "https://x.com/unstop_world",
      linkedin: "https://www.linkedin.com/company/unstop/",
    },
  },
  {
    name: "GeeksForGeeks",
    imageUrl:
      "https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64",
    website: "https://www.geeksforgeeks.org/",
    description:
      "GeeksForGeeks is a computer science portal for geeks. It provides a vast collection of articles, tutorials, and coding challenges to help students and professionals enhance their programming skills and prepare for technical interviews.",
    industry: "Education Technology",
    employees: "1,000+",
    founded: "2009",
    specialties: [
      "Programming Tutorials",
      "Coding Challenges",
      "Interview Prep",
      "Data Structures",
      "Algorithms",
    ],
    socialLinks: {
      twitter: "https://x.com/geeksforgeeks",
      linkedin: "https://www.linkedin.com/company/geeksforgeeks/",
    },
  },
  {
    name: "InterviewBuddy",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxT6W2J3-40UX9t2ELVsd2lBlaVIsMk63iKQ&s",
    website: "https://interviewbuddy.net/",
    description:
      "InterviewBuddy is an online platform that connects job seekers with expert interviewers for mock interviews. Our mission is to help candidates prepare effectively for real interviews and boost their confidence.",
    industry: "Career Development",
    employees: "25+",
    founded: "2016",
    specialties: [
      "Mock Interviews",
      "Interview Coaching",
      "Career Counseling",
      "Skill Assessment",
      "Feedback and Improvement",
    ],
    socialLinks: {
      twitter: "https://twitter.com/gamedevstudios",
      linkedin: "https://www.linkedin.com/company/interviewbuddy/",
    },
  },
  {
    name: "Imperial Education",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIKP0vZZOlRcunL5v2IXGiqhuyoITYXdijg&s",
    website: "https://www.imperial-overseas.com/",
    description:
      "Imperial Education is a leading overseas education consultancy that helps students achieve their dreams of studying abroad and allow them to grow to the best of their abilities.",
    industry: "Education Consultancy",
    employees: "50+",
    founded: "2009",
    specialties: [
      "Overseas Education",
      "University Admissions",
      "Visa Assistance",
      "Career Counseling",
      "Scholarship Guidance",
    ],
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/company/imperial-overseas-education-consultants/",
    },
  },
  {
    name: "Kwikpic",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHXkJ16xQRjLg/company-logo_200_200/company-logo_200_200/0/1653907690114?e=2147483647&v=beta&t=bBIld7NSADNfyhazM8fOUDsJ7Zir7LIJk0aS6f_mOvQ",
    website: "https://www.kwikpic.in",
    description:
      "An AI-powered photo-sharing platform specializing in instant, facial-recognition-enabled delivery of event photography.",
    industry: "Photography Technology",
    employees: "2-10",
    founded: "2019",
    specialties: [
    "Facial recognition",
    "Instant photo sorting & delivery",
    "Event-based group sharing",
    "Business branding features",
    "Album selection & client favorites",
    "Analytics & marketing tools",
    "High-quality, optimized image delivery"
    ],
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/company/kwikpic-in/",
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6  pixel-font ">
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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            style={{ fontFamily: "sans-serif" }}
          >
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
