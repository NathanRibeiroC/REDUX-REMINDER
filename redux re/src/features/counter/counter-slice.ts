import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value: 0,
}; 

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incremented(state){
            state.value++;
        },
        //<number could be any other primitive or object
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
        //decrement
        //reset
    }
});

export const {incremented, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;