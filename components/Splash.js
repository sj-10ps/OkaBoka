import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Image, YStack } from 'tamagui';

const Splash = ({close}) => {

   
    return (
        <YStack bg={'#3DC4AB'} flex={1} justifyContent={'center'} alignItems={'center'}>
           <Image source={{uri:require('../assets/icon2.png')}} style={{height:194,width:194}}></Image>
            <Image source={{uri:require('../assets/OkaBoka.png')}} style={{height:60,width:160}} resizeMode='contain'></Image>
        </YStack>
    );
}

const styles = StyleSheet.create({})

export default Splash;
