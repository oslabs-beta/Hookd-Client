import  React, { useState } from 'react';
import './App.css';
import PreBox from './components/PreBox';
import PostBox from './components/PostBox';
import Header from './components/Header';



const App: React.FC = () => {
  const [code, setCode] = useState('');
  const [transpiledCode, setTranspiledCode ] = useState('');
  function handleClick(): any {
    // let text = CodeMirror.getValue() as string;
    //use hook'd logic here to set the transpiled code
    //with the returned value with whatever we run on it with Hookd
  }



  function handleChange (newCode: any) {
    console.log(newCode);
    setCode(newCode);
    
  }
  return (
    <React.Fragment>
      <Header />
      <PreBox {...handleChange} />
      <button id ="submitButton" onClick={handleClick}>Submit Code</button>
      <PostBox transpiledCode = {transpiledCode}/>
    </React.Fragment>
  );
}

export default App;

