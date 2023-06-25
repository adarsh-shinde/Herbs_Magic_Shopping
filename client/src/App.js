import NavBar from './components/NavBar/NavBar';
import HorizontalLine from './components/TopBar/HorizontalLine/HorizontalLine';
import TopBar from './components/TopBar/TopBar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

    <div className="App">
      <TopBar/>
      <HorizontalLine/>
      <NavBar/>
      <Routes>
        
      </Routes>

    </div>
    </Router>
  );
}

export default App;
