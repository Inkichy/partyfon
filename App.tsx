import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ColorPalette} from "./utils/const";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={ColorPalette.Dim}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: ColorPalette.Dim
        }}>
        <View
          style={{
            backgroundColor: ColorPalette.Light,
          }}>

          <Text style={{color: ColorPalette.Text}}>Partyfon</Text>
          <Text>adsf</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
