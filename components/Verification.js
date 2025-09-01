import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Image, Input, Text, XStack, YStack } from 'tamagui';

const Verification = () => {
     const [otp, setOtp] = useState(["", "", "", ""])
     const inputsref=useRef([])
     const navigate=useNavigation().navigate

     const handlechange=(text,index)=>{
        setOtp(prev=>{
                    const newotp=[...prev]
                    newotp[index]=text
                    return newotp
                 })

        if(text&&index<4){
            inputsref.current[index+1]?.focus()
        }


     }
    return (
      <YStack pt={60} flex={1}  bg='#3DC4AB' >
        <YStack alignItems='center'>
             <Image source={{uri:require('../assets/icon2.png')}} height={160} width={160} mt={40}></Image>
           
        </YStack>
          <YStack alignItems='center' gap={4} mt={50}>
            <Text fontWeight={700} fontSize={24}>Verify Your Number</Text>
            <Text fontSize={12}>We've sent a code to your phone</Text>

              <XStack gap={20} mt={10}>
                 <Input keyboardType='numeric' maxLength={1} value={otp[0]} onChangeText={(text)=>handlechange(text,0)} ref={(el)=>(inputsref.current[0]=el)}></Input>

                   <Input keyboardType='numeric' maxLength={1} value={otp[1]} onChangeText={(text)=>handlechange(text,1)} ref={(el)=>(inputsref.current[1]=el)}></Input>
                
                <Input keyboardType='numeric' maxLength={1} value={otp[2]} onChangeText={(text)=>handlechange(text,2)} ref={(el)=>(inputsref.current[2]=el)}></Input>
                 
                 <Input keyboardType='numeric' maxLength={1} value={otp[3]} onChangeText={(text)=>handlechange(text,3)} ref={(el)=>(inputsref.current[3]=el)}></Input>
                 
            


              </XStack>
               <Button bg={'#312e2eff'} color={'white'} width={200} mt={20} onPress={otp.every((digit)=>digit!=="")?()=>navigate('profile'):()=>Alert.alert('Invalid OTP')}>Verify</Button>

               <YStack mt={10}>
                    <Text>Didnt recieved a code?? Resend</Text>
                     
               </YStack>

             </YStack>

        </YStack>
    );
}

const styles = StyleSheet.create({})

export default Verification;
