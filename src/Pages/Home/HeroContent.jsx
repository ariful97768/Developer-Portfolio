import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import CTABtn from '../../Components/CTABtn';
import ShiningBoldTxt from '../../Components/ShiningBoldTxt';
import { IoCall } from 'react-icons/io5';

const HeroContent = () => {
    return (
        <div className='mx-16 pt-24 pb-32'>
            <div>
                <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold xl:leading-32 leading-12 sm:leading-14 md:leading-16 md:w-11/12'>Trusted <ShiningBoldTxt text={'Partner'} /> for <br /> Your Website <ShiningBoldTxt text={'Develop.'} /></h1>
            </div>
            <div className='md:flex mt-16 gap-64'>
                <div className='-rotate-90 space-y-6'>
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