import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Preelement from './components/Preelement';
import AboutUs from './components/AboutUs';
import './App.css'

function App() {
  return (
 <div className="container">
     <Header/>
     <Navbar/>
     <Content/>
     <Preelement/>
     <AboutUs/>
 </div>
  );
}

export default App;
