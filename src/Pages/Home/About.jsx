import aboutBgImg from '../../assets/Vector.png'
import CompanyLogo from '../../Components/CompanyLogo';
import SectionLabel from '../../Components/SectionLabel';
import ShiningBoldTxt from '../../Components/ShiningBoldTxt';
const About = () => {
    return (
        <section style={{ backgroundImage: `url(${aboutBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
            <div className='mx-5 sm:mx-10 md:mx-16 pt-6 sm:pt-12 md:pt-18 xl:pt-24'>
                <div className='max-w-5xl pb-40 text-center mx-auto'>
                    <div className='flex mr-10 justify-end'>
                        <SectionLabel text={'About'} />
                    </div>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-14 sm:leading-16 md:leading-22 lg:leading-28 xl:leading-32 mt-9 mb-4'>I’ve been <ShiningBoldTxt text={'Developing'} /> Websites since <ShiningBoldTxt text={'2013'} /></h1>
                    <p className='text-lg'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.</p>
                </div>
                <div className='lg:ml-27 lg:flex pb-16'>
                    <div className='lg:mb-0 lg:mr-10 mb-20'>
                        <h2 className='max-w-64 text-center mx-auto text-[26px] font-bold leading-10'>
                            PREVIOUSLY WORKED ON
                        </h2>
                    </div>
                    <div className='relative md:mx-0 sm:mx-auto w-3/4'>
                        <CompanyLogo position={'-bottom-[65px] left-0 font-black'} title={'CSSVINNER'} />
                        <CompanyLogo position={'text-white bg-black font-bold lg:rotate-11 -rotate-20 -top-9 left-5 lg:-top-10 lg:left-25'} title={'awwwards.'} />
                        <CompanyLogo position={'font-bold lg:-rotate-8 rotate-19 -bottom-[49px] left-27 lg:left-76'} title={'/thoughtworks'} />
                        <CompanyLogo position={'font-black lg:-bottom-[65px] lg:hidden xl:block bottom-2 left-33 lg:rotate-0 -rotate-3 lg:left-144'} title={'AUTODESK'} />
                        <CompanyLogo position={'font-black lg:bottom-16 -bottom-[47px] lg:-rotate-35 rotate-40 left-55 lg:hidden xl:block lg:left-136'} title={'facebook'} />
                        <CompanyLogo position={'-bottom-[13px] font-bold rotate-27 hidden xl:block left-180'} title={'CSSDesignAwards'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;