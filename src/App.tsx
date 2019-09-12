import  React, { useState } from 'react';
import './App.css';
import PreBox from './components/PreBox';
import PostBox from './components/PostBox';
import Header from './components/Header';
import Footer from './components/Footer';
import Errorhandler from './HOC/Errorhandler';

const hookd = require('@reactionaries/hookd');

const App: React.FC = () => {
  const [code, setCode] = useState('Your code here');
  const [transpiledCode, setTranspiledCode ] = useState('');
  const [error, setError] = useState(null);

  function handleChange (newCode: string) {
    setCode(newCode);
  }
  function handleClick (): any {
    try {
      setTranspiledCode(hookd(code));
    }
    catch (error){
      setError(error);
    }
    console.log(transpiledCode);
  }
  return (
      <React.Fragment>
        <Header handleClick = {handleClick}/>
        <PreBox handleChange = {handleChange} code ={code}/>
        <PostBox transpiledCode = {transpiledCode} error = {error}/>
        <Footer />
      </React.Fragment>
  );
}

export default App;

