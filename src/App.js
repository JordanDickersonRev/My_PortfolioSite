import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProjectPage from './pages/projectpage/projectpage';
import Home from './pages/home/home';
import Header from './pages/header/header';

function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path= '/projects/:projectname' element={<ProjectPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;