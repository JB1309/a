import { BrowserRouter as Router,HashRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import First from './First'
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Last from './Last';


function App() {
  return (
    <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Last />} />
      </Routes>
    </HashRouter>
    
      
    </div>
  );
}

export default App;
