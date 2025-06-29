import { FaReact } from "react-icons/fa";
import SectionLabel from "../../Components/SectionLabel";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LiaDocker } from "react-icons/lia";
import { IoIosArrowRoundDown } from "react-icons/io";

const Expertise = () => {
    return (
        <section className="mx-4 px-16 pb-18 rounded-[40px] pt-23 bg-black text-white">
            <SectionLabel color='white' text={'Why Choose me'} />
            <div className="flex mt-10 gap-72">
                <h1 className="text-6xl font-bold leading-21">My Extensive List of Skills</h1>
                <div>
                    <p className="text-lg leading-9 text-right mb-5">Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                    <hr className="opacity-45" />
                </div>
            </div>
            <div className="grid grid-cols-3 relative pt-16 gap-2">
                {/*  */}
                <div className="absolute flex gap-5 text-3xl right-0 -top-10">
                    <div className="border cursor-pointer rounded-full p-2 rotate-90"><IoIosArrowRoundDown /></div>
                    <div className="border cursor-pointer rounded-full p-2 -rotate-90"><IoIosArrowRoundDown /></div>
                </div>
                <ExpertiseCard icon={<AiOutlineHtml5 />} title={'HTML & CSS'} description={'Skilled in crafting responsive and accessible interfaces using semantic HTML5 and modern CSS techniques.'} />
                <ExpertiseCard rotate={'rotate-6'} icon={<FaReact />} title={'REACT.JS'} description={'Experienced in building dynamic, component-based UIs with React, using hooks and modern state tools.'} />
                <ExpertiseCard icon={<LiaDocker />} title={'DOCKER'} description={'Proficient in containerizing applications with Docker for fast deployment, scaling, and environment setup.'} />
            </div>
        </section>
    );
};

export default Expertise;

const ExpertiseCard = ({ icon, title, description, rotate }) => {
    return (
        <div className={`${rotate} px-9 py-12 rounded-4xl bg-[#FFFFFF14]`}>
            <div className="text-8xl">
                {icon}
            </div>
            <h1 className="font-bold text-2xl mt-9 mb-5">{title}</h1>
            <p>{description}</p>
        </div>
    )
}