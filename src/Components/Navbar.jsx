import { IoIosArrowRoundForward } from 'react-icons/io';
import CTABtn from './CTABtn';

const Navbar = () => {
    return (
        <div className='flex sticky px-12 items-center justify-between py-6'>
            <div>
                <h1 className='gradual-font font-extrabold text-4xl'>DEVLOP.ME</h1>
            </div>
            <div className='flex gap-16 items-center'>
                <ul className='flex gap-9'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <CTABtn icon={<IoIosArrowRoundForward />} title={'Start Project'} />
            </div>
        </div>
    );
};

export default Navbar;