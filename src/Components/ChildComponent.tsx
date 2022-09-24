import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchCounterRealCount, increment } from "../store/reducer";

export default function ChildComponent() {
    const count = useSelector((state) => {
        return (state as any).counterReducer.counter;
    });

    const dispatch = useDispatch<any>();

    return <div style={{ display: "flex", "gap": 10 }}>
        <button onClick={() => dispatch(decrement())}>----</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>++++</button>
        <br />
        <button onClick={() => {
            dispatch(fetchCounterRealCount())
        }}>Fetch from API</button>
    </div>
}