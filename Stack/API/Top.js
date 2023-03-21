import { Text, View, Image, StyleSheet, ScrollView} from "react-native";
import { useEffect, useState } from "react";
import {styles} from "./Stylish/Swag.js";

import { Cards } from "./components/Cards";
import { top } from "../../Routes/Reddit/filter.route";

export const Top = ({ navigation }) => {

    const [topData, setTopData] = useState([]);

    const uri = (data) => {
        return data.data.secure_media ? data.data.secure_media.oembed.thumbnail_url : null
    }

    useEffect(() => {
        top("reactnative")
            .then((d) => {
                setTopData(d)
            })
    }, []);

    return (
        <>
            <View>
                <Text style={styles.Title}>Top</Text>
                <ScrollView style={styles.container}>
                    <View style={styles.content}>
                        {topData.length != 0 ? topData.children.map((data, index) =>
                            <Cards data={data} index={index} />
                        ) : null}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

