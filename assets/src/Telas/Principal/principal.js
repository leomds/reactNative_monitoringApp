import React from 'react';
import { View } from 'react-native';
import Topo from '../../Topo';
import Sensor from '../../Sensores';

export default function Principal({topo, sensores}){
    return<>
    <View>
        <Topo {...topo}/>
        <Sensor {...sensores}/>
    </View>
    </>
}