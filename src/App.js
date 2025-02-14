import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import First from './First'
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Last from './Last';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Last />} />
      </Routes>
    </Router>
    
      
    </div>
  );
}

export default App;
