import React from 'react'
import {
    ViroVRSceneNavigator,
} from '@akadrimer/react-viro';
import {
    StatusBar
} from 'react-native'
import ViroTeathre from '../../js/ViroMediaPlayer/ViroTheatre';

export default function VRScene({route, navigation}) {

    console.log(route.params)
    return (
        <>
        <StatusBar hidden={true} />
        <ViroVRSceneNavigator
            initialScene={{
                // scene: ViroTeathre,
                scene: require("../../js/ViroMediaPlayer/ViroTheatre")
            }}
            vrModeEnabled={route.params.enabled}
            onExitViro={() => {
                navigation.goBack()
            }}
        />
        </>
    )
}
