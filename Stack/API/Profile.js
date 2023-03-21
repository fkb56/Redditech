import {Image, Switch, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {editPrefs, profile, showPrefs} from "../../Routes/Reddit/profile.route";
import {styles} from "./Stylish/Swag";

export const Profile = () => {
    const [enable_followers, setenable_followers] = useState(Boolean);
    const [send_welcome_messages, setsend_welcome_messages] = useState(Boolean)
    const [video_autoplay, setvideo_autoplay] = useState(Boolean)
    const [mark_messages_read, setmark_messages_read] = useState(Boolean)
    const [accept_pms, setaccept_pms] = useState(String)
    const [default_comment_sort, setdefault_comment_sort] = useState(String)
    const [profileReddit, setProfileReddit] = useState({
        name: String,
        subreddit: {
            public_description: String
        }

    });
    const [showPref, setShowPref] = useState({});

    useEffect(() => {
        profile()
            .then(({data}) => {
                // console.log("profile", data)
                // console.log(r.data.subreddit.icon_img)
                setProfileReddit(data)
            })
    }, []);

    useEffect(() => {
        // console.log(profile())
        showPrefs()
            .then(r => {
            console.log('followers', r.enable_followers)
                setShowPref(r)
                setenable_followers(r.enable_followers)
                setdefault_comment_sort(r.default_comment_sort)
                setsend_welcome_messages(r.send_welcome_messages)
                setvideo_autoplay(r.video_autoplay)
                setmark_messages_read(r.mark_messages_read)
                setdefault_comment_sort(r.default_comment_sort)
                setaccept_pms(r.accept_pms)
        })
    }, [ accept_pms, default_comment_sort, send_welcome_messages, video_autoplay, mark_messages_read]);

    const img = ({icon_img}) => {
        // console.log("img", data)
        return icon_img !== undefined ? icon_img.split("?")[0] : icon_img
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.Title}>Profile</Text>
                <View>
                    {/*<Text>media {enable_followers}</Text>*/}
                    {/*<Text>{send_welcome_messages}</Text>*/}
                    {/*<Text>{video_autoplay}</Text>*/}
                    {/*<Text>{mark_messages_read}</Text>*/}
                    {/*<Text>{accept_pms}</Text>*/}
                    {/*<Text>{default_comment_sort}</Text>*/}

                    <Image source={{
                        uri: img(profileReddit)
                    }}
                           style={styles.Image}
                    />
                    <Text style={styles.public_description}>name: {profileReddit.name}</Text>
                    <Text
                        style={styles.public_description}>description: {profileReddit.subreddit.public_description}</Text>

                    <Text></Text>
                    <View style={styles.SettingsContainers}>

                        <Text style={styles.public_description}>Réglages</Text>
                        <View style={styles.Settings}>
                            <Text>Enable followers</Text>
                            <Switch value={enable_followers} onValueChange={() => {
                                editPrefs("enable_followers", setenable_followers(!enable_followers))
                            }}></Switch>
                            <Text>Send a welcome messages</Text>
                            <Switch value={send_welcome_messages} onValueChange={() => {
                                editPrefs('setsend_welcome_messages', setsend_welcome_messages(!send_welcome_messages))
                            }}></Switch>
                            <Text>Video autoplay</Text>
                            <Switch value={video_autoplay} onValueChange={() => {
                                editPrefs("video_autoplay", setvideo_autoplay(!video_autoplay))
                            }}></Switch>
                            <Text>Mark messages read</Text>
                            <Switch value={mark_messages_read} onValueChange={() => {
                                editPrefs("mark_messages_read", setmark_messages_read(!mark_messages_read))
                            }}></Switch>
                            <Text>Accept pms</Text>
                            <Text>{accept_pms}</Text>
                            <Text>Default comment sort</Text>
                            <Text>{default_comment_sort}</Text>
                        </View>
                    </View>
                    {/*<Text>{}</Text>*/}
                </View>
            </View>
        </>
    );
}
