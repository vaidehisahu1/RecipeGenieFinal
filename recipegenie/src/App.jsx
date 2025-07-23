import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Home from './pages/Home';
import RecipeFinder from './pages/RecipeFinder';
import WaterIntakeTracker from './pages/WaterIntakeTracker';
import ProgressTracker from './pages/ProgressTracker';
import GroceryList from './pages/GroceryList';

function App() {
  return (
    <Router>
      {/* Main content area for routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/recipe-finder" element={<RecipeFinder />} />
        <Route path="/services/water-tracker" element={<WaterIntakeTracker />} />
        <Route path="/services/my-progress" element={<ProgressTracker />} />
        <Route path="/services/grocery-list" element={<GroceryList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
