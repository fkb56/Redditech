import {axiosInstance} from "../axios";
import {getStoreData} from "../../Services/service";

let token = getStoreData('token').then(data => {
    token = data
})

export const subredditsSubscribe = () => {
    return axiosInstance.get('/subreddits/mine/subscriber')
        .then((data) => {
            console.log("data", data.data)
            return data.data
        })
}

export const subscribe = (subred, action) => {
    console.log(subred, action)
    return axiosInstance.post('/api/subscribe', {
        action: action ? 'unsub' : 'sub',
        sr: subred
    })
        .then((data) => {
            console.log("data", data.data)
            return data.data
        })
}