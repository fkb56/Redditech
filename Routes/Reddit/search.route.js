import {axiosInstance} from "../axios";
import {getStoreData} from "../../Services/service";

let token = getStoreData('token').then(data => {
    token = data
})

export const searchV2 = async (search) => {
    return axiosInstance.get(`/api/subreddit_autocomplete_v2?query=${search}&limit=10`)
        .then(r => {
            return r.data
        })
}
