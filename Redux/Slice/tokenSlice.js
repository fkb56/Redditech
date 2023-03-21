import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    connected: false,
    displayAuth: false,
    reloadRequest: false,
};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,

    reducers: {
        setConnected: (state, action) => {
            console.log(action.payload)
            state.connected = action.payload
        },
        setDisplayAuth: (state, action) => {
            state.displayAuth = action.payload
        },
        setReloadRequest: (state, action) => {
            state.reloadRequest = action.payload
        },
        addItemToToken: (state, action) => {
            console.log('in')
            state.items = [...state.items, {id: nextId, name: action.payload.name}]
        },
        removeItemFromToken: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
    },
});

export const { addItemToToken, setReloadRequest, setConnected, setDisplayAuth} = tokenSlice.actions;

export const selectItems = (state) => state.token.items;

export default tokenSlice.reducer;
