import React, {Component} from 'react';
import Projects from "./Projects";
import Introduction from "./Introduction";

import author from '../databases/author'
import projects from '../databases/projects'

class App extends Component {
  render() {
    return (
      <>
        <Introduction author={author}/>
        <Projects projects={projects}/>
        <small>
          Template made by <a href="https://github.com/chrvadala">chrvadala</a>{" "}
          and available on this <a href="https://github.com/chrvadala/chrvadala.github.io">website</a>.{" "}
          Feel free to clone it and create your own website.
          {/* ... but please keep these lines. */}
        </small>
      </>
    );
  }
}

export default App;
