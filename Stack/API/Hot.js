import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {hot} from "../../Routes/Reddit/filter.route";
import {useEffect, useState} from "react";
import {styles} from "./Stylish/Swag.js";
import backArrow from '../../assets/en-arriere.png'
import {useDispatch} from "react-redux";
import {Cards} from "./components/Cards";
const clear = require("../Screen").clear;

export const Hot = () => {

    const [hotData, setHotData] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        hot("reactnative")
            .then((d) => setHotData(d))
    }, [hotData.length]);

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

                {hotData.length !== 0 ? hotData.children.map((data, index) =>
                    <Cards data={data} key={index}/>
                    ) : null}
                    </View>
            </ScrollView>
        </View>
    )
}