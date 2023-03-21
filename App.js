import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Acceuil from './Stack/Acceuil';
// import { Hot } from "./Stack/API/Hot";
// import { Profile } from "./Stack/API/Profile";
// import { NewReddit } from "./Stack/API/NewReddit";
// import { Best } from "./Stack/API/Best";
// import { Top } from "./Stack/API/Top";
// import { Random } from "./Stack/API/Random";
// import Account from "./Stack/API/Account";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
// import { Search } from "./Stack/API/Search";


import Screen from './Stack/Screen';
import {SearchBar} from "./Stack/API/Search";
import {Hot} from "./Stack/API/Hot";
import {NewReddit} from "./Stack/API/NewReddit";
import {Best} from "./Stack/API/Best";
import {Top} from "./Stack/API/Top";
import {Posts} from "./Stack/API/Posts";
import {AuthView} from "./Stack/API/AuthView";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <Stack.Screen name="Acceuil" component={Acceuil} /> */}
                    {/*<Stack.Screen name="Screen" component={Screen} />*/}
                    <Stack.Screen name="AuthView" component={AuthView} />
                    {/* <Stack.Screen name="Search" component={SearchBar}/>*/}
                    {/*<Stack.Screen name="Account" component={Account}/>*/}
                    {/*<Stack.Screen name="NewReddit" component={NewReddit}/>*/}
                    {/* <Stack.Screen name="Hot" component={Hot}/>*/}
                    {/*<Stack.Screen name="Best" component={Best}/>*/}
                    {/*<Stack.Screen name="Top" component={Posts}/>*/}
                    {/*<Stack.Screen name="Random" component={Random}/>*/}
                    {/*<Stack.Screen name="Profile" component={Profile}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;