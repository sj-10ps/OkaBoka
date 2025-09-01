import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Imagepicker from 'expo-image-picker'
import { YStack,XStack,Button,Image ,Text,Card} from 'tamagui';

import Customheader from './Customheader';


const Upload = () => {
    const [file,setfile]=useState(null)
  
     console.log(file)
  
        const loadimage=async()=>{
            const {status}=await Imagepicker.requestMediaLibraryPermissionsAsync()
            if(status!=="granted"){
                Alert.alert("permission required","we need access to your gallery")
                return
            }

            const result=await Imagepicker.launchImageLibraryAsync({
                mediaTypes:Imagepicker.MediaTypeOptions.Images,
                quality:1,
                allowsEditing:true
            })

            if(!result.canceled){
                setfile(result.assets[0].uri)
            }

        }

        const takePhoto = async () => {
    let result = await Imagepicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setfile(result.assets[0].uri);
    }
  };
      

    return (
 <YStack   gap="$4" >
  <Customheader/>
  <YStack  alignItems='center' mt={5}  bg='#3DC4AB' p={10} >
      <Text fontSize={20} fontWeight="600" style={{marginBottom:10}}>
        Upload Moments
      </Text>
      <XStack gap="$3" marginBottom={10}>
        <Button size="$4" theme="blue" onPress={loadimage}>
        <Text> Choose from Gallery</Text> 
        </Button>
        <Button size="$4" theme="green" onPress={takePhoto}>
         <Text> Capture Photo</Text>
        </Button>
      </XStack>

      {file && (
        <Card elevate bordered p="$3" w={400} h={500} >
          <Image
            source={{ uri: file }}
            style={{height:400,width:300,resize:'contain'}}
          />
          
          <Button mt={4}  backgroundColor={'blue'} onPress={()=>{Alert.alert("Image uploaded");setfile(null)}}><Text color={'white'}>Upload</Text></Button>
        </Card>
      )}
    </YStack>
    </YStack>
    );
}

const styles = StyleSheet.create({})

export default Upload;




