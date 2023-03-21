import * as React from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import {styles} from "./Stylish/Swag";

export const Videos = ({ uri }) => {
    const video = React.useRef(null);

    return (
        <>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: uri,
                }}
                shouldPlay={true}
                // useNativeControls
                // resizeMode="contain"
                isLooping
                onLoad={()=>console.log('start')}
                onLoadStart={()=>console.log('load')}
                // onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </>
    );
};