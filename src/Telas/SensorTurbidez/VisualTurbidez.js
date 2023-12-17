import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import TopoTurb from './TopoTurb';
import GraficoTurbidez from './GraficoTurbidez';

export default function TelaTurbidez({topoturb}){
    return<>
    <View>
        <TopoTurb {...topoturb}/>
        <GraficoTurbidez/>
    </View>
    </>
}