import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Question from './components/question/Question';
import Roadmap from './components/roadmap/Roadmap';
import Slider from './components/slider/Slider';
import Team from './components/team/Team';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Slider/>
      <About/>
      <Roadmap/>
      <Question/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
