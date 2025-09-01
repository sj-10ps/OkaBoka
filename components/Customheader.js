import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import {  Pressable, StyleSheet, View } from 'react-native';
import { XStack,Image,Text } from 'tamagui';

const Customheader = () => {
    return (
        <XStack
         bg="#3DC4AB"
         padding="$3"
         ai="center"
         justifyContent='space-between'
         pt="$5"
        >
        <XStack gap={3} alignItems='center'>
            <Image source={require('../assets/icon2.png')} height={48} width={48}/>
            <Image source={require('../assets/OkaBoka.png')} height={36} width={97} resizeMode='contain'/>
              

        </XStack>
         <XStack gap={10} alignItems='center'>
            <Image source={require('../assets/Bell.png')} height={24} width={24}/>
          
            <Image source={require('../assets/profile.png')} height={48} width={48} resizeMode='contain' />
        

        </XStack>
        

        </XStack>
    );
}

const styles = StyleSheet.create({})

export default Customheader;
