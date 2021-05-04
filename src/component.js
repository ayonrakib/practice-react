import React, {useState} from 'react';

function Example(){
    const [count, setCount] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    // addAAndB
    // input: none
    // return: nothing, just add a and b
    // method:
    //      increase a value by 10
    //      increase b value by 20
    //      c = a + b
    function addAAndB(){
        setA(a+10);
        setB(b+20);
        setC(a+b);
        printABC();
    }

    // printABC
    // input: nothing
    // return: nothing
    // method:
    //      1. log a b c in console
    function printABC(){
        console.log("printABC => value of a: ", a , " b: ",b," c: ",c);
    }

    return(
        <div>
            <p>
                You clicked this {count} times!
            </p>
            <button onClick = {() => setCount(count+1)}>
                Click me
            </button>
            <button onClick = {() => addAAndB()}>
                Add a and B
            </button>
            <button onClick = {() => printABC()}>
                Print ABC
            </button>
        </div>
    )
    
}

export default Example;