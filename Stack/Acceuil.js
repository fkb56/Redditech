// import { StatusBar } from 'expo-status-bar';
// import {
// 	Dimensions,
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	ScrollView,
// 	View,
// 	Image,
// 	Button,
// 	TouchableOpacity,
// 	onPress,
// 	addEventListener
// } from 'react-native';
// import React, { useState, useEffect, Component } from 'react';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import AccountIco from '../assets/AccountIco.png';
// import MenuIco from '../assets/MenuIco.png';
// import SrchImg from '../assets/chercher.png'
// import { AuthView } from "../OAuth/AuthView";
// const styles = require('./Massa/StyleMerde.js').styles
// import { profile, subreddits } from "../Routes/Reddit/profile.route";
// import { addItemToMenu, selectMenu, setAccountBtnM, setIsPhone, setMenu } from "../Redux/Slice/menuSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Footers } from "./Footers";
// import { Hot } from "./API/Hot";
// import { getStoreData } from "../Services/storage.service";
// const { width, height } = Dimensions.get('window');

// const ThemeContext = React.createContext('Home');
// export default function App({ navigation }) {
// 	const dispatch = useDispatch()

// 	const Menu = useSelector((state) => state.menu.items.Menu)
// 	const Maccount = useSelector((state) => state.menu.items.Maccount)
// 	const AccountBtnM = useSelector((state) => state.menu.items.AccountBtnM)
// 	const IsConnected = useSelector((state) => state.menu.items.IsConnected)
// 	const ScltdChannel = useSelector((state) => state.menu.items.ScltdChannel)
// 	const ChnRsett = useSelector((state) => state.menu.items.ChnRsett)
// 	const Chnsett = useSelector((state) => state.menu.items.Chnsett)
// 	const ChnAppsett = useSelector((state) => state.menu.items.ChnAppsett)
// 	const IsPhone = useSelector((state) => state.menu.items.IsPhone);
// 	console.log("acceuil", AccountBtnM)


// 	let token = getStoreData("token").then(data => {
// 		console.log(data ? 'Connecté!' : 'Non connecté!', data)
// 		// console.log(AccountBtnM)
// 		// console.log(setAccountBtnM(true))
// 		// console.log(AccountBtnM)
// 		token = data
// 	})

// 	useEffect(() => {
// 		checkWidth();
// 		// addEventListener('orientationchange', (event) => {
// 		//   width = {width} = Dimensions.get('window');
// 		//   height = {height} = Dimensions.get('window');
// 		// });
// 	}, [])
// 	const checkWidth = () => {
// 		if (width <= 600) {
// 			dispatch(setIsPhone(true))
// 		}
// 	}

// 	return (
// 		<View >
// 			<View style={styles.container}>
// 				<Footers />
// 				<TouchableOpacity onPress={() => dispatch(setAccountBtnM(true))}>
// 					<Text style={styles.backbtn}>Back</Text>
// 				</TouchableOpacity>
// 				<View style={styles.Body}>
// 				<ScrollView style={styles.cont}>
// 					{/* {ChnRsett === true &&
// 					<View style={styles.card}>
// 						<Text style={styles.pagebtn}>R setting</Text>
// 					</View>
// 				}
// 				{ScltdChannel === true &&
// 					<View style={styles.card}>
// 						<Text style={styles.pagebtn}>ScltdChannel</Text>
// 					</View>
// 				}
// 				{IsConnected === true &&
// 					<View style={styles.card}>
// 						<Text style={styles.pagebtn}>IsConnected</Text>
// 					</View>
// 				}
// 				{ChnAppsett === true &&
// 					<View style={styles.card}>
// 						<Text style={styles.pagebtn}>ChnAppsett</Text>
// 					</View>
// 				}
// 				{Chnsett === true &&
// 					<View style={styles.card}>
// 						<Text style={styles.pagebtn}>Chnsett</Text>
// 						</View>
// 					} */}
// 					<StatusBar/>
// 					</ScrollView>
// 				</View>
// 		{/* </View> */}
// 		</View>
// 		</View>
// 	);
// };