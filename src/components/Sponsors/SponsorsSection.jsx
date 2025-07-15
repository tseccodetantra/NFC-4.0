import ScrollReveal from "./ScrollReveal";
import SimpleSponsorCard from "./SimpleSponsorCard";
import { motion } from "framer-motion";
// import "./Sponsors.css";
import TitleSponsorCard from "./TitleSponsorCard";
// Sample sponsors data - replace with your own
const titlesponsors = [
  {
    name: "Redfox",
    imageUrl:
      "https://dme2wmiz2suov.cloudfront.net/Institution(7569)/Logo/3767746-Trial_Small-01.png",
    website: "https://academy.redfoxsec.com/",
    description:
      "At Redfox Academy, our courses are structured across three levels Beginner, Intermediate, and Advanced to guide learners through a practical and progressive journey in cybersecurity. Whether you're just starting out or aiming to specialize in advanced areas, there's a course tailored for every stage. ",
    industry: "Title Sponsor",
    employees: "",
    founded: "2017",
    specialties: [
      "Cybersecurity",
      "Ethical Hacking",
      "Penetration Testing",
      "Red Teaming",
    ],
    socialLinks: {
      twitter: "https://x.com/redfoxsec/",
      linkedin: "https://www.linkedin.com/company/redfoxsec/",
    },
  },
];
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
    name: "IMFS",
    imageUrl:
      "https://www.imfs.co.in/wp-content/uploads/2024/07/logo-white-e1691126840885.png.bv_resized_desktop.png.bv_.webp",
    website: "https://www.imfs.co.in/",
    description:
      "For over 25 years, IMFS has empowered 60,000+ students from 15+ locations to achieve their global education dreams. From test prep to admissions, visas, and loans—we simplify every step of your journey.",
    industry: "Education Consultancy",
    employees: "150+",
    founded: "1997",
    specialties: [
      "Overseas Education",
      "University Admissions",
      "Visa Assistance",
      "Career Counseling",
      "Scholarship Guidance",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/imfs/",
    },
  },
  {
    name: "Admit Abroad",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C560BAQGy97-SQsB0Ew/company-logo_200_200/company-logo_200_200/0/1630633471301/admitabroad_logo?e=2147483647&v=beta&t=oTUh_whp-ZzUlOgqDaZ7JzXWsBXJcCFvBp91WwcsjgM",
    website: "https://www.admitabroad.com/",
    description:
      "AdmitAbroad is your trusted partner in navigating the landscape of international education. We bring decades of educational expertise and a proven track record to help you secure admission to top universities worldwide. ",
    industry: "Education Consultancy",
    employees: "50+",
    founded: "2019",
    specialties: [
      "Overseas Education",
      "University Admissions",
      "Visa Assistance",
      "Career Counseling",
      "Scholarship Guidance",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/admitabroad/",
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
                  { label: "Sponsors", value: "10+", color: "text-cyan-400" },
                  {
                    label: "Prize Pool",
                    value: "80K+",
                    color: "text-green-400",
                  },
                  {
                    label: "Participants",
                    value: "200+",
                    color: "text-purple-400",
                  },
                  {
                    label: "Teams Registered",
                    value: "50+",
                    color: "text-yellow-400",
                  },
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

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            <div className="col-span-1 hidden lg:block" />{" "}
            <div
              className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 grid gap-6"
              style={{ fontFamily: "sans-serif" }}
            >
              {titlesponsors.map((sponsor, index) => (
                <ScrollReveal key={sponsor.name} delay={index * 0.1}>
                  <TitleSponsorCard {...sponsor} />
                </ScrollReveal>
              ))}
            </div>
            <div className="col-span-1 hidden lg:block" />{" "}
          </div>
          <hr
            style={{
              height: "2px",
              backgroundColor: "#374151",
              border: "none",
              margin: "1rem 0",
            }}
          ></hr>
        </ScrollReveal>

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
