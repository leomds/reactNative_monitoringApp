import React from 'react';
import { View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import Principal from './principal';
import mock from '../../mocks/Texto';

export default function chamadaPrincipal(){
    return<>
        <ScrollView>
            <SafeAreaView>
                <StatusBar/>
                <Principal {...mock}/>
            </SafeAreaView>
        </ScrollView>
    </>
}