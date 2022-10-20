import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ButtonNeon from './components/Button/Neon/ButtonNeon';
import ButtonNeu from './components/Button/Neumorphism/ButtonNeu';
import ButtonClay from './components/Button/Claymorphism/ButtonClay';
import AnimatedProfileCard from './components/AnimatedProfileCard/AnimatedProfileCard';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <section className='buttons'>
        <ButtonNeon />
        <ButtonNeu />
        <ButtonClay />
      </section>
      <div className='profileCards'>
        <AnimatedProfileCard />
      </div>
    </>
  );
}

export default App;
