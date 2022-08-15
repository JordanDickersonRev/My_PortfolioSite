import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProjectPage from './pages/projectPage';
import Home from './pages/home';
import Header from './pages/header';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path= '/project' element={<ProjectPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
