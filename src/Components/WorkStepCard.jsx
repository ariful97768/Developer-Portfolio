import { IoIosArrowRoundDown } from "react-icons/io";

const WorkStep = ({ label, dsc, rotate = false }) => {
    return (
        <div className={`p-8 pr-9 space-y-11 rounded-4xl ${rotate ? 'rotate-4 z-10 bg-[#C5FF41] text-black':'bg-black'}`}>
            <div className="flex  justify-between">
                <div className={`${rotate?'bg-black text-white':'bg-[#C5FFEE] text-black'} px-9 py-2 rounded-full`}>{label}</div>
                <div className="flex gap-2 items-center"><IoIosArrowRoundDown className="-rotate-90 text-4xl" /><a className="underline" href="#">Read More</a></div>
            </div>
            <p>
                {dsc}
            </p>
        </div>
    );
};

export default WorkStep;