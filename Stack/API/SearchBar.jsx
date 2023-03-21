import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {CardSearch} from "./components/CardSearch";
import {searchV2} from "../../Routes/Reddit/search.route";
const styles = require('./Stylish/SearchBar.js').styles
export const Search = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const searchSubreddit = async () => {
        // console.log(await searchV2(search));
        // const searchR = await searchV2(search)
        setResult(await searchV2(search))
        // console.log(result.data)
    }

    const communities = async () => {
        setResult(await searchV2(search))
    }

    const people = async () => {
        // await setResult()
    }

    return (
        <>
            <View style={styles.body}>
                <Text>Search</Text>
                <Button title={"subreddit"} onPress={() => searchSubreddit()}></Button>
                <TextInput style={styles.input} onChangeText={e => setSearch(e)}></TextInput>
                <Button  title={"Communautés"} onPress={()=>communities()}></Button>
                <Button title={"Personnes"} onPress={()=>people()}></Button>
                <ScrollView>
                    {result.length !== 0 ?
                        result.data.children.map((data, index) =>
                                <CardSearch data={data} key={index}/>
                            // <Text>gfhf</Text>
                        ) :
                        <Text style={styles.MainTitle}>Aucun résultat</Text>
                    }
                </ScrollView>
            </View>
        </>
    );
};