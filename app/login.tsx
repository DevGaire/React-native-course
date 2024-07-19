import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import MyButton from '@/components/myButton'
import { router, useRouter } from 'expo-router'


const Login = () => {
  
  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });



  const router = useRouter(); // navigate the page  use this !! //

  const onLogin = () => {
 

    console.log(value);
    
  }
  


  return (
    
    <View style={{ flex: 1 }}>
      <Image source={require("@/assets/images/login.png")} style={{
        width: "100%",
        height: 400,
        marginStart: 'auto',
        backgroundColor: "none",
        
      

      }}
        resizeMode= "cover"
      />
      <View style={{
        padding: 1, 
        gap: 10,
      }}>


      <TextInput placeholder='Enter your email' style={{
        borderWidth: 1,
        height: 50,
          margin: 2,
          borderRadius: 10,
        paddingHorizontal: 20,
        }}
         onChangeText={(e) => setValue({ value1: e})}
        
        />
        
        <TextInput placeholder='Password' style={{
        borderWidth: 1,
        height: 50,
          margin: 2,
          borderRadius: 10,
        paddingHorizontal: 20,
        }}
        onChangeText={(e) => setValue({ value2: e})}
        />
      <MyButton tittle={'Login'} onPress={onLogin} />
</View>
    </View>
  )
}


export default Login