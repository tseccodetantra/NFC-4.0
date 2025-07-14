import { useState } from "react";
import character from "../../assets/sonic-gif.gif";
import FAQ_Buttons from "./FAQ_Buttons";
import MobileFaq from "./MobileFaq";
import { ScrollArea } from "./FAQfooterUI/scroll-area";
import MarioBox from "../../assets/mariobox.png";
import "./FAQfooter.css";

const faqs = [
  {
    question: `When and where will "Need For Code 4.0" take place?`,
    answer:
      "Zoom into action on 5th August 2025 at 9:00 AM! The coding chaos continues till 7th August at Thadomal Shahani Engineering College, Bandra, Mumbai!",
  },
  {
    question: `Who can participate in "Need For Code 4.0"?`,
    answer:
      "Got the need for speed and code? All college students with a spark for tech and innovation are welcome to join the race!",
  },
  {
    question:
      "How can I register for Need For Code 4.0 and is there a registration fee?",
    answer:
      "Hit the boosters on Unstop to register. It's 400 rupees per team if you make it past the initial shortlisting.",
  },
  {
    question: "Can I participate as an individual or do I need a team?",
    answer:
      "This ain’t a solo sprint! Team up in squads of 2 to 4—teamwork makes the code work!",
  },
  {
    question: "Will food and beverages be provided during the hackathon?",
    answer:
      "Absolutely! We’re fueling your speed with delicious bites and energizing drinks all the way!",
  },
  {
    question: "Can I attend the hackathon remotely?",
    answer:
      "No, this hackathon is an in-person event only – gotta be there to go fast!",
  },
  {
    question: "How many hours will the hackathon last?",
    answer:
      "It’s a 48-hour warp zone! From 5th Aug 10:00 AM to 6th Aug 11:00 AM is the initial round! After which the particpants will be given the rest of the evening off to go home and relax. A shortlist will be released in the evening of 6th August, and the shortlisted teams will attend the final round which will be held on 7th August from 9:00 AM",
  },
  {
    question: "Is there any accommodation facility?",
    answer:
      "While we don't offer external stays, we’ve got you covered with comfy spaces during the hackathon hours for the first 24 hours after which there will be no accomodation provided!",
  },
];

function FAQ() {
  const [currentAnswer, setCurrentAnswer] = useState(
    "Sonic here! Ready to answer your questions!"
  );
  const [selected, setSelected] = useState(-1);

  return (
    <section
      id="faq"
      className="px-6 py-4 font-retro text-yellow-300 bg-purple faq-start desktop-scroll-margin"
    >
      <h2 className="text-2xl md:text-3xl font-retro text-center mb-10 tracking-widest flex items-center justify-center gap-4 flex-wrap">
        <span className="inline-block">
          <img
            src={MarioBox}
            alt="Mystery Box"
            className="h-15 md:h-20 w-auto object-contain"
          />
        </span>
        FAQ
        <span className="inline-block">
          <img
            src={MarioBox}
            alt="Mystery Box"
            className="h-15 md:h-20 w-auto object-contain"
          />
        </span>
      </h2>

      {/* Mobile View */}
      <div className="block md:hidden">
        <MobileFaq faqs={faqs} />
      </div>

      {/* Desktop / Sonic View */}
      <div className="hidden md:block">
        <div className="flex flex-row-reverse items-center space-y-4">
          <div className="relative mx-8 bg-yellow-100 text-yellow-900 px-6 py-6 rounded-md text-md md:text-lg shadow-md text-shadow-lg text-shadow-orange-300 border-8 border-yellow-800 animate-fade-in text-center">
            {currentAnswer}

            {/* SVG Tail */}
            <svg
              className="absolute -bottom-18 right-3 w-20 h-18"
              viewBox="50 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C40,80 60,80 100,0"
                fill="#fef9c2" // Tail fill (Tailwind's yellow-100)
              />
              <path
                d="M0,0 C40,80 60,80 100,0"
                stroke="#92400e" // Tail border (Tailwind's yellow-800)
                strokeWidth="8"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="p-8 flex flex-col md:flex-row gap-10 items-start justify-between border-t-0 border-purple">
          <ScrollArea className="h-[400px] w-full">
            <div className="flex-1 flex flex-col gap-6 w-full">
              {faqs.map((faq, index) => (
                <FAQ_Buttons
                  key={index}
                  faq={faq}
                  index={index}
                  selected={selected}
                  setSelected={setSelected}
                  setCurrentAnswer={setCurrentAnswer}
                />
              ))}
            </div>
          </ScrollArea>

          <img
            src={character}
            alt="Pixel Character"
            className="w-60 h-90 pixel-art"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
