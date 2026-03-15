import ThemeInput from '@/presentation/theme/components/theme-input';
import ThemedBotton from '@/presentation/theme/components/themed-botton';
import ThemedLink from '@/presentation/theme/components/themed-link';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const LoginScreen = () => {


  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >
      <ScrollView style={{
        paddingHorizontal: 30
      }}>
        {/* Letras de presentación */}
        <View style={{ paddingTop: height * 0.35 }}>
          <ThemedText type='title' style={{ fontFamily: 'KanitBold' }}>Ingresar</ThemedText>
          <ThemedText style={{ color: 'grey' }}>Por favor ingrese para continuar</ThemedText>
        </View>

        {/* Text inputs necesarios */}

        <View style={{ marginTop: 20 }}>
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
          Ingresar
        </ThemedBotton>
        {/*Spacer*/}
        <View style={{ marginVertical: 25 }}></View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ThemedText>¿No tienes cuenta?</ThemedText>
          <ThemedLink href='/auth/register' style={{ marginHorizontal: 2 }}>Crear cuenta</ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen