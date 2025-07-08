import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  let timeRef = useRef(null);
  let btnRef = useRef()
  let colorRef = useRef()

  function handlestart(){
   timeRef.current= setInterval(() => {
      setTime(time => time+1)
    }, 1000);

  }
  function handaleStop(){
    clearTimeout(timeRef.current);
    timeRef.current=null;
  }
  function handleRest(){
    handaleStop();
    setTime(0)
  }

  function handleColor(){
    colorRef.current.style.backgroundColor="red";
  }
  function handleColore(){
    btnRef.current.style.backgroundColor="orange"
  }
  return (
    <>
     <div>
      <h2>stopwatch: {time}</h2>
      <button onClick={handlestart}>
        start
      </button>
      <br/> <br />
      <button onClick={handaleStop}>
        stop
      </button>
      <br /><br />
      <button onClick={handleRest}>
        reset
      </button>
     </div>
     <br /> <br />
     <button ref={colorRef} 
     onClick={handleColore}>
      increament
     </button>
     <br /><br />
     <button 
     ref={btnRef}
     onClick={handleColor}>
      decreament
     </button>
    </>
  )
}

export default App
