import {styles} from "../Stylish/Swag";
import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import {vote} from "../../../Routes/Reddit/vote.route";

import {Videos} from "../Videos";
import UpArrow from '../../../assets/UpArrow.png';
import DownArrow from '../../../assets/DownArrow.png';
import {WebView} from "react-native-webview";
import {disconnect} from "../../../Routes/Reddit/OAuth.route";
import {dateFormat} from "../../../Services/service";

export const Cards = ({data}) => {
    // Récupération du média Image ou Vidéo
    const uri = ({data}) => {
        if (data.secure_media && data.secure_media.oembed) {
            return <Image source={{uri: data.secure_media.oembed.thumbnail_url}} style={styles.Image}/>
        } else if (data.secure_media && data.secure_media.reddit_video) {
            return <Videos uri={data.secure_media.reddit_video.scrubber_media_url} style={styles.Image}/>
        }
    }



    function upVote(val, id) {
        vote(val, id)
    }

    function downVote(val, id) {
        vote(val, id)
    }

    return (
        <>
            <View style={styles.Card}>
                <View>
                    {uri(data)}
                    <Text style={styles.groupName}>{data.data.title}</Text>
                    <Text style={styles.NumberMembers}>{`author ${data.data.author}`}</Text>
                    {/*TODO Afficher une partie du texte*/}
                    <Text style={styles.NumberMembers}>{dateFormat(data.data.created)}</Text>
                    <Text
                        style={styles.NumberMembers}>{data.data.score > 1 ? `${data.data.score} votes` : `${data.data.score} vote`}</Text>
                    <Text style={styles.NumberMembers}>{`${data.data.num_comments} comments`}</Text>
                    {/*<WebView*/}
                    {/*    originWhitelist={['*']}*/}
                    {/*    source={{html: data.data.selftext_html}}*/}
                    {/*    style={{height: 60}}*/}
                    {/*    onScroll={null}*/}
                    {/*/>*/}

                    <Text style={styles.public_description}>{data.data.selftext}</Text>
                    <TouchableOpacity style={styles.ArrowBtn} title={"Up"}
                                      onPress={() => upVote(1, data.data.name)}><Image style={styles.Arrow}
                                                                                       source={UpArrow}/></TouchableOpacity>
                    <TouchableOpacity style={styles.TextBtn} title={"0"}
                                      onPress={() => upVote(0, data.data.name)}><Text>{vote.val}0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.ArrowBtn} title={"Down"}
                                      onPress={() => downVote(-1, data.data.name)}><Image style={styles.Arrow}
                                                                                          source={DownArrow}/></TouchableOpacity>
                </View>
            </View>
        </>
    );
};