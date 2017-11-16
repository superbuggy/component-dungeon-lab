import React                 from 'react';
import ReactDOM              from 'react-dom';
import {StyletronProvider}   from 'styletron-react'
import Styletron             from 'styletron-client'

import App                   from './components/App';
import registerServiceWorker from './registerServiceWorker';

const styletron = new Styletron()

ReactDOM.render((
  <StyletronProvider styletron={styletron}>
    <App />
  </StyletronProvider>
), document.getElementById('root'));

registerServiceWorker();
