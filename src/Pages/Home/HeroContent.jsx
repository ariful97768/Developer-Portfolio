import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import CTABtn from '../../Components/CTABtn';
import ShiningBoldTxt from '../../Components/ShiningBoldTxt';
import { IoCall } from 'react-icons/io5';

const HeroContent = () => {
    return (          //mx-16 pt-24 pb-32
        <div className=' mx-5 sm:mx-10 md:mx-16 pt-6 sm:pt-12 md:pt-18 xl:pt-24 pb-32'>
            <div>
                <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-14 sm:leading-16 md:leading-22 lg:leading-28 xl:leading-32 md:w-11/12'>Trusted <ShiningBoldTxt text={'Partner'} /> for <br /> Your Website <ShiningBoldTxt text={'Develop.'} /></h1>
            </div>
            <div className='flex relative mt-16 lg:gap-32 xl:gap-64'>
                <div className='md:static -bottom-5 right-0 absolute  md:-rotate-90 md:space-y-6 space-y-2'>
                    <p>@wiliamrey</p>
                    <p className='flex items-center gap-5 text-2xl' >— <FaFacebook /> <FaInstagram /> <FaTwitter /> </p>
                </div>
                <div className='max-w-3xl space-y-11'>
                    <p>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                    <CTABtn btnp='2' btnPr='5' icp={'3'} icSize='text-xl' icon={<IoCall />} title={'Schedule a Call'} />
                </div>
            </div>
        </div>
    );
};

export default HeroContent;