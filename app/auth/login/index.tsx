import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import ThemeInput from '@/presentation/theme/components/theme-input';
import ThemedBotton from '@/presentation/theme/components/themed-botton';
import ThemedLink from '@/presentation/theme/components/themed-link';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const LoginScreen = () => {

  const { login } = useAuthStore();

  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background')
  const [isPosting, setIsPosting] = useState(false)

  //Formulario
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const onLogin = async() => {
    const {email, password} = form
    
    if (email.length === 0 || password.length === 0) {
       return;
    }

    setIsPosting(true)
    const wasSuccessfull = await login(email, password)
    setIsPosting(false);

    if (wasSuccessfull) {
      router.replace('/(products-app)/(home)')
      return;
    }
    Alert.alert('Error', 'Usuario o contraseña no son correctos')
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >
      <ScrollView style={{
        paddingHorizontal: 30,
        backgroundColor: backgroundColor
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
            value={form.email}
            onChangeText={(value) => setForm({...form, email: value})}
          />
          <ThemeInput
            placeholder='Contraseña'
            secureTextEntry
            autoCapitalize='none'
            icon='lock-closed-outline'
            iconShow='eye'
            value={form.password}
            onChangeText={(value) => setForm({...form, password: value})}
          />
        </View>

        {/*Spacer*/}
        <View style={{ marginVertical: 10 }}></View>

        {/*Boton*/}
        <ThemedBotton icon='arrow-forward-circle-outline' onPress={onLogin} disabled={isPosting}>
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