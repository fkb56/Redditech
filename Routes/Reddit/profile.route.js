import {axiosInstance} from "../axios";
import {getStoreData, storeData} from "../../Services/service";
import axios from "axios";

let token = getStoreData('token').then(data => {
    token = data
})

export const profile = async () => {
    return await axiosInstance.get('/api/me/')
        .then((data) => {
            // console.log("data", data.data)
            let user = {
                name: data.data.display_name
            }
            storeData("user", user)
            return data.data
        })
}


export const showPrefs = async () => {
    return await axiosInstance.get('/api/v1/me/prefs')
        .then((data) => {
            // console.log("show pref", data.data)
            return data.data
        })
}
export const editPrefs = (name, value) => {
    const data = {
        media_preview: value,
        send_welcome_messages: value,
        video_autoplay: value,
        mark_messages_read: value,
        accept_pms: value,
        default_comment_sort: value
    }
    axiosInstance.patch('/api/v1/me/prefs', {
data
    })
        .then((data) => {
            // console.log("data", data.data)
            return data.data
        })
}

