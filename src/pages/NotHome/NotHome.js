// import React from "react";
import React, { useState } from "react";

const NotHome = () => {
//   return <h2 class = "nothome-title">This is Not Home Page</h2>;
    const [count, setCount] = useState(0); 

    return (
        <div className="nothome-container">
        <h1 className="nothome-title"> Not Home Page</h1>
        <p className="counter-display">Counter: {count}</p>
        {count >= 5 && <p className="passed5">You passed 5!</p>}
        <div className="button-group">
            <button className="counter-button" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="counter-button" onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
        </div>
    );
};

export default NotHome;