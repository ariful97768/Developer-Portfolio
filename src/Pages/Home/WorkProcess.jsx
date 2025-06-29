import SectionLabel from "../../Components/SectionLabel";
import WorkStep from "../../Components/WorkStepCard";

const WorkProcess = () => {
    return (
        <section className="mx-4 px-16 space-y-16 pb-18 rounded-[40px] pt-23 bg-[#141414] text-white">
            <div className="relative flex items-center">
                <div className="absolute">
                    <SectionLabel text={'Work Process'} />
                </div>
                <h1 className="text-center w-full text-6xl font-bold">My Work Process</h1>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <WorkStep label={'Discovery'} dsc={"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."} />
                <WorkStep rotate={true} label={'Discovery'} dsc={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."} />
                <WorkStep label={'Discovery'} dsc={"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."} />
                <WorkStep label={'Discovery'} dsc={"We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."} />
            </div>
        </section>
    );
};

export default WorkProcess;