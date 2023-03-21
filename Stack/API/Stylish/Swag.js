import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 320, height: 200,
    },
    Image: {
        height: 130,
        resizeMode: "center"
    },
    Titlewhite:{color: "white",},
    total: {
        paddingTop: width * 0.025,
    },
    CardContainer: {
        flex: 1,
        backgroundColor: ' pink',
    },
    Header: {
        display: "flex",
        paddingTop: 25,
        paddingLeft: 25,
        width: width * 0.5,
        flexDirection: 'row',
        justifyContent: "center",
        justifyContent: "space-between",
    },
    arrowImg: {
        width: 50,
        height: 50,
    },
    Card: {
        margin: 10,
        width: width / 2,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
    },
    SettingsContainers:{
        width: width * 0.25,
        height: width * 0.35,
        display: 'flex',
        position: 'absolute',
        right: width* 0.04,
        top: width* 0.1,
        borderWidth: 2,
        borderRadius: 20, 
        borderColor: 'black',
    },

    JoinChannelText: {
        backgroundColor: 'orange',
        width: 55,
        color: 'black',
    },
    groupName: {
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    ArrowBtn: {
        paddingTop: 5,
        alignSelf: 'center',
        display: 'flex',
        width: 50,
        height: 50,
    },
    TextBtn: {
        paddingTop: 5,
        alignSelf: 'center',
    },
    Arrow: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    ThcblClear: {
    },
    clearSearch: {
    },
    JoinChannel: {
        color: 'black',
        paddingRight: 55,
        alignSelf: 'center',
        width: width * 0.02,
        height: height * 0.02,
    },
    NumberMembers: { fontSize: 10, color: 'black', marginTop: 1 },
    public_description: {
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center', fontWeight: 'bold',
    },
    Settings:{
        alignItems: 'center',
    },
    container: {
        overflow: "hidden",
        marginTop: width * 0.05,
        width: width * 1,
        height: height * 1,
        display: "flex",
    },
    content: {
        alignItems: 'center',
    },
    Title: {
        alignSelf: 'center',
        fontWeight: "bold",
        justifyContent: "center",
    }
});