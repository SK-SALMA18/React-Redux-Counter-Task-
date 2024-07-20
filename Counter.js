import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Increment, Decrement,Reset } from "./Action";

const Counter = () => {
    const Counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div className="Count">
            <center>
                    <button onClick={()=> dispatch(Increment())}>Increment</button>
                    <p>{Counter}</p>
                    <button onClick={()=> dispatch(Reset())}>Reset</button><br/>
                    <button onClick={()=> dispatch(Decrement())}>Decrement</button>
            </center>
        </div>
    );
};

export default Counter 