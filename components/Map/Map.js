import React, {useState} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {AppConfig} from '../../utils/const';

MapboxGL.setAccessToken(AppConfig.MapboxApiKey)

function MapComponent() {

    const [coords, setCoords] = useState([55.7522, 37.6156])

    return (
        <>
            <MapboxGL.MapView
                logoEnabled={false}
                style={{
                flex: 1,
            }}>
                <MapboxGL.Camera
                    zoomLevel={6}
                    centerCoordinate={coords}
                    />
            </MapboxGL.MapView>
        </>
    );
}
export default MapComponent;
