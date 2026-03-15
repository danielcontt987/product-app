import ThemeInput from '@/presentation/theme/components/theme-input';
import ThemedBotton from '@/presentation/theme/components/themed-botton';
import ThemedLink from '@/presentation/theme/components/themed-link';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const RegisterScreen = () => {


  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background')

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >
      <ScrollView style={{
        paddingHorizontal: 30,
        backgroundColor: backgroundColor
      }}>
        {/* Letras de presentación */}
        <View style={{ paddingTop: height * 0.35 }}>
          <ThemedText type='title' style={{ fontFamily: 'KanitBold' }}>Crear cuenta</ThemedText>
          <ThemedText style={{ color: 'grey' }}>Por favor crea una cuenta para continuar</ThemedText>
        </View>

        {/* Text inputs necesarios */}

        <View style={{ marginTop: 20 }}>
          <ThemeInput
            placeholder='Nombre completo'
            autoCapitalize='words'
            icon='person-outline'
          />
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

        {/*Spacer*/}
        <View style={{ marginVertical: 10 }}></View>

        {/*Boton*/}
        <ThemedBotton icon='arrow-forward-circle-outline'>
          Crear cuenta
        </ThemedBotton>
        {/*Spacer*/}
        <View style={{ marginVertical: 25 }}></View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ThemedText>¿Ya tienes cuenta?</ThemedText>
          <ThemedLink href='/auth/login' style={{ marginHorizontal: 2 }}>Ingresar</ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen