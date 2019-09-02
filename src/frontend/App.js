import React from 'react';
import './App.css';

function App(props) {
  const wallet = props.wallet;
  const contract = props.contract;
  console.log(wallet, contract);

  function signIn(e) {
    wallet.requestSignIn(contract.contractId, 'Research App')
  }

  if(!wallet.isSignedIn()) {
    return (<button onClick={signIn}>signIn</button>) ;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{wallet.getAccountId()}
        </p>
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
