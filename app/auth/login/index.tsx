import ThemeInput from '@/presentation/theme/components/theme-input';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const LoginScreen = () => {

  
  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior='padding'style={{ flex: 1 }} >
      <ScrollView style={{
        paddingHorizontal: 40
      }}>
        <View style={{paddingTop: height * 0.40}}>
          <ThemedText type='title' style={{fontFamily: 'KanitBold'}}>Ingresar</ThemedText>
          <ThemedText style={{color: 'grey'}}>Por favor ingrese para continuar</ThemedText>
        </View>

        <View style={{marginTop:  20}}>
           <ThemeInput 
              placeholder='Correo electrónico' 
              keyboardType='email-address' 
              autoCapitalize='none'
              icon='mail-outline'
            />
            <ThemeInput 
              placeholder='Contraseña' 
              secureTextEntry
              autoCapitalize='none'
              icon='lock-closed-outline'
              iconShow='eye'
            />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen