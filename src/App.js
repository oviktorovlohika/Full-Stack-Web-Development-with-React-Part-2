import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Main store={store}/>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
