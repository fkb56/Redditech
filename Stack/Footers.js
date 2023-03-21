import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    TouchableOpacity,
    onPress,
    addEventListener,
    ScrollView
} from 'react-native';
import {
    checkWidth,
    closeChann,
    Channelsett,
    ChannelRsett,
    ChannelAsett,
    buttonHandler,
    AccountBtn,
    AbuttonHandler
} from './Acceuil';

import AccountIco from '../assets/AccountIco.png';
import MenuIco from '../assets/MenuIco.png';
import Account from './API/Account';
import SrchImg from '../assets/chercher.png'
// import {styles} from './Massa/StyleMerde.js'
// import {checkWidth,
//     closeChann,
//     Channelsett,
//     ChannelRsett,
//     ChannelAsett,
//     buttonHandler,
//     AccountBtn,
//     AbuttonHandler } from './Acceuil';
const styles = require('./Massa/StyleMerde.js').styles
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from "react-redux";
import { selectMenu, setAccountBtnM } from "../Redux/Slice/menuSlice";
import { useState } from "react";

export const Footers = () => {
    const Menu = useSelector((state) => state.menu.items.Menu)
    const Maccount = useSelector((state) => state.menu.items.Maccount)
    const AccountBtnM = useSelector((state) => state.menu.items.AccountBtnM)
    const IsConnected = useSelector((state) => state.menu.items.IsConnected)
    const ScltdChannel = useSelector((state) => state.menu.items.ScltdChannel)
    const ChnRsett = useSelector((state) => state.menu.items.ChnRsett)
    const Chnsett = useSelector((state) => state.menu.items.Chnsett)
    const ChnAppsett = useSelector((state) => state.menu.items.ChnAppsett)
    const IsPhone = useSelector((state) => state.menu.items.IsPhone);

    const dispatch = useDispatch()

    return (
        <View>
            <Text>resgkhrg</Text>
            {IsPhone == false &&
                <>
                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => dispatch(setAccountBtnM(false))}>
                            <Image source={MenuIco} style={styles.MicoR}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SearchMenu}>
                        <View style={styles.SearchZn}>
                            <View style={styles.SearchBar}>
                                <TextInput></TextInput>
                            </View>
                        </View>
                        <View style={styles.mZn}>
                            <View style={styles.SearchBtn}><TouchableOpacity><Image style={styles.SrchBtnImg}
                                source={SrchImg}></Image></TouchableOpacity></View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={AbuttonHandler}>
                            <Image source={AccountIco} style={styles.IcoR} ref={Account}></Image>
                        </TouchableOpacity>
                    </View>
                </>
            }
            {IsPhone == true &&
                <>

                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={buttonHandler}>
                            <Image source={MenuIco} style={styles.Mico}></Image>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.Text}>Lesss Giz</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => dispatch(setAccountBtnM(!AccountBtnM))}>
                            <Image source={AccountIco} style={styles.Ico} ref={Account}></Image>
                            <Text>fr</Text>
                        </TouchableOpacity>
                    </View>

                </>
            }
            {Menu == true &&
                <View style={styles.MenuCard}>
                    <View style={styles.MenuBtn}>
                        <TouchableOpacity title='Hot' style={styles.ButtonMenu}>
                            <Text style={styles.MenuBtnText} onPress={() => {
                                console.log('Bouh');
                                navigation.navigate('Hot')
                            }}>Hot</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MenuBtn}>
                        <TouchableOpacity title='NewReddit' style={styles.ButtonMenu}>
                            <Text style={styles.MenuBtnText} onPress={() => {
                                navigation.navigate('NewReddit')
                            }}>NewReddit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MenuBtn}>
                        <TouchableOpacity title='Best' style={styles.ButtonMenu}>
                            <Text style={styles.MenuBtnText} onPress={() => {
                                navigation.navigate('Best')
                            }}>Best</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MenuBtn}>
                        <TouchableOpacity title='Top' style={styles.ButtonMenu}>
                            <Text style={styles.MenuBtnText} onPress={() => {
                                navigation.navigate('Top')
                            }}>Top</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MenuBtn}>
                        <TouchableOpacity title='Random' style={styles.ButtonMenu}>
                            <Text style={styles.MenuBtnText} onPress={() => {
                                navigation.navigate('Random')
                            }}>Random</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MenuBtn}><TouchableOpacity title='All' style={styles.ButtonMenu}><Text
                        style={styles.MenuBtnText}>All</Text></TouchableOpacity></View>
                    <View style={styles.MenuBtnSpeR}><TouchableOpacity title='HapennNow' style={styles.ButtonMenu}><Text
                        style={styles.MenuBtnText}>Happen Now</Text></TouchableOpacity></View>
                </View>
            }
            {Maccount == true &&
                <View style={styles.MenuCard}>
                    <View style={styles.MenuBtn}><TouchableOpacity title='Account' onPress={AccountBtn}
                        style={styles.ButtonMenu}><Text
                            style={styles.MenuBtnText}>Account</Text></TouchableOpacity></View>
                    <View style={styles.MenuBtn}><TouchableOpacity title='Settings' onPress={Channelsett}
                        style={styles.ButtonMenu}><Text
                            style={styles.MenuBtnText}>Settings</Text></TouchableOpacity></View>
                    <View style={styles.MenuBtn}><TouchableOpacity title='App Params' onPress={ChannelAsett}
                        style={styles.ButtonMenu}><Text
                            style={styles.MenuBtnText}>App Params</Text></TouchableOpacity></View>
                    <View style={styles.MenuBtnSpeR}>
                        <TouchableOpacity title='HapennNow' onPress={ChannelRsett}
                            style={styles.ButtonMenu}>
                            <Text
                                style={styles.MenuBtnText}>
                                Reddit Params
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}