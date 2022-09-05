import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProjectPage from './pages/projectPage';
import Home from './pages/home';
import Header from './pages/header';
import ScrollToTop from './pages/scrollToTop';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path= '/projects/:projectname' element={<ProjectPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
