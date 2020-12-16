import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainLoader from './component/main-loader';
//redux
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import { loadPollutionData} from './redux/actions/pollution';

const store = configStore();
const JSX = () => {
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
}


const rootElement = document.getElementById("root");
ReactDOM.render(<MainLoader />, rootElement);

store.dispatch(loadPollutionData()).then(() => {
  ReactDOM.render(<Jsx />, rootElement);
})