import Navbar from '../../Components/Navbar';
import bgImg from '../../assets/bg-img.png'
import HeroContent from './HeroContent';
const Home = () => {
    return (
        <main style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}>
            <Navbar />
            <HeroContent/>
        </main>
    );
};

export default Home;