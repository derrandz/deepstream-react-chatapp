import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import deepstream from 'deepstream.io-client-js'
import { deepstream as dsconfig } from './config'

const client = deepstream(`${dsconfig.server.ws.address}:${dsconfig.server.ws.port}`)

ReactDOM.render(<App deepstreamClient={client} />, document.getElementById('root'));
registerServiceWorker();
