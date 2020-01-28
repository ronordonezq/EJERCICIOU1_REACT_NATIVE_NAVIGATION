import React from 'react';
import{StyleSheet,View,Text,Button} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home({ navigation }){

    const pressHandler= () =>{
        navigation.navigate('ReviewDetails');
        //navigation.push('ReviewDetails');
    }

    return(
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleText }> VISTA PRINCIPAL</Text>
            <Button title='IR A VISTA DETALLES' onPress={pressHandler}/>
        </View>
    )
}

