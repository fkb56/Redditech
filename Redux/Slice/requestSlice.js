import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // request: {
    reloadRequest: false,
    subredditAbout: []
    // }
};

export const requestSlice = createSlice({
    name: 'request',
    initialState,

    reducers: {
        setSubredditAbout: async (state, action) => {
            console.log("action", action.payload)
            // const t = await axiosInstance.get(`/r/${action.payload.name}/about`)
            // console.log('t', t);
            // state.subredditAbout[0] = action.payload
            state.subredditAbout.push( action.payload)

            // await axiosInstance.get(`/r/${action.payload.name}/about`)
            //     .then( (data) => {
            //         console.log('t')
            //         state.subredditAbout.push(data)
            //         console.log(data)
            //     })
            // console.log("action", state.subredditAbout)
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

export const {setSubredditAbout, setReloadRequest, setConnected, setDisplayAuth} = requestSlice.actions;

// export const selectSubAbout = state.subredditAbout;

export default requestSlice.reducer;

