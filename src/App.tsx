import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SideBar } from './components/navigation/SideBar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<SideBar />} />
        </Routes>
    </Router>
  );
}

export default App;
