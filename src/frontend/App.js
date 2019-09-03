import React, {useState} from 'react';
import './App.css';

function App(props) {
  const wallet = props.wallet;
  const contract = props.contract;
  let content;
  console.log(wallet, contract);
  
  // Declare a new state variable, which we'll call "count"
  const [whoSaidHi, setWhoSaidHi] = useState('');  
  const [lastPhrase, setLastPhrase] = useState('');  

  function signIn(e) {
    wallet.requestSignIn(contract.contractId, 'Research App');
  }

  function signOut(e) {
    wallet.signOut();
  }

  function sayHi(e) {
    contract.sayHi();    
  }

  function sayHelloNear(e) {
    contract.saySomePhrase({phrase: "Hello Near"});    
  }

  function getLastwhoSaidHi(e) {
    contract.whoSaidHi().then((lastSpeaker)=>{
      setWhoSaidHi(lastSpeaker);
    });
  }

  function getLastPhrase(e) {
    contract.getLastPhrase({accountId: wallet.getAccountId()})
      .then((lastPharase)=>{
        setLastPhrase(lastPharase);
    });
  }

  if(!wallet.isSignedIn()) {
    content = (
      <div class="content">
        <button onClick={signIn}>signIn</button>
      </div>
    );
  }
  else{
    getLastwhoSaidHi();
    getLastPhrase();
    content = (      
      <div class="content">
        <button onClick={signOut}>sign out</button>
        <p>Your accountId is {wallet.getAccountId()}</p>
        <button onClick={sayHi}>Say "Hi!" to blockchain</button>
        <button onClick={getLastwhoSaidHi}>Show last account who said "Hi!"</button>
        {whoSaidHi 
          ? <p>Last who said "Hi!" is {whoSaidHi}</p>
          : <p>No one yet said "Hi!"</p>
        }
        <button onClick={sayHelloNear}>Say other phrase like "Hello Near"</button>
        <button onClick={getLastPhrase}>Show last phrase"</button>
        {lastPhrase 
          ? <p>Last phrase is {lastPhrase}</p>
          : <p>No one yet said any phrase</p>
        }
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {content}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
