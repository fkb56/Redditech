import {Image, View, Text, TouchableOpacity} from "react-native";
import {styles} from "./Stylish/Swag";
import {Videos} from "./Videos";
import {subscribe} from "../../Routes/Reddit/subscribe.route";
import {useSelector} from "react-redux";
import {showSubredditAbout} from "../../Routes/Reddit/subreddit.route";
import {useEffect} from "react";

export const SubredditAbout = ({data}) => {
    // const data = useSelector(  state => state.subredditAbout)


    // useEffect(() => {
        console.log("data", data)
    // }, []);

    const subscribed = (subred, subscrib) => {
        console.log(data.user_is_subscriber)
        subscribe(subred, subscrib)
        showSubredditAbout("react");

        // dispatch(setReloadRequest(true))
    }

    const uri = (data) => {
        if (data.data.secure_media && data.data.secure_media.oembed) {
            return <Image source={{uri: data.data.secure_media.oembed.thumbnail_url}} style={styles.Image}/>
        } else if (data.data.secure_media && data.data.secure_media.reddit_video) {
            return <Videos uri={data.data.secure_media.reddit_video.scrubber_media_url} style={styles.Image}/>
        }
    }

    return (
        <>
            <View>
                <View>
                    {/*{uri(data)}*/}
                    <Text></Text>
                    <Text></Text>
                    {/*Bannière à mettre en background url peu être vide*/}
                    <Text>data.banner_background_image</Text>
                    <Image source={data.community_icon} />
                    <Text>{data.display_name_prefixed}</Text>
                    <Text style={styles.NumberMembers}>{data.public_description}</Text>
                    <Text style={styles.NumberMembers}>{`${data.subscribers} subscriber`}</Text>
                    <Text style={styles.NumberMembers}>{`${data.active_user_count} users connected`}</Text>
                    <TouchableOpacity style={styles.JoinChannel}
                                      onPress={() => subscribed(data.name, data.user_is_subscriber)}>
                        <Text style={styles.JoinChannelText}>
                            {data.user_is_subscriber ? "Rejoint" : "Rejoindre "}
                        </Text>
                    </TouchableOpacity>


                    {/*/!*TODO Afficher une partie du texte*!/*/}
                    {/*<Text*/}
                    {/*    style={styles.NumberMembers}>{data.data.score > 1 ? `${data.data.score} votes` : `${data.data.score} vote`}</Text>*/}

                    {/*<Text style={styles.public_description}>{data.data.selftext}</Text>*/}
                    {/*<TouchableOpacity style={styles.ArrowBtn} title={"Up"}*/}
                    {/*                  onPress={() => upVote(1, data.data.name)}><Image style={styles.Arrow}*/}
                    {/*                                                                   source={UpArrow}/></TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.TextBtn} title={"0"}*/}
                    {/*                  onPress={() => upVote(0, data.data.name)}><Text>{vote.val}0</Text></TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.ArrowBtn} title={"Down"}*/}
                    {/*                  onPress={() => downVote(-1, data.data.name)}><Image style={styles.Arrow}*/}
                    {/*                                                                      source={DownArrow}/></TouchableOpacity>*/}
                </View>
            </View>
        </>
    )
}