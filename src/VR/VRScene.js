import React from 'react'
import {
    ViroVRSceneNavigator,
} from 'react-viro';
  

export default function VRScene({scene}) {
    var scene = <ViroVRSceneNavigator
                initialScene={{
                  scene: scene,
                }}
                vrModeEnabled={false}
                />

    return (
        <>
        {scene}
        </>
    )
}
