import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import { NewList } from './components/newList'
function App() {
  const [Count, setCount] = useState<any>([]);
  const addList = () => {
    setCount((Count:any) => [...Count, <NewList />]);
    // return count;
    console.log("dddd", Count);
  }
  return ( 
    <>
    {Count.map(() => (
        <NewList />
      ))}  
     {/* {Count.map((NewList : any) => ( <NewList /> ))}  */}
      <button onClick={addList}>+ Add</button>
    </>
  );
}

export default App;
