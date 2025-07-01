import { IoIosArrowRoundForward } from 'react-icons/io';
import CTABtn from './CTABtn';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex  sticky md:px-12 mx-4 items-center justify-between py-3 md:py-6 bg-black/1 rounded-b-4xl'>
            <div>
                <h1 className='gradual-font font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>DEVLOP.ME</h1>
            </div>
            <div className='flex gap-4 md:gap-16 items-center'>
                <ul className='hidden md:flex gap-9'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <CTABtn icon={<IoIosArrowRoundForward />} title={'Start Project'} />
                <div className='md:hidden block'>
                    <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-2xl' />
                    <div onMouseLeave={() => setIsOpen(false)} className={`absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow z-10 transition-all duration-300 origin-top transform px-4 py-3 ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                        <ul className='space-y-2'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;