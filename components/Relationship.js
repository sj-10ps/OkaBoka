import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Input, Text, XStack, YStack } from 'tamagui';
import {Ionicons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker';
import Keyboardhandler from './Keyboardhandler';


const Relationship = () => {
     const Navigation=useNavigation()
      
        const navigation=useNavigation().navigate
        
          
          const [choosedbutton,setchoosedbutton]=useState('')
          const [choosedbuttonrel,setchoosedbuttonrel]=useState('')
          const [choosedbuttonstat,setchoosedbuttonstat]=useState('')
          const [selected,setselected]=useState('')
    return (
        <Keyboardhandler>
          <YStack bg={'#3DC4AB'} flex={1} px={30}>
        <YStack mt={50} >
           <Pressable onPress={()=>Navigation.goBack()}>  
   <Ionicons name="arrow-back" size={28} color="black" />
 
</Pressable>

            <Text fontWeight={700}  fontSize={17} mt={10}>Lets look for what you are looking for what you are at</Text>
        </YStack>

        <YStack mt={10}>
          <Text fontSize={13} fontWeight={700}>Interested in <Text fontWeight={400} fontSize={10}>(whos energy do you want to connect with)</Text></Text>
          <XStack gap={10} mt={5} justifyContent="space-between">
            <Button onPress={()=>setchoosedbutton('male')} theme={choosedbutton==="male"?'black':'white'} ><Text>Male</Text></Button>
            <Button onPress={()=>setchoosedbutton('female')} theme={choosedbutton==="female"?'black':'white'}><Text>Female</Text></Button>
            <Button onPress={()=>setchoosedbutton('others')} theme={choosedbutton==="others"?'black':'white'}><Text>Others</Text></Button>
         
          </XStack>
         
        </YStack>

         <YStack mt={10}>
          <Text fontSize={13} fontWeight={700}>Relationship status</Text>
          <XStack gap={10} mt={5} justifyContent="space-between" flexWrap='wrap'>
            <Button width={140} onPress={()=>setchoosedbuttonrel('single')} theme={choosedbuttonrel==="single"?'black':'white'}><Text>Single</Text></Button>
            <Button width={140} onPress={()=>setchoosedbuttonrel('relationship')} theme={choosedbuttonrel==="relationship"?'black':'white'}><Text>In Relationship</Text></Button>
            <Button width={140} onPress={()=>setchoosedbuttonrel('notprefered')} theme={choosedbuttonrel==="notprefered"?'black':'white'}><Text>Prefer not to say</Text></Button>
         
          </XStack>
       
            
        </YStack>


        <YStack mt={10}>
          <Text fontSize={13} fontWeight={700}>Are You</Text>
          <XStack gap={10} mt={5} justifyContent="space-between" flexWrap='wrap'>

            <Button  width={120} onPress={()=>setchoosedbuttonstat('student')} theme={choosedbuttonstat==="student"?'black':'white'} display={choosedbuttonstat==="student"||choosedbuttonstat===""?'':'none'}><Text>Student</Text></Button>
            <Button width={120} onPress={()=>setchoosedbuttonstat('employee')} theme={choosedbuttonstat==="employee"?'black':'white'} display={choosedbuttonstat==="employee"||choosedbuttonstat===""?'':'none'}><Text>Employee</Text></Button>
            <Button width={120} onPress={()=>setchoosedbuttonstat('free')} theme={choosedbuttonstat==="free"?'black':'white'} display={choosedbuttonstat==="free"||choosedbuttonstat===""?'':'none'}><Text>Freelancer</Text></Button>
            <Button width={120} onPress={()=>setchoosedbuttonstat('others')} theme={choosedbuttonstat==="others"?'black':'white'} display={choosedbuttonstat==="others"||choosedbuttonstat===""?'':'none'}><Text>Other</Text></Button>
            
          </XStack>
          {choosedbuttonstat!==""&&<Pressable onPress={()=>setchoosedbuttonstat('')}><Text color={'red'} >Change</Text></Pressable>}
       
            
        </YStack>

 {choosedbuttonstat==="student"&&(
        <YStack mt={10}>
                  <Text fontSize={13} fontWeight={700} >What’s your School/college name</Text>
                    <Input  mt={2}></Input>
                     <Text fontSize={13} fontWeight={700} mt={5} >Currently studying in?</Text>
                           <Picker selectedValue={selected} onValueChange={setselected} style={{backgroundColor:'white',marginTop:5}}>
                             <Picker.Item label='BCA' value='BCA'></Picker.Item>
                               <Picker.Item label='BBA' value='BBA'></Picker.Item>
                               <Picker.Item label='MBA' value='MBA'></Picker.Item>
                                <Picker.Item label='MCA' value='MCA'></Picker.Item>
                         </Picker>
                </YStack>
 )}

  {choosedbuttonstat==="employee"&&(
        <YStack mt={10}>
                  <Text fontSize={13} fontWeight={700} >What’s your role there</Text>
                    <Input  mt={2}></Input>
                   
                </YStack>
 )}

  {(choosedbuttonstat==="free"||choosedbuttonstat==="others")&&(
        <YStack mt={10}>
                  <Text fontSize={13} fontWeight={700} >What kind of work you do</Text>
                    <Input  mt={2}></Input>
                   
                </YStack>
 )}

       

       
             <YStack flex={1} justifyContent="flex-end" mb={30} alignItems="center" gap={2}> 
         <Button  theme={'black'} width={300} onPress={()=>navigation('homepage')}><Text>Continue</Text></Button>
         <Text>Your very first vibe</Text>
         <Pressable onPress={()=>navigation('homepage')}><Text mt={10} fontWeight={800}>Skip For Now</Text></Pressable>
         </YStack>
       

       </YStack>
       </Keyboardhandler>
    );
}

const styles = StyleSheet.create({})

export default Relationship;
