import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainComponent from './components/MainComponent'
import createStore from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'

function App() {
  const store = createStore();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
