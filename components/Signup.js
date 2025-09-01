import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, View } from 'react-native';
import { Text, YStack,Image,Input, Button } from 'tamagui';
import { sendpushnotification } from '../App';


const Signup = () => {
    const [phone,setphone]=useState('')
    const navigation=useNavigation().navigate
   
    return (
        <YStack pt={60} flex={1}  bg='#3DC4AB' >
            <YStack gap={3} alignItems='center'>
           <Text fontSize={24} fontWeight={800} >Welcome to OkaBoka</Text>
           <Text fontSize={12} fontWeight={600}>Connect with emotionally similar people</Text>
            <Image source={{uri:require('../assets/icon2.png')}} height={160} width={160} mt={10}></Image>
            <Text fontSize={12} fontWeight={500} maxW={150} style={{textAlign:'center'}}>Let’s start with your number your world begins here.</Text>
            </YStack>

            <YStack mx={40} mt={50}>
                <Text fontWeight={'bold'}>Phone Number</Text>
                <Input value={phone} onChangeText={setphone} keyboardType='numeric'/>
                {phone&&phone.length<10&&<Text style={{textAlign:'center',color:'red'}}>Phone number should be 10 digits</Text>}
                <Text fontWeight={300} my={3} style={{textAlign:'center'}} >OR</Text>
                <Button bg={'white'} onPress={()=>Linking.openURL('https://www.whatsapp.com/')}><Text>Continue with whatsapp</Text></Button>

                 <Button width={200} ml={40} mt={10} bg={'#272525ff'}  onPress={phone.length<10?()=>Alert.alert("phone number should be 10 characters"):()=>{navigation('verification')}}><Text color={'white'}>Send me the code</Text></Button>
                   <Text fontWeight={300} mx={3} style={{textAlign:'center'}} >We will never share your number</Text>


            </YStack>
        </YStack>
    );
}

const styles = StyleSheet.create({})

export default Signup;
