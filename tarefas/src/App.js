import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (<>
  <Router>
    <ul>
      <li><Link to = '/'>Home</Link></li>
      <li><Link to = '/contact'>Contao</Link></li>
      <li><Link to = '/company'>Companhia</Link></li>
      <li><Link to = '/newproject'>Novo Projeto</Link></li>
    </ul>
    <Container CustomClass = "min_height">
      <Routes>
        <Route exact path='/' element = {<Home/>} ></Route>
        <Route exact path='/contact' element = {<Contact/>} ></Route>
        <Route exact path='/company' element = {<Company/>} ></Route>
        <Route exact path='/newproject' element = {<NewProject/>} ></Route>
      </Routes>
    </Container>
    <p>Footer</p>

  </Router>
  </>);
}

export default App;
