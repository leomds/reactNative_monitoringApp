import React from 'react';
import { SafeAreaView, StatusBar,ScrollView } from 'react-native';
import VisualPH from './VisualPH';
import mock from '../../mocks/Texto';


export default function TelaPH({route}){
    return<>
    <ScrollView>
        <SafeAreaView>
                <StatusBar/>
                <VisualPH {...mock}/>
        </SafeAreaView>
    </ScrollView>
    </>
}