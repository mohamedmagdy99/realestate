import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About';
import Projects from './Projects';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Projects" element={<Projects />}/>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
