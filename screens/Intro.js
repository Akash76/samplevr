import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function Intro({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: 'black'}}>Akash</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('VR', {
              scene: "../../js/ViroMediaPlayer/ViroTheatre",
              enabled: false
          })}
        />
      </View>
    );
}
