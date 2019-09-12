import React, {useState} from 'react';
import { propsInterface } from '../interfaces/interfaces';
const CodeMirror: any = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
// const {hookd} = require('@reactionaries/hookd')



const PreBox: any = ( props: propsInterface ): any => {
  
  const options = {
    value: "",
    tabsize: 2,
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
  };
  
  
  
  
  let text: string = '';
  return (
    <React.Fragment>
    <div id="preBox">
        <CodeMirror options={options} onChange = {props.handleChange}/>
    </div>
  </React.Fragment>
  );
}

export default PreBox;