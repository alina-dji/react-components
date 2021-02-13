import React from 'react';
import ProfilPhoto from './Components/Profile/ProfilPhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import './style.css';

function App() {
  return (
    <div className="card">
      <ProfilPhoto/>
      <br></br>
      <FullName/>
      <br></br>
      <Address/>
    </div>
  );
}

export default App;
