import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'




const Home = ({navigation}) => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    const onSubmit = () => {
        if(name.trim().length === 0 || mail.trim().length === 0){
            Alert.alert('You need to enter name and mail to Call the api')
            setName("");
            setMail("");
            return;
        }
        setName("");
        setMail("");
        if(name.trim().length !== 0 || mail.trim().length !== 0){
            Alert.alert("API Call you will show on next screen")
            setTimeout(() => {
                navigation.navigate('Transfer',{
                    name: {name},
                    email : {mail}
                })
            })
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 justify-center items-center"
            >
                <Pressable  onPress={Keyboard.dismiss}>
                <View>
                    <Text className=" items-start pl-[30px] text-xl ">Enter Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder='Name'
                    />
                </View>
                <View>
                    <Text className=" items-start pl-[30px] text-xl ">Enter Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={mail}
                        onChangeText={setMail}
                        placeholder='Email'
                    />
                </View>
                <View className="pt-[150px] ">
                    <View className="border-2 items-center px-6 py-3 rounded-2xl">
                        <TouchableOpacity onPress={onSubmit}>
                            <Text className="text-3xl uppercase font-bold opacity-15">Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </Pressable>

        </KeyboardAvoidingView>
    )
}

export default Home

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        borderRadius: 10,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});