import Navbar from '../../Components/Navbar';
import bgImg from '../../assets/bg-img.png'
import Expertise from './Expertise';
import HeroContent from './HeroContent';
const Home = () => {
    return (
        <main className='max-w-[1536px] mx-auto'>
            <section style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                <Navbar />
                <HeroContent />
            </section>
            <Expertise />
        </main>
    );
};

export default Home;