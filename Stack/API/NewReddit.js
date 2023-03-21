import { StyleSheet, Text, View, ScrollView,} from "react-native";
import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import {styles} from "./Stylish/Swag.js";
import { newReddit } from "../../Routes/Reddit/filter.route";
import {clear} from "../Screen";
export const NewReddit = () => {

    const [newRedditData, setNewRedditData] = useState([]);

    useEffect(() => {

        newReddit()
            .then((d) => {
                console.log(d);
                setNewRedditData(d)
            })
    }, []);

    return (
        <>
        <View style={styles.total}>
            <View style={styles.Header}>
            <Text style={styles.Titlewhite}></Text>
                <Text style={styles.Title}>Hot</Text>

                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.content}>
                        {newRedditData.length !== 0 ? newRedditData.children.map((data, index) =>
                            <Cards data={data} index={index} />
                            ) : null}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
