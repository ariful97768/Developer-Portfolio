import { IoIosArrowRoundDown } from "react-icons/io";

const WorkStep = ({ label, dsc, rotate = false }) => {
    return (
        <div className={`p-8 group pr-9 space-y-11 rounded-4xl ${rotate ? 'rotate-4 z-10 bg-[#C5FF41] text-black':'bg-black'} hover:bg-[#C5FF41] transition-colors duration-700 hover:text-black`}>
            <div className="flex  justify-between">
                <div className={`${rotate?'bg-black text-white':'bg-[#C5FFEE] text-black'} px-3 md:px-9 py-2 rounded-full md:text-base group-hover:bg-black transition-colors duration-700 group-hover:text-white text-sm`}>{label}</div>
                <div className="flex gap-2 items-center"><IoIosArrowRoundDown className="-rotate-90 hidden md:block text-2xl md:text-4xl" /><a className="underline text-xs md:text-base" href="#">Read More</a></div>
            </div>
            <p className="text-sm">
                {dsc}
            </p>
        </div>
    );
};

export default WorkStep;