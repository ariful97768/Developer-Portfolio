import SectionLabel from "../../Components/SectionLabel";
import WorkStep from "../../Components/WorkStepCard";

const WorkProcess = () => {
    return (    //mx-4 px-16 space-y-16 pb-18 rounded-[40px] pt-23 bg-[#141414] text-white
        <section className="mx-4 px-8 py-10 md:px-16 md:pb-18 md:pt-23 rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-[#141414] text-white space-y-8 md:space-y-12 xl:space-y-16">
            <div className="relative lg:flex items-center">
                <div className="lg:absolute">
                    <SectionLabel text={'Work Process'} />
                </div>
                <h1 className="text-center mt-10 lg:mt-0 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">My Work Process</h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
                <WorkStep label={'Discovery'} dsc={"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."} />
                <WorkStep rotate={true} label={'Discovery'} dsc={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."} />
                <WorkStep label={'Discovery'} dsc={"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."} />
                <WorkStep label={'Discovery'} dsc={"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."} />
            </div>
        </section>
    );
};

export default WorkProcess;