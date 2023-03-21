import { styles } from "../Stylish/Swag";
import { Button, Image, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { vote } from "../../../Routes/Reddit/vote.route";
import moment from "moment/moment";
import localization from 'moment/locale/fr'
import { Videos } from "../Videos";
import {subscribe} from "../../../Routes/Reddit/subscribe.route";
import {useDispatch} from "react-redux";
import {setReloadRequest} from "../../../Redux/Slice/tokenSlice";

export const CardSearch = ({ data }) => {
    const dispatch = useDispatch()

    // Récupération du média Image ou Vidéo
    const uri = (data) => {
        if (data.data.community_icon) {
            return <Image source={{ uri: data.data.community_icon.split('?')[0] }} style={styles.Image} />
        }
        // else if (data.data.secure_media && data.data.secure_media.reddit_video) {
        //     return <Image source={{uri: data.data.secure_media.oembed.thumbnail_url}} style={styles.Image}/>
        //     // return <Videos uri={data.data.secure_media.reddit_video.scrubber_media_url} style={styles.Image}/>
        // }
    }

    function nFormatter(num) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "m" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        const item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
        // return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    // Formatage date timestamp en date
    const memberFormat = (val) => {
        return nFormatter(val)
    }

    function upVote(val, id) {
        vote(val, id)
    }

    function downVote(val, id) {
        vote(val, id)
    }

    const subscribed = (subred, subscrib) => {
        subscribe(subred, subscrib)
        // searchV2(subred)
    }

    return (
        <>
            <View style={styles.CardContainer}>
                <View style={styles.Card}>
                    <View>
                        {uri(data)}
                        <Text style={styles.groupName}>{data.data.display_name_prefixed}</Text>
                        <Text style={styles.NumberMembers}>{`${memberFormat(data.data.subscribers)} membres`}</Text>
                        <Text style={styles.public_description}>{data.data.public_description}</Text>
                        {/*<Text>{dateFormat(data.data.created)}</Text>*/}
                        {/*<Text>{data.data.score > 1 ? `${data.data.score} votes` : `${data.data.score} vote`}</Text>*/}
                        {/*<Text>{`${data.data.num_comments} comments`}</Text>*/}
                        <TouchableOpacity style={styles.JoinChannel}  onPress={() => subscribed(data.data.name, data.data.user_is_subscriber)}>
                            <Text style={styles.JoinChannelText}>{data.data.user_is_subscriber ? "Rejoint" : "Rejoindre"}</Text>
                        </TouchableOpacity>
                        {/*<Button title={"0"} onPress={()=>upVote(0, data.data.name)} />*/}
                        {/*<Button title={"Down"} onPress={()=>downVote(-1, data.data.name)} />*/}
                    </View>
                </View>
            </View>
        </>
    );
};