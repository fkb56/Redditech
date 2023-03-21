import {Button, ScrollView, Text, View} from "react-native";
import {useEffect, useMemo, useState} from "react";
import {showSubreddit} from "../../Routes/Reddit/subreddit.route";
import {useDispatch} from "react-redux";
import {disconnect} from "../../Routes/Reddit/OAuth.route";
import {setConnected} from "../../Redux/Slice/tokenSlice";
import {dateFormat} from "../../Services/service";
import {CardsComments} from "./components/CardsComments";

export const Posts = () => {
    const [post, setPost] = useState([]);

    const request = () => {
        showSubreddit("/r/react/comments/ky2gf5/hello_members_of_rreact/")
            .then((data) => {
                console.log("data", data[0].data.children[0].data.selftext)
                console.log("data", data[1].data.children[0].data.body)
                console.log("data", data[1].data.children[0].data.replies.data.children[0].data.body)
                return setPost(data)
            })
    }

    useMemo(() => {
        request()
    }, []);
    const dispatch = useDispatch()

    const logout = () => {
        setConnected(false)
        return disconnect()
    }

    return (
        <View>
            <ScrollView>
            <Text>Post</Text>
            <Text>Post</Text>
            <Text>Post</Text>
            <Text>Post</Text>
            <Text>Post</Text>
            <Button title={"logout"} onPress={()=>logout()}/>
            {
                post.length !== 0  ?

                        <>

                    <Text>{post[0].data.children[0].data.subreddit_name_prefixed}</Text>
                    <Text>publié
                        par {post[0].data.children[0].data.author} {post[0].data.children[0].data.author_flair_text}</Text>
                <Text>{dateFormat(post[0].data.children[0].data.created)}</Text>
                <Text>{post[0].data.children[0].data.selftext}</Text>
                <Text>{post[0].data.children[0].data.num_comments} comments</Text>


            {
                post.length !== 0 ? post[1].data.children.map((data, index) =>
                            // <>
                        <CardsComments data={data} key={index}/>
                            // </>
                    )
                    :
                    null
            }
                        </>
                :
                null
            }
            </ScrollView>
        </View>
    )
}