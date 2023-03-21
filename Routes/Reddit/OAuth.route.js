import {CLIENT_ID, OAUTH_REDDIT, REDIRECT_URI, SCOPE} from "@env"
import {axiosInstance} from "../axios";
import {getStoreData, storeData} from "../../Services/service";
import base64 from "react-native-base64";
import axios from "axios";

export const auth = () => {
    const RESPONSE_TYPE = "code"
    const STATE = "state"
    const DURATION = "permanent"

    return `${OAUTH_REDDIT}authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${STATE}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`
}

const encode = base64.encode(`${CLIENT_ID}:`)

export const accessToken = (response) => {
    let code = response.url.split("code=")
    code = code[1].split('#_')

    return axios.post("https://www.reddit.com/api/v1/access_token",
        {
            code: code[0],
            grant_type: "authorization_code",
            redirect_uri: REDIRECT_URI,
            code_verifier: "challenge"
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${encode}`,
            }
        })
        .then(async (e) => {
            let token
            if (!e.data.error) {
                token = e.data
                await storeData('token', token)
                console.log('new token', token)
                return true
            }
        }).catch((err) => {
            console.log("er", err)
            return false
        })
}

    let token = getStoreData('token').then(data => {
    token = data
})
export const disconnect = () => {

    return axios.post("https://www.reddit.com/api/v1/revoke_token",
        {
            token: "token.access_token",
            token_type_hint: "access_token"
        }, {

            headers: {
                "Authorization": `Basic ${encode}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then( async (e) => {
            console.log("logout success", e.status)
            await storeData("token", null)
        }).catch((err) => {
            console.log("er", err)
            return false
        })
}


