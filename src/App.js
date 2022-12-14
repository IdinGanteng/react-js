import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from  "./components/Intro";
import './Style/LandingPage.css';
import Comedy from './components/Comedy';
import Superheroes from "./components/Superheroes";
import About from './components/About';

function App() {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar/>
      <Intro/>
      </div>
      <div className='comedy'>
        <Comedy/>
      </div>
      <div className='superheroes'>
        <Superheroes/>
      </div>
      <div>
        <About/>
      </div>
     
    </div>
   
    
    
  );
}

export default App;
