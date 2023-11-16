import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import VisualTemperatura from './VisualTemperatura';
import mock from '../../mocks/Texto';


export default function TelaTemperatura(){
    return<>
      <ScrollView>
        <SafeAreaView>
                <StatusBar/>
                <VisualTemperatura {...mock}/>
        </SafeAreaView>
      </ScrollView>
    </>
}