import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import VisualTurbidez from './VisualTurbidez';
import mock from '../../mocks/Texto';


export default function TelaTurbidez(){
    return<>
     <ScrollView>
        <SafeAreaView>
            <StatusBar/>
            <VisualTurbidez {...mock}/>
        </SafeAreaView>
     </ScrollView>
    </>
}