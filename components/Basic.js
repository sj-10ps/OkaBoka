import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Input, Text, XStack, YStack } from 'tamagui';
import {Ionicons} from '@expo/vector-icons'
import Keyboardhandler from './Keyboardhandler';
const Basic = () => {
    const Navigation=useNavigation()
    const inputsref=useRef([])
    const navigation=useNavigation().navigate
     const handlecontrol=(index,limit,text)=>{
      
       if(limit===text.length&&index<2){
          inputsref.current[index+1].focus()
       }
      }     
      
      const [choosedbutton,setchoosedbutton]=useState('')
    
   
    return (
        <Keyboardhandler>
       <YStack bg={'#3DC4AB'} flex={1} px={30}>
        <YStack mt={50} >
           <Pressable onPress={()=>Navigation.goBack()}>  
   <Ionicons name="arrow-back" size={28} color="black" />
 
</Pressable>

            <Text fontWeight={700}  fontSize={17} mt={10}>A Little About Yourself we match better</Text>
        </YStack>

        <YStack mt={20}>
          <Text fontSize={13} fontWeight={700} >Date of birth</Text>
          <XStack gap={10} mt={5} justifyContent="space-between">
            <Input maxLength={2} keyboardType='numeric' width={60} placeholder='DD' ref={(e)=>(inputsref.current[0]=e)} onChangeText={(text)=>handlecontrol(0,2,text)}></Input>
                 <Input maxLength={2} keyboardType='numeric' width={60} placeholder='MM'  ref={(e)=>(inputsref.current[1]=e) } onChangeText={(text)=>handlecontrol(1,2,text)} ></Input>
                   <Input maxLength={4} keyboardType='numeric' width={100} placeholder='YYYY'  ref={(e)=>(inputsref.current[2]=e)} onChangeText={(text)=>handlecontrol(2,4,text)}></Input>
          </XStack>
        </YStack>

         <YStack mt={20}>
          <Text fontSize={13} fontWeight={700}>Gender</Text>
          <XStack gap={10} mt={5} justifyContent="space-between">
            <Button onPress={()=>setchoosedbutton('male')} theme={choosedbutton==="male"?'black':'white'}><Text>Male</Text></Button>
            <Button onPress={()=>setchoosedbutton('female')} theme={choosedbutton==="female"?'black':'white'}><Text>Female</Text></Button>
            <Button onPress={()=>setchoosedbutton('others')} theme={choosedbutton==="others"?'black':'white'}><Text>Others</Text></Button>
         
          </XStack>
          {choosedbutton==="others"&&  <Input width={300} placeholder='Enter you Gender' mt={10}></Input>}
            
        </YStack>

        <YStack mt={20}>
          <Text fontSize={13} fontWeight={700}>Location</Text>
          <XStack gap={10} mt={5}>
              <Input width={300} placeholder='Enter you location' ></Input>
          </XStack>
        </YStack>
         
         <YStack flex={1} justifyContent="flex-end" mb={70} alignItems="center"> 
         <Button  theme={'black'} width={300} onPress={()=>navigation('relationship')}><Text>Continue</Text></Button>
         <Text>Who are you trying to connect with?</Text>
         </YStack>

       </YStack>
     </Keyboardhandler>
    );
}

const styles = StyleSheet.create({})

export default Basic;
