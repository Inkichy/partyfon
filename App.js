import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import {AppConfig, ColorPalette} from "./utils/const";

import MapComponent from "./components/Map/Map";
import MenuComponent from './components/Menu/Menu';

function App() {
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'blue',
            }}>
                <MapComponent />
                <MenuComponent />
            </View>
        </View>
  );
}

export default App;
