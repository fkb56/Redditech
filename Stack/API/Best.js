import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./Stylish/Swag.js";
import { Cards } from "./components/Cards";
import { best } from "../../Routes/Reddit/filter.route";

export const Best = ({ navigation }) => {

    const [bestData, setBestData] = useState([]);

    const uri = (data) => {
        return data.data.secure_media ? data.data.secure_media.oembed.thumbnail_url : null
    }

    useEffect(() => {

        best("reactnative")
            .then((d) => {
                setBestData(d)
            })
    }, []);

    return (
        <>
            <View>
                <Text style={styles.Title}>Best</Text>

                <ScrollView style={styles.container}>
                    <View style={styles.content}>
                        {bestData.length != 0 ? bestData.children.map((data, index) =>
                            <Cards data={data} index={index} />
                        ) : null}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

