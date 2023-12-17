import React from 'react';
import { View } from 'react-native';
import GraficoTemperatura from './GraficoTemperatura';
import TopoTemp from './TopoTemp';


export default function VisualTemperatura({topotemp}){
    return<>
    <View>
        <TopoTemp {...topotemp}/>
        <GraficoTemperatura />
    </View>
    </>
}