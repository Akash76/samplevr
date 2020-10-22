import React from 'react'
import {
    ViroVRSceneNavigator,
} from '@akadrimer/react-viro';

import ViroTeathre from '../../js/ViroMediaPlayer/ViroTheatre';
  

export default function VRScene({scene}) {
    return (
        <ViroVRSceneNavigator
            initialScene={{
                scene: ViroTeathre,
            }}
            vrModeEnabled={false}
        />
    )
}
