import React from 'react';
import { propsInterface } from '../interfaces/interfaces';
const CodeMirror: any = require('react-codemirror');
require('codemirror/mode/javascript/javascript');


// useEffect(() => {
//   document.getElementById("outputField").innerHTML = "transformed by the Hookd team"
// })



const PostBox = (props: propsInterface) => {
  const options = {
    value: "Transformed Code Will Appear here...",
    tabsize: 2,
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
  };

  return (
    <React.Fragment>
      <div id="postBox">
      <CodeMirror options={options}  />
      </div>
    </React.Fragment>
  );
}

export default PostBox;