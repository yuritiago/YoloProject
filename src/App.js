import './App.css';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import PropertyList from './components/PropertyList';
import Registration from './components/pages/Registration';
import About from './components/About';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Coliving App case</h1>
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/ListaProp">Imovéis</Nav.Link>
        <Nav.Link as={Link} to="/Registration">Cadastro</Nav.Link>
        <Nav.Link as={Link} to="/About">Sobre</Nav.Link>
      </Nav>

      <Routes>
        <Route path='/' exact={true} element={<Home/>}></Route>
        <Route path='/PropertyList' element={<PropertyList/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

