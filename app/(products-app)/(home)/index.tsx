import { ThemedText } from '@/presentation/theme/components/themed-text'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  const primary = useThemeColor({}, 'primary')
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 100}}>
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily: 'KanitBold', color: primary}}>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily: 'KanitRegular'}}>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily: 'KanitThin'}}>HomeScreen</ThemedText>
    </View>
  )
}

export default HomeScreen