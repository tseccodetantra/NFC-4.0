import hand from "../../assets/arrow.png";
import { ScrollArea } from "./FAQfooterUI/scroll-area";

const FAQ_Buttons = ({ faq, index, selected, setSelected, setCurrentAnswer }) => {
    return (
        <div key={index} className="flex flex-row items-start sm:items-center w-full mb-2">
            {selected === index && (
                <div className="mb-0">
                    <img src={hand} alt="arrow" className="w-8 sm:w-10 mr-3 inline-block" />
                </div>
            )}
            <div
                onClick={() => {
                    setCurrentAnswer(faq.answer);
                    setSelected(index);
                }}
                className={`cursor-pointer  w-full text-left break-words text-yellow-300 px-4 py-5 rounded-lg text-xs md:text-sm border-2 transition-all duration-200 focus:bg-red-700 ${selected === index
                    ? "bg-red-900 text-shadow-sm text-shadow-yellow-600"
                    : "bg-sidebar-accent-foreground hover:bg-blue-900"
                    }`}
            >
                {faq.question}
            </div>

        </div>
    );
};

export default FAQ_Buttons;
