import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';


const App : React.FC = ()=>{
  window.scrollTo(0, 0);
  return (
    <>
      <Main></Main>
      <Footer name={'footer'}></Footer>
    </>
  );
}

export default App;

