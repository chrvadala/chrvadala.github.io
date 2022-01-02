import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import {author, projects} from './database'

ReactDOM.render(
  <App author={author} projects={projects}/>,
  document.getElementById('root')
);
