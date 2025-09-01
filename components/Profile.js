import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Image, Input, Text, YStack } from 'tamagui';

const Profile = () => {
    const navigate=useNavigation().navigate
    const [name,setName]=useState('')
    return (
        <YStack flex={1} bg={'#3DC4AB'}>
            <YStack alignItems="center" mt={200} gap={5}>
                <Image source={require('../assets/profile.png')} height={100} width={100}></Image>
                <Text fontWeight={700} fontSize={20}>what should we call you?</Text>

            </YStack>

            <YStack marginStart={30} mt={30} gap={5} >
               <Text fontWeight={700} fontSize={15}>Fullname</Text>
               <Input width={300} placeholder='enter your name...' value={name} onChangeText={setName}></Input>
              
            </YStack>
            <YStack alignItems="center" gap={5} mt={10}>
                <Button bg={'#3f3e3eff'} onPress={name.length===0?()=>Alert.alert('please fill your name'):()=>navigate('basic')}><Text color={'white'} >Lets get you know....</Text></Button>
                <Text>your safety is our priority</Text>
            </YStack>

        </YStack>
    );
}

const styles = StyleSheet.create({})

export default Profile;
