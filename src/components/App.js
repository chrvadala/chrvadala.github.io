import Projects from "./Projects";
import Introduction from "./Introduction";
import PropTypes from "prop-types";

export default function App({author, projects}) {
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

App.propTypes = {
  projects: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
}
