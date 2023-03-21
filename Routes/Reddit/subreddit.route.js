import {getStoreData} from "../../Services/service";
import {axiosInstance} from "../axios";
import {setSubredditAbout} from "../../Redux/Slice/requestSlice";
import {useDispatch} from "react-redux";

let token = getStoreData('token').then(data => {
    token = data
})


export const showSubredditAbout = (name) => {
// const dispatch = useDispatch()
    return axiosInstance.get(`/r/${name}/about`)
        .then(({data}) => {
            // dispatch(setSubredditAbout(data))
            return data
        })
}

export const showSubreddit = async (permalink) => {
    return await axiosInstance.get(permalink)
        .then((data) => {
            // console.log("data", data.data)
    console.log(token)
            return data.data
        })
}
export const showSubreddits = async (subredditName) => {
    // console.log(subredditName)
    return axiosInstance.get(`/r/${subredditName}?limit=25`)
        .then((data) => {
            // console.log("dataShowSubreddit", data)
            return data.data
        })
        .catch(e=> {
            console.log("error")
            console.log("eeror", e)
        })
}

export const showSubredditComments = async (subredditName) => {
    // console.log(subredditName)
    return axiosInstance.get(`/r/${subredditName}?limit=25`)
        .then((data) => {
            // console.log("dataShowSubreddit", data)
            return data.data
        })
        .catch(e=> {
            console.log("error")
            console.log("eeror", e)
        })
}
