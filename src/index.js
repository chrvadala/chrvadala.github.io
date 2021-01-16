import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap-reboot.css"
import './index.css';

import App from './components/App';
import {author, projects} from './database'

ReactDOM.render(
  <App author={author} projects={projects}/>,
  document.getElementById('root')
);
