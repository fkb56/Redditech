import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";
import localization from 'moment/locale/fr'

export const storeData = async (name, value) => {
    try {
        let data = JSON.stringify(value)
        await AsyncStorage.setItem(`@${name}`, data)
    } catch (e) {
        console.log(`error set ${name} storage`, e)
    }
}

export const getStoreData = async (name) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@${name}`)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(`error get ${name} storage`, e)
    }
}

// Formatage date timestamp en dat
export const dateFormat = (timestamp) => {
        moment.updateLocale("fr", localization)
        moment().utcOffset(60)
        return moment(timestamp * 1000).fromNow()
    }