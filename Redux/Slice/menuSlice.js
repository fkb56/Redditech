import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    items: {
        Menu: false,
        Maccount: false,
        AccountBtnM: false,
        IsConnected: false,
        ScltdChannel: false,
        ChnRsett: false,
        Chnsett: false,
        ChnAppsett: false,
        IsPhone: false,
        IsSearch: false,
        }
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,

    reducers: {
        addItemToMenu: (state, action) => {
            console.log("action")
            console.log(action.payload.keys)
            state.items = [...state.items, action.payload]
        },
        setIsSearch: (state, action) => {
            state.items.IsSearch = action.payload
        },
        setMenu: (state, action) => {
            state.items.Menu = action.payload
        },
        setMaccount: (state, action) => {
            state.items.Maccount = action.payload
        },
        setAccountBtnM: (state, action) => {
            console.log("setAccountBtnM")
            state.items.AccountBtnM = action.payload
        },
        setIsConnected: (state, action) => {
            state.items.IsConnected = action.payload
        },
        setScltdChannel: (state, action) => {
            state.items.ScltdChannel = action.payload
        },
        setChnRsett: (state, action) => {
            state.items.ChnRsett = action.payload
        },
        setChnsett: (state, action) => {
            state.items.Chnsett = action.payload
        },
        setChnAppsett: (state, action) => {
            state.items.ChnAppsett = action.payload
        },
        setIsPhone: (state, action) => {
            console.log("action.payload")
            console.log(action.payload)
            state.items.IsPhone = action.payload
        },
        // TODO add modify reducer
        removeItemFromMenu: (state, action) => {
            state.items = state.items.filter(item => item !== action.payload)
        },
    },
});

export const { addItemToMenu, removeItemFromMenu, setMenu, setIsSearch , setScltdChannel, setMaccount, setAccountBtnM, setIsConnected, setIsPhone, setChnAppsett, setChnRsett, setChnsett} = menuSlice.actions;

export const selectMenu = (state) => state.menu.items;

export default menuSlice.reducer;
