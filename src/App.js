import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { initialDishes } from './mocks/dishes';
import MenuComponent from './components/MenuComponent';

function App() {

  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Restorane Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent initialDishes={initialDishes}/>
    </div>
  );
}

export default App;
