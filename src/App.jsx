import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";
import Features from "./components/Features/Features";
import Impact from "./components/Impact/Impact";
import VideoPitch from "./components/VideoPitch/VideoPitch";
import Prototype from "./components/Prototype/Prototype";
import Footer from "./components/Footer/Footer";
import Comments from "./components/Comments/Comments";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem/>
      <Solution/>
      <Features/>
      <Impact/>
      <VideoPitch/>
      <Prototype/>
      <HowItWorks/>
      <Comments/>
      <Footer/>
    </>
  );
}

export default App;