import {axiosInstance} from "../axios";

export const hot = async (name="all", lang = "FR") => {
    return await axiosInstance.get(`/r/${name}/hot?g=${lang}&limit=24`)
        .then((data) => {
            return data.data.data
        })
}

export const newReddit = async (name="all", lang = "FR") => {
    return await axiosInstance.get(`/r/${name}/new?g=${lang}`)
        .then((data) => {
            console.log("data new route", data.data.data)
            return data.data.data
        })
}

export const best = async (name="all", lang = "FR") => {
    return await axiosInstance.get(`/r/${name}/best?g=${lang}`)
        .then((data) => {
            console.log("data best", data.data.data)
            return data.data.data
        })
}

export const top = async (name="all", lang = "FR") => {
    return await axiosInstance.get(`/r/${name}/top?g=${lang}`)
        .then((data) => {
            console.log("data top", data.data.data)
            return data.data.data
        })
}

export const random = async (name="all") => {
    return await axiosInstance.get(`/r/${name}/random`)
        .then((data) => {
            console.log("data random", data.data)
            return data.data
        })
}
