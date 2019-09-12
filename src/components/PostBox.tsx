import React from 'react';
const CodeMirror: any = require('react-codemirror');
require('codemirror/mode/javascript/javascript');

interface PostBoxProps {
  transpiledCode: string;
  error: string | null;
}
const PostBox: React.FC<PostBoxProps> = (props) => {
  const value = props.error ? 'Sorry something went wrong, there might be a syntax error.\nMake sure to provide a Class Component.' : props.transpiledCode;
  const options = {
    value: value,
    tabsize: 2,
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
  };

  return (
    <div id="postBox">
      <CodeMirror options={options}/>
    </div>
  );
}

export default PostBox;