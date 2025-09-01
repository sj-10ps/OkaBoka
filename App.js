
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './components/Signup';
import Verification from './components/Verification';
import Profile from './components/Profile';
import Basic from './components/Basic';
import Relationship from './components/Relationship';
import Home from './components/Home';
import Upload from './components/Upload';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
import Splash from './components/Splash';
import { useEffect, useState } from 'react';


export default function App() {
   const [loading,setLoading]=useState(true)
  
   useEffect(()=>{
    const timer=setTimeout(() => {
       setLoading(false)
    }, 2000);
    return ()=>clearTimeout(timer)
   })
  
  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
      
      <TamaguiProvider config={config}>
          <NavigationContainer>
        {loading?<Splash/>:(
        
        <Stacknavigator/>
   

        )}
           </NavigationContainer>
        
      
    </TamaguiProvider>
    </GestureHandlerRootView>
  );
}




const Bottomnavigator=()=>{

  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'upload') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerShown:false,
        tabBarStyle:{
          backgroundColor:'#3DC4AB'
        }
      })}
    >
      <Bottom.Screen name="home" component={Home} />
      <Bottom.Screen name="upload" component={Upload} />
    </Bottom.Navigator>
  );
}

const Stacknavigator=()=>{
    const Stack=createNativeStackNavigator();
   

   return (
     <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='signup'>
  
       <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="basic" component={Basic}/>
      <Stack.Screen name="relationship" component={Relationship} />
       <Stack.Screen name="homepage" component={Bottomnavigator} />


     </Stack.Navigator>
   );
}


