import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
    return (
        <Router>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/page1">Page 1</Link>
                <Link to="/page2">Page 2</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
        </Router>
    );
}

export default App;
