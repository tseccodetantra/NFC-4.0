import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function MobileAccordion({ faqs }) {
  return (
    <div className="block md:hidden px-4 py-6 font-retro">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group border border-yellow-400 rounded-lg bg-[#1B1552] transition-all duration-300 hover:shadow-[0_0_20px_#facc15] shadow-yellow-600/20"
          >
            <AccordionTrigger className="flex justify-between items-center w-full text-yellow-200 text-left px-4 py-4 font-semibold text-base hover:text-yellow-100 transition-all">
              <span className="flex gap-3 items-center">
                <ChevronDown className="w-5 h-5 text-yellow-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                {faq.question}
              </span>
            </AccordionTrigger>

            <AccordionContent className="bg-[#2e2279] text-yellow-300 px-5 py-4 rounded-b-lg text-sm leading-relaxed shadow-inner shadow-yellow-700/30">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
