import { useState, useEffect } from "react";

const useCounter = (isForwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(isForwards){
                setCounter((prevCounter) => prevCounter + 1);
            }
            else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isForwards]);
    return counter
}

export default useCounter