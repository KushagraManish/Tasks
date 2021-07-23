import logo from './logo.svg';
import './App.css';
import ProductCards from './components/ProductCards';
import Navbar from './components/Navbar';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cta/>
      <ProductCards/>
      
      
    </div>
  );
}

export default App;
