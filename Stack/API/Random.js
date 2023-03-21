import {Text, View, Image, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {Cards} from "./components/Cards";
import {random} from "../../Routes/Reddit/filter.route";

export const Random = () => {

    const [randomData, setRandomData] = useState([]);

    const uri = (data) => {
        return data.data.secure_media ? data.data.secure_media.oembed.thumbnail_url : null
    }

    useEffect(() => {

        random()
            .then((d) => {
                setRandomData(d)
            })
    }, []);

    return (
        <>
            <View>
                <Text style={{textAlign: 'center', marginTop: 30}}>Random</Text>
                {randomData.length != 0 ? randomData.map(e=>{ e.data.children}).map((data, index) =>
                    <Cards data={data} index={index}/>
                ) : null}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Image: {
        // width: 300,
        height: 80,
        resizeMode: "center"
    }
})
