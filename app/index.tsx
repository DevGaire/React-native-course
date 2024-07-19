import { View } from 'react-native'
import React from 'react'

import MyButton from '@/components/myButton'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter(); // navigate the page  use this !! //

  const onContinue = () => {
 router.navigate("/login")
    
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton tittle={'Continue'} onPress={onContinue} />

    </View>
  )
}

export default index