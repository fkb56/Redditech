import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {CardSearch} from "./components/CardSearch";
import {searchV2} from "../../Routes/Reddit/search.route";
import {useSelector} from "react-redux";

const styles = require('./Stylish/SearchBar.js').styles

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const reloadRequest = useSelector(state => state.token.reloadRequest)


    useEffect(() => {
        if (reloadRequest) {
            communities().then(r => console.log(r))
        }
        console.log("reload", reloadRequest)
    }, []);


    function clearSearch() {
        let i = 0;
        setResult([])
    }

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
                <Text style={styles.MainTitle}>Search</Text>
                {result.length == 0 && <>
                    <TextInput style={styles.input} onChangeText={e => setSearch(e)}></TextInput>
                    <TouchableOpacity style={styles.CommunityTitle} title={"Communautés"} onPress={() => communities()}><Text>Communautés</Text></TouchableOpacity>
                </>}
                <TouchableOpacity style={styles.ThcblClear} onPress={() => {
                    clearSearch()
                }}><View style={styles.clearSearch}><Text>clear</Text></View></TouchableOpacity>
                <ScrollView style={styles.SearchContent}>
                    <View style={styles.displayItem}>
                        {result.length !== 0 ?
                            result.data.children.map((data, index) =>
                                    <CardSearch data={data} key={index}/>
                                // <Text>gfhf</Text>
                            ) :
                            <Text style={styles.result}>Aucun résultat</Text>
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    );
};