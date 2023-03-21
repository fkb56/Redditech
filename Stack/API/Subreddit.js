import {Image, ScrollView, View} from "react-native";
import {styles} from "./Stylish/Swag";
import {Videos} from "./Videos";
import {showSubreddits, showSubredditAbout} from "../../Routes/Reddit/subreddit.route";
import {useEffect, useState} from "react";
import {Cards} from "./components/Cards";
import {SubredditAbout} from "./SubredditAbout";
import {setSubredditAbout} from "../../Redux/Slice/requestSlice";
import {useDispatch} from "react-redux";

export const Subreddit = () => {

    const [subAbout, setSubAbout] = useState([]);
    const [data, setData] = useState([]);

    // const dispatch = useDispatch()
    // dispatch(setSubredditAbout(subAbout))

    useEffect(() => {
        // setData(showSubredditAbout("t3_11nr6p1"))
        showSubreddits("react").then(r => {
            // console.log('fghbjn', r)
            setData(r.data.children)
        });

        showSubredditAbout("react").then(r => {
            // console.log("setSubAbout", r.data)

            setSubAbout(r.data)
        });

    }, []);

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
                <ScrollView>
                    <SubredditAbout data={subAbout}/>
                    {
                        data.length !== 0 ? data.map((value, index) =>
                                <Cards data={value} index={index} key={index}/>
                            )
                            :
                            null
                    }
                </ScrollView>
            </View>
        </>
    )
}