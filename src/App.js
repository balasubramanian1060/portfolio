import NavScrollExample from './Components/NavScrollExample';
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Project from './Components/Project';
import Email from "./Components/Email";



function App() {
  return (
    <div className="App">
      < NavScrollExample/>
      < Home/>
      < About/>
      < Project/>
      < Email/>
    </div>
  );
}

export default App;
