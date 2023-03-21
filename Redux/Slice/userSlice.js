import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        // {id: 1, name: 'iPhone10'},
        // {id: 2, name: 'iPadPro'},
        // {id: 3, name: 'iWatch'},
    ]
};

let nextId = 4

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        addItemToPhone: (state, action) => {
            console.log('in')
            console.log(action)
            // state.items = [...state.items, {id: nextId, name: action.payload.name}]
            state.items.push({id: nextId, name: action.payload.name})
            // console.log(state.items)
        },
        removeItemFromPhone: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
    },
});

export const { addItemToPhone, removeItemFromPhone} = userSlice.actions;

export const selectItems = (state) => state.user.items;

export default userSlice.reducer;
