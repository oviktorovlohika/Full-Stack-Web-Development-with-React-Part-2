import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './redux/rootReducer';

function App() {
  
  return (
      <Router>
        <div>
          <Main store={store}/>
        </div>
      </Router>
  );
}


export default App;
