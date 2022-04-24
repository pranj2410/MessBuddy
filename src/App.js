import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import LogIn from './components/LogIn';
import Menu from './components/Menu';
import MenuList from './components/MenuList'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Register/>}/>
          <Route exact path="/login" element={<LogIn/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/menulist" element={<MenuList/>}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
