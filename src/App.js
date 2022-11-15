import './App.scss';
// import Navbar from './components/Navbar/Navbar';
import ButtonNeon from './components/Button/Neon/ButtonNeon';
import ButtonNeu from './components/Button/Neumorphism/ButtonNeu';
import ButtonClay from './components/Button/Claymorphism/ButtonClay';
import AnimatedProfileCard from './components/Cards/AnimatedProfileCard/AnimatedProfileCard';
import WaterDropletCard from './components/Cards/WaterDropletCard/WaterDropletCard';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <section className='buttons'>
        <ButtonNeon />
        <ButtonNeu />
        <ButtonClay />
      </section>
      <section className='profileCards'>
        <AnimatedProfileCard />
        <WaterDropletCard />
      </section>
    </>
  );
}

export default App;
