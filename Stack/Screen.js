import Acceuil from './Acceuil';
import { SearchBar } from './API/Search';
import AccountIco from '../assets/AccountIco.png';
import AccountIcoBLK from '../assets/AccountIcoBLK.png';
import RedditIco from '../assets/Reddit2.png'
import FilterSlctr from '../assets/filterSlctr.png';
import MenuIco from '../assets/MenuIco.png';
import BackBtn from '../assets/en-arriere.png';
import ChercherIco from '../assets/chercher.png';
import HotBTN from '../assets/HotBTN.png';
import { addItemToMenu, selectMenu, setAccountBtnM, setIsPhone, setIsSearch, setMenu, setScltdChannel } from "../Redux/Slice/menuSlice";
import { setDisplayAuth } from "../Redux/Slice/tokenSlice";
const styles = require('./Massa/StyleMerde.js').styles
import { useDispatch, useSelector } from "react-redux";
import { searchV2 } from '../Routes/Reddit/search.route';
import {
	Dimensions,
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	ImageBackground,
	Button,
	TouchableOpacity,
	onPress,
	addEventListener,
	ScrollView,
	BackHandler
} from 'react-native';
import { Hot } from "../Stack/API/Hot";
import { Profile } from "../Stack/API/Profile";
import { NewReddit } from "../Stack/API/NewReddit";
import { Best } from "../Stack/API/Best";
import { Top } from "../Stack/API/Top";
import { Random } from "../Stack/API/Random";
import * as ScreenOrientation from 'expo-screen-orientation';
import Account from './API/Account';
import { useState } from 'react';
import { AuthView } from './API/AuthView';
import {SubscribeHome} from "./API/SubscribeHome";
export const Screen = () => {

	const dispatch = useDispatch()
	const MenuModal = useSelector((state) => state.menu.items.Menu)
	ScreenOrientation.unlockAsync()
	const DisplaySearch = false;
	const ScltdChannel = useSelector((state) => state.menu.items.ScltdChannel)
	const AccountModal = useSelector((state) => state.menu.items.AccountBtnM)
	const SearchModal = useSelector((state) => state.menu.items.IsSearch)

	const OAuthModal = useSelector((state) => state.token.displayAuth)
	const [HotModal, setHotModal] = useState('');
	const [NewModal, setNewModal] = useState('');
	const [BestModal, setBestModal] = useState('');
	const [TopModal, setTopModal] = useState('');
	const [RandomModal, setRandomModal] = useState('');
	const [ProfileModal, setProfileModal] = useState('');
	const [Search, setSearch] = useState('');
	const [Searchdisp, setSearchdisp] = useState('');

	const [result, setResult] = useState([]);
	const [setSearchContent, SearchContent] = useState([]);

		const clear = () => {
		console.log('clearing...');
		dispatch(setMenu(false));
		dispatch(setIsSearch(false))
		dispatch(setAccountBtnM(false))
		dispatch(setDisplayAuth(false))
		dispatch(setScltdChannel(false))
		setNewModal(false)
		setBestModal(false)
		setTopModal(false)
		setRandomModal(false)
		setHotModal(false)
	}
	async function launchSearch() {
		setSearchdisp(!Searchdisp);
	}
	const buttonHandler = async (idx) => {
		switch (idx) {
			case 'Menu':
				dispatch(setMenu(!MenuModal));
				InitModal('Menu');
				break;
			case 'Search':
				dispatch(setIsSearch(!SearchModal))
				await  InitModal('Search');
				break;
			case 'Account':
				dispatch(setAccountBtnM(!AccountModal))
				await InitModal('Account');
				break;
			case 'SlctdChannel':
				console.log(ScltdChannel);
				dispatch(setScltdChannel(!ScltdChannel))
				break;
			case 'FltrBack':
				dispatch(setScltdChannel(!ScltdChannel))
				break;
			case 'OAuth':
				dispatch(setDisplayAuth(!OAuthModal))
				dispatch(setAccountBtnM(!AccountModal))
				console.log('OAuthModal: ' + OAuthModal);
				InitModal('OAuth')
				break;
			case 'Hot':
				setHotModal(!HotModal)
				await InitModal('Hot')
				break;
			case 'New':
				setNewModal(!NewModal)
				console.log('link new'); 
				await InitModal('New')
				break;
			case 'Best':
				setBestModal(!BestModal)
				await InitModal('Best')
				break;
			case 'Top':
				setTopModal(!TopModal)
				await InitModal('Top')
				console.log('link top');
				break;
				case 'Profile':
					setProfileModal(!ProfileModal)
					await InitModal('Profile')
					console.log('link profile');
					break;	
			default:
				break;
		}
		async function InitModal(Modal) {
			switch (Modal) {
				case
					'Menu':

					break;
				case
					'Search':
					break;
				case
					'Account':
					break;
				case
					'OAuth':
					break;
					case
					'Profile':
					break;
				case
					'Hot':
					dispatch(setMenu(false));
					setNewModal(false);
					setBestModal(false);
					setTopModal(false);
					console.log('hot');
					break;
				case
					'New':
					dispatch(setMenu(false));
					setHotModal(false);
					setBestModal(false);
					setTopModal(false);
					console.log('new');
					break;
				case
					'Best':
					dispatch(setMenu(false));
					setNewModal(false);
					setHotModal(false);
					setTopModal(false);
					console.log('best');
					break;
				case
					'Top':
					dispatch(setMenu(false));
					setNewModal(false);
					setHotModal(false);
					setBestModal(false);
					console.log('top');
					break;
				default:
					break;
			}
		}
	}
	return (<>
		<View style={styles.MainView}>
			<View>
				<TouchableOpacity style={styles.clearBtn} onPress={() => {clear()}}>
					<View style={styles.clearBtnctn}>
						<Text>clear</Text>
					</View>
				</TouchableOpacity>

				{/* {DisplaySearch && <View style={styles.ScreenContainer}><Text>OUI</Text></View>} */}
			</View>
			{SubscribeHome && <View style={styles.SingleDisplay}></View>}
			{OAuthModal && <View style={styles.SingleDisplay}><AuthView /></View>}
			{ProfileModal && <View style={styles.SingleDisplay}><Profile /></View>}
			{Searchdisp && <View style={styles.SingleDisplay}>
				{result &&
					<SearchBar />
				}
			</View>}
			{RandomModal && <View style={styles.SingleDisplay}><Random/></View>}
			{TopModal && <View style={styles.SingleDisplay}><Top/></View>}
			{BestModal && <View style={styles.SingleDisplay}><Best/></View>}
			{NewModal && <View style={styles.SingleDisplay}><NewReddit/></View>}
			{HotModal && <View style={styles.SingleDisplay}><Hot/></View>}
			{AccountModal &&
				<View style={styles.AccountCont}>
					<View style={styles.ModalLeft}>
						<Text style={styles.BlkText}>Account{AccountModal}</Text>
						<View style={styles.AccountFzone}>
							<TouchableOpacity onPress={() => buttonHandler('OAuth')} style={styles.CntnAccnt}><Image source={RedditIco} style={styles.ImgCntnAccnt} ></Image></TouchableOpacity>
							<TouchableOpacity onPress={() => buttonHandler('Profile')} style={styles.CntnAccnt}><Image source={AccountIcoBLK} style={styles.ImgCntnAccnt} ></Image></TouchableOpacity>
						</View>
					</View>
				</View>
			}
			{MenuModal &&
				<ScrollView style={styles.MenuCntr}>
					<View style={styles.Modal}>

						<Text style={styles.BlkText}>Menu</Text>
						<TouchableOpacity onPress={() => buttonHandler('Hot')}><View style={styles.MenuSlctr}><Text style={styles.BlkText}>Hot</Text></View></TouchableOpacity>
						<TouchableOpacity onPress={() => buttonHandler('New')}><View style={styles.MenuSlctrblk}><Text style={styles.WHText}>New</Text></View></TouchableOpacity>
						<TouchableOpacity onPress={() => buttonHandler('Best')}><View style={styles.MenuSlctr}><Text style={styles.BlkText}>Best</Text></View></TouchableOpacity>
						<TouchableOpacity onPress={() => buttonHandler('Top')}><View style={styles.MenuSlctrblk}><Text style={styles.WHText}>Top</Text></View></TouchableOpacity>
					</View>
				</ScrollView>
			}
		</View>
		<View style={styles.NavBarView}>
			<TouchableOpacity style={styles.NavPart} onPress={() => buttonHandler('Menu')}><Image source={MenuIco} style={styles.NavImgMenu}></Image></TouchableOpacity>
			<TouchableOpacity style={styles.NavPart} onPress={() => launchSearch()} ><Image source={ChercherIco} style={styles.NavImgSrch}></Image></TouchableOpacity>
			<TouchableOpacity style={styles.NavPart} onPress={() => buttonHandler('Account')} ><Image source={AccountIco} style={styles.NavImg}></Image></TouchableOpacity>
		</View>
	</>)
}
export default Screen;