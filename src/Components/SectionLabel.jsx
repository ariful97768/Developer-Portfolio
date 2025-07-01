import { IoIosArrowRoundDown } from "react-icons/io";

const SectionLabel = ({ text, color }) => {
    return (
        <div className={`flex items-center text-${color}`}>
            <div className="p-1 md:p-2 border-2 rounded-full"><IoIosArrowRoundDown className="text-xl md:text-2xl" /></div>
            <p className="text-xs md:text-base px-3 md:px-5 py-2 border-2 rounded-full">{text}</p>
        </div>
    );
};

export default SectionLabel;