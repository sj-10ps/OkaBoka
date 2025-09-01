import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback ,Keyboard} from 'react-native';

const Keyboardhandler = ({children}) => {
    return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible="false">
        <View style={{flex:1}}>
        {children}
        </View>

       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({})

export default Keyboardhandler;
