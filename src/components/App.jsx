import React, {useState} from 'react';

function App(){

// ----------------------- Time -----------------------
    const [time,setTime] = useState(0);

    function getTime(){
        setTime(new Date().toLocaleTimeString());
    }

    function autoGetTime(){
        setInterval(getTime,1000);
    }
// ---------------------- Counter ----------------------
    const [state , setCount] = useState(0);

    function increase(){
        setCount(state + 1);
    }

    function decrease(){
        setCount(state - 1);
    }

    return(
    <div className="container">
        <h1>{time}</h1>
        <button onClick={getTime}>Get Time</button>
        <button onClick={autoGetTime}>Auto refresh every second</button>
        <hr/>
        {/* <h1>Counter</h1> */}
        <h1>{state}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
    );
}

export default App;