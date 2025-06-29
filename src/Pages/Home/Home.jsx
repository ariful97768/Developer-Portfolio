import Navbar from '../../Components/Navbar';
import bgImg from '../../assets/bg-img.png'
import About from './About';
import Contact from './Contact';
import Expertise from './Expertise';
import Footer from './Footer';
import HeroContent from './HeroContent';
import WorkProcess from './WorkProcess';
const Home = () => {
    return (
        <main className='max-w-[1536px] mx-auto'>
            <section style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                <Navbar />
                <HeroContent />
            </section>
            <Expertise />
            <About />
            <WorkProcess />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;