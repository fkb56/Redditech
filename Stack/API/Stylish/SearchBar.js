import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: 'white',
        alignItems: 'center', 
    },
    MainTitle: {
        color: 'black',
        fontWeight: 'bold',

    },
    CommunityTitle: {
        borderRadius: 20,
        padding: 2,
        paddingHorizontal:4,
        margin: 2,
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    UserBTN:{
        alignItems: 'center',
        color: 'red',
    },
    result: {
        color: 'red',
        backgroundColor: 'orange',
    },
    SearchContent: {
        width: width * 0.9,
        display: 'flex',
        height: height * 0.6,
     }, 
     displayItem: {
        alignItems: "center",
        width : width * 0.9,
    },
    input: {
        borderStyle: "solid",
        backgroundColor: 'white',
        borderColor: "orange",
        marginTop: 20,
        borderWidth: 2,
        width: width *0.2,
        borderRadius: 10,
        padding: 10
    },
});