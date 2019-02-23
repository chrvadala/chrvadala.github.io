import React, {Component} from 'react';
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";

import author from './databases/author'
import projects from './databases/projects'

class App extends Component {
  render() {
    return (
      <>
        <Introduction author={author}/>
        <Projects projects={projects}/>
      </>
    );
  }
}

export default App;
