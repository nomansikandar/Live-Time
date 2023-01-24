
import './App.css';
import { useState } from 'react'

function App() {
  let newtime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newtime)

  const updateTime = () => {
    let newtime = new Date().toLocaleTimeString();
    setCtime(newtime);
  }

  setInterval(updateTime, 1000)

  return (
    <div className="App">
      <h1>{ctime}</h1>
    </div>
  );
}

export default App;
