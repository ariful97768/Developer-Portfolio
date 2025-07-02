import { FaReact } from "react-icons/fa";
import SectionLabel from "../../Components/SectionLabel";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LiaDocker } from "react-icons/lia";
import { IoIosArrowRoundDown } from "react-icons/io";

const Expertise = () => {
    return (
        <section className="mx-4 px-8 py-10 md:px-16 md:pb-18 md:pt-23 rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-black text-white">
            <SectionLabel color='white' text={'Why Choose me'} />
            <div className="flex flex-col lg:flex-row gap-8  mt-10 xl:gap-72">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-10 lg:leading-16 xl:leading-21 text-center lg:text-left">My Extensive List of Skills</h1>
                <div>
                    <p className="text-base md:text-lg md:leading-9 text-center lg:text-right mb-5">Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                    <hr className="opacity-45 hidden lg:block" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 relative pt-16 gap-2">
                <div className="absolute flex gap-5 text-3xl right-0 lg:-top-5 xl:-top-10">
                    <div className="border transform hover:-translate-x-2 duration-500 text-xl md:text-2xl cursor-pointer rounded-full flex items-center justify-center p-2 max-h-max max-w-max rotate-90"><IoIosArrowRoundDown /></div>
                    <div className="border transform hover:translate-x-2 duration-500 text-xl md:text-2xl cursor-pointer rounded-full flex items-center justify-center p-2 max-h-max max-w-max -rotate-90"><IoIosArrowRoundDown /></div>
                </div>
                <ExpertiseCard icon={<AiOutlineHtml5 />} title={'HTML & CSS'} rotateDirection={'right'} description={'Skilled in crafting responsive and accessible interfaces using semantic HTML5 and modern CSS techniques.'} />
                <ExpertiseCard rotate={'rotate-6'} icon={<FaReact />} title={'REACT.JS'} description={'Experienced in building dynamic, component-based UIs with React, using hooks and modern state tools.'} />
                <ExpertiseCard icon={<LiaDocker />} title={'DOCKER'} rotateDirection={'left'} description={'Proficient in containerizing applications with Docker for fast deployment, scaling, and environment setup.'} />
            </div>
        </section>
    );
};

export default Expertise;

const ExpertiseCard = ({ icon, title, description, rotate, rotateDirection }) => {
    return (
        <div className={`${rotate} ${rotateDirection === 'left' && "hover:rotate-3"} ${rotateDirection === 'right' && "hover:-rotate-3"} px-9 py-12 rounded-4xl bg-[#FFFFFF14] transform hover:-translate-y-5 z-50 duration-1000 ease-in-out`}>
            <div className="text-6xl md:text-7xl lg:text-8xl">
                {icon}
            </div>
            <h1 className="font-bold text-xl md:text-2xl mt-9 mb-5">{title}</h1>
            <p className="text-sm md:text-base">{description}</p>
        </div>
    )
}