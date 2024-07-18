import { View } from 'react-native'
import React from 'react'

import MyButton from '@/components/myButton'

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton tittle={'Continue'} />

    </View>
  )
}

export default index