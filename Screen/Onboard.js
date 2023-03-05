import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';

const _colors = '#000';
const _size = 100;

const Onboard = ({navigation}) => {
  return (
    
            
            <View className="flex-1 items-center justify-center" >
                {[...Array(1).keys()].map(index=>{
                    return<MotiView
                    from={{opacity: 0, scale: 1}}
                    animate={{opacity: 1, scale: 10}}
                    transition={{
                        type:"timing",
                        duration : 10000,
                        easing : Easing.inOut(Easing.ease),
                        loop: false,
                        delay: index * 500,
                        repeatReverse: false
                    }}
                    key={index}
                    style={[StyleSheet.absoluteFillObject, styles.dot]}
                    />
                })}
                <View className="pt-[550px] ">
                    <View className="border-2 px-6 py-3 rounded-2xl">
                 <TouchableOpacity onPress={()=> navigation.navigate("Home")}>  
                  <Text className="text-3xl uppercase font-bold opacity-15">Next</Text>                
                </TouchableOpacity>   
                    </View>
                </View>
            </View>

  )
}

export default Onboard

const styles = StyleSheet.create({
    dot:{
        paddingTop: 60,
        width: _size,
        height: _size,
        borderRadius: _size,
        backgroundColor: _colors,
    }
})