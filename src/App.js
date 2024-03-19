import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skill from './HomePage/Skill/Skill';


function App() {
  return (
    <Routes>
      <Route path='/' element= {<HomePage/>}/>
      <Route path='/' element= {<Skill/>}/>
    </Routes>

    
  );
}

export default App;
