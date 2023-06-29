
import './App.css';
import Cards from './components/Cards';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Price from './components/Price';

import Review from './components/Review';

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      
      <Home/>
      <Cards/>
      <Review/>
      <Faq/>
      <Price/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
