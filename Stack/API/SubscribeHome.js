import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Subscribe} from "../../Routes/Reddit/subscribe.route";
import {useEffect, useState} from "react";
import {styles} from "./Stylish/Swag.js";
import backArrow from '../../assets/en-arriere.png'
import {useDispatch} from "react-redux";
import {Cards} from "./components/Cards";
const clear = require("../Screen").clear;

export const SubscribeHome = ({navigation}) => {

    const [SubData, setSubData] = useState([]);

    const dispatch = useDispatch()

    // console.log(items)


    useEffect(() => {
        Subscribe("reactnative")
            .then((d) => setSubData(d))
    }, [SubData.length]);


    return (
        <View style={styles.total}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => {clear}}>
                    <Image source={backArrow} style={styles.arrowImg}/>
                </TouchableOpacity>
                <Text style={styles.Title}>Hot</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                {SubData.length !== 0 ? SubData.children.map((data, index) =>
                    <Cards data={data} index={index}/>
                    ) : null}
                    </View>
            </ScrollView>
        </View>
    )
}