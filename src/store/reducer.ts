import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

// Create THUNK action
export const fetchCounterRealCount = createAsyncThunk("counter/get_counter", async (state) => {
    const randomer = Math.random();
    if (randomer > 0.5) {
        return Promise.resolve(999999);
    }
    return Promise.reject(-999999);
});

export const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        }
    },
    extraReducers: (builder) => {
        // Add THUNK action to reducer
        builder
            .addCase(fetchCounterRealCount.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(fetchCounterRealCount.fulfilled, (state, action) => {
                console.log("successfully fetched");
            })
            .addCase(fetchCounterRealCount.rejected, (state, action) => {
                console.log("failed to fetch");
            })
    }
});

const {
    decrement,
    increment
} = counterSlice.actions;

export { decrement, increment };
export default counterSlice.reducer;