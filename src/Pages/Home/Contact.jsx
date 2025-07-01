import { IoCall, IoMail } from "react-icons/io5";
import bgImgBtm from '../../assets/bg-img-btm.png';
import CTABtn from "../../Components/CTABtn";
import SectionLabel from "../../Components/SectionLabel";
import ShiningBoldTxt from "../../Components/ShiningBoldTxt";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <section style={{ backgroundImage: `url(${bgImgBtm})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="pt-12 pb-28 px-5 md:px-12">
            <div className="flex flex-col md:flex-row gap-10">
                <div>
                    <SectionLabel text={'Contact'} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-14 sm:leading-16 md:leading-22 lg:leading-28 mt-10 mb-4">Interested in <ShiningBoldTxt text={'work'} /> together?</h1>
                    <p className="font-normal text-base leading-6 md:text-lg md:leading-8 mb-8">We start every new client interaction with an in-depth discovery call where we get to know each other</p>
                    <CTABtn btnp='2' btnPr='5' icp={'3'} icSize='text-xl' icon={<IoCall />} title={'Schedule a Call'} />
                </div>
                <div className="border bg-black text-white rounded-2xl px-9 py-10 md:min-w-[530px]">
                    <div className="flex flex-col gap-5">
                        <input className="border-b-2 placeholder:text-white placeholder:opacity-90 py-3 border-gray-400 focus:border-b-[#C5FF41] transition-colors duration-500 outline-none" placeholder="Enter your name" type="text" name="name" id="name" />
                        <input className="border-b-2 py-3 border-gray-400 focus:border-b-[#C5FF41] transition-colors duration-500 outline-none" placeholder="Your email address" type="email" name="email" id="email" />
                        <textarea className="border-b-2 py-3 border-gray-400 focus:border-b-[#C5FF41] transition-colors duration-500 outline-none" placeholder="Describe your project" type="text" name="description" id="description" />
                    </div>
                    <div className="flex mt-11 mb-17 items-center gap-3 md:gap-5">
                        <CTABtn btnPr={'5'} icSize="lg" icp="2" icon={<IoIosSend />} title={'Send'} />
                        or
                        <CTABtn btnPr={'5'} icSize="lg" icp="2" icon={<IoMail />} title={'Contact me'} />
                    </div>
                    <div className="flex text-sm items-center gap-3 md:gap-5">
                        <p className="opacity-80">@wiliamrey</p>
                        <p className='flex items-center gap-5 text-2xl' >— <FaFacebook className="text-xl md:text-2xl" /> <FaInstagram className="text-xl md:text-2xl" /> <FaTwitter className="text-xl md:text-2xl" /> </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;