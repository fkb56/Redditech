import {axiosInstance} from "../axios";
import {getStoreData} from "../../Services/service";

let token = getStoreData('token').then(data => {
    token = data
})

export const vote = (value, id) => {
    // TODO ajouter les vérifications
    const {access_token} = token;
    console.log("data hot", value, id)
    return axiosInstance.post(`/api/vote`, {
        dir: value,
        id: id,
        // rank: 2
    })
        .then((data) => {
            console.log("data hot", token)
            return data.data.data
        })
}