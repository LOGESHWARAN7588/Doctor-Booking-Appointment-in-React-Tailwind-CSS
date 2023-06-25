
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <Cards/>
      <Review/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
