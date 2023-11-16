import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import TopoPH from './TopoPH';
import mock from '../../mocks/Texto';
import GraficoTemperatura from './GraficoPH';


export default function VisualPH({topoph}){
    return<>
        <View>
                <TopoPH {...topoph}/>
                <GraficoTemperatura/>
        </View>
    </>
}