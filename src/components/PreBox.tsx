import React from 'react';
import {motion} from 'framer-motion';
const CodeMirror: any = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
// const {hookd} = require('@reactionaries/hookd')

interface PreBoxProps {
  handleChange: (code: string) => void;
  code: string;
}

const PreBox: React.FC<PreBoxProps> = ( props): any => {
  const options = {
    value: '',
    tabsize: 2,
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
  };
  return (
    <div id="preBox">
        <CodeMirror options={options} onChange = {props.handleChange}/>
    </div>
  );
}

export default PreBox;