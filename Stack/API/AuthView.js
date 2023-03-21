import {WebView} from "react-native-webview";
import React from "react";
import {Dimensions, Linking, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getStoreData} from "../../Services/service";
import Account from "./Account";
import {accessToken, auth} from "../../Routes/Reddit/OAuth.route";
import {setConnected, setDisplayAuth} from "../../Redux/Slice/tokenSlice";
import {Profile} from "./Profile";

const {width, height} = Dimensions.get('window');

let token = getStoreData('token').then(el => token = el)
export const AuthView = () => {
    const display = useSelector(state => state.token.displayAuth)
    const dispatch = useDispatch()

    Linking.addEventListener('url', async (response) => {
        await accessToken(response)
            .then(r => {
                if (r) {
                    dispatch(setConnected(true))
                    dispatch(setDisplayAuth(!display))
                } else {
                    dispatch(setConnected(false))
                }
            })
    })

    return (
        <View style={styles.Wvctnr}>
            {!token ?
                <WebView
                    source={{
                        uri: auth()
                    }}
                    incognito={true}
                />
                :
                <>
                <Profile/>
                </>
            }
        </View>
    )

}
const styles = StyleSheet.create({
    Wvctnr: {
        height: height * 0.9,
        width: width * 0.9,
    },

});