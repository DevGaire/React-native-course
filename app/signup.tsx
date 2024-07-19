import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import MyButton from '@/components/myButton';

const SignUp = () => {

  const router = useRouter();
  const onRegister = () => {
    
    router.navigate("/login")
     
   }

    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton tittle={'Register'} onPress={onRegister} />

    </View>
  )
}

export default SignUp