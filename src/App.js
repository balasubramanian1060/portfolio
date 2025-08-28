import NavScrollExample from './Components/NavScrollExample';
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Project from './Components/Project';
import ContactUs from './Components/ContactUs';




function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Home />
      <About />
      <Project />
      <ContactUs />
      
    </div>
  );
}

export default App;
