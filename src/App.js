import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import ZodiacCard from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <ZodiacCard/>
    <Footer/>
    </div>
  );
}

export default App;
