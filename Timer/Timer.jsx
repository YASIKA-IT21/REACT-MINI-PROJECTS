import { useEffect, useState } from "react";
import './App.css';
function App() {
  const [time,settime]=useState(0);
  const [running, setRunning] = useState(false);
  useEffect(()=>{
    let interval;
    if(running)
    {

      interval=setInterval(()=>{
        settime((prevTime)=>prevTime+10);
      },10)
    }
    else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);  // Cleanup interval when component unmounts or `running` changes
  }, [running]);
  
  return (
    <div>
    <h1>TIMER </h1>
    <div>
    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    <div>
        {running ? (
          <button onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button onClick={() => setRunning(true)}>Start</button>
        )}
        <button onClick={() => settime(0)}>Reset</button>
      </div>
    </div></div>

  );
}

export default App;
