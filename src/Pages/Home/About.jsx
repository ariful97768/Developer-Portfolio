import aboutBgImg from '../../assets/Vector.png'
import CompanyLogo from '../../Components/CompanyLogo';
import SectionLabel from '../../Components/SectionLabel';
import ShiningBoldTxt from '../../Components/ShiningBoldTxt';
const About = () => {
    return (
        <section style={{ backgroundImage: `url(${aboutBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
            <div className='pt-32'>
                <div className='max-w-5xl pb-40 text-center mx-auto'>
                    <div className='flex mr-10 justify-end'>
                        <SectionLabel text={'About'} />
                    </div>
                    <h1 className='text-7xl font-bold leading-32 mt-9 mb-4'>I’ve been <ShiningBoldTxt text={'Developing'} /> Websites since <ShiningBoldTxt text={'2013'} /></h1>
                    <p className='text-lg'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.</p>
                </div>
                <div className='ml-27 flex pb-16'>
                    <div className=''>
                        <h2 className='max-w-64 text-[26px] font-bold leading-10'>
                            PREVIOUSLY WORKED ON
                        </h2>
                    </div>
                    <div className='relative w-3/4'>
                        <CompanyLogo position={'-bottom-[65px] left-0 font-black'} title={'CSSVINNER'} />
                        <CompanyLogo position={'text-white bg-black font-bold rotate-11 -top-10 left-25'} title={'awwwards.'} />
                        <CompanyLogo position={'font-bold -rotate-8 -bottom-13 left-76'} title={'/thoughtworks'} />
                        <CompanyLogo position={'-bottom-[65px] font-black left-144'} title={'AUTODESK'} />
                        <CompanyLogo position={'bottom-16 -rotate-35 font-black left-136'} title={'facebook'} />
                        <CompanyLogo position={'-bottom-[13px] font-bold rotate-27 left-180'} title={'CSSDesignAwards'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;