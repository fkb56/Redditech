import axios from "axios";
import {getStoreData, storeData} from "../Services/service";
import base64 from "react-native-base64";
import {CLIENT_ID, OAUTH_REDDIT, REDIRECT_URI, SCOPE} from "@env"


let token = getStoreData('token').then(data => {
    token = data
})

export const axiosInstance = axios.create({
    baseURL: "https://oauth.reddit.com",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        if (token.access_token) {
            config.headers["Authorization"] = `Bearer ${token.access_token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (res) => {
        return res
    },
    async (err) => {
        const originalConfig = err.config

        if (err.response) {
            //     Le token à expiré
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true

                try {
                    const {data} = await refreshToken()
                    console.log("test refresh",data)
                    await storeData("token", data)
                    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`
                    return axiosInstance(originalConfig)
                } catch (_error) {
                    if (_error.response && _error.response.data) {
                        await storeData('token', null)
                        console.log('error')
                        return Promise.reject(_error.response.data)
                    }

                    return Promise.reject(_error)
                }
            }

            if (err.response.status === 403) {
                console.log("error 403", err.response.headers)
            }

            if (err.response.status === 404) {
                console.log("404 Not Found")
            }
        }

        return Promise.reject(err)
    }
)

const refreshToken = async () => {
    const refreshToken = token.refresh_token
    const encode = base64.encode(`${CLIENT_ID}:`)

    return axios.post("https://www.reddit.com/api/v1/access_token",
        {
            grant_type: "refresh_token",
            refresh_token: refreshToken
        }, {
            headers: {
                "Authorization": `Basic ${encode}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
}