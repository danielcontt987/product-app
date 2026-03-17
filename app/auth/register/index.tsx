import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import ModalToast from '@/presentation/components/modals/ModalToast';
import ThemeInput from '@/presentation/theme/components/theme-input';
import ThemedBotton from '@/presentation/theme/components/themed-botton';
import ThemedLink from '@/presentation/theme/components/themed-link';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const RegisterScreen = () => {

  const { register } = useAuthStore();
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background')



  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: ''
  })

  const closeModal = () => {
    setOpenModal(false)
    setMessage("Favor de ingresar los datos");
    setIsSuccess(true);
  }

  const onRegister = async () => {
    const { email, password, fullName } = form

    if (!password || !email || !fullName) {
      setOpenModal(true);
      setIsSuccess(false);
      setMessage("Favor de ingresar los datos")
      return;
    }

    setIsLoading(true);
    const wasSuccessfullRegister = await register(email, password, fullName)
    setIsLoading(false);

    
    if (wasSuccessfullRegister) {
      router.replace('/(products-app)/(home)')
      return;
    } {
      setOpenModal(true);
      setMessage("Ha ocurrido un error")
      setIsSuccess(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >

       <ModalToast color={isSuccess ? '#007d2a' : '#ff0f47'} icon={isSuccess ? 'checkmark-circle-outline' : 'alert-circle-outline'} visible={openModal}>
          <View style={{ alignItems: "center" }}>
            <ThemedText style={{ justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
              {message}
            </ThemedText>
          </View>
          <ThemedBotton onPress={() => closeModal()} >
            Cerrar
          </ThemedBotton>
        </ModalToast>

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
            autoCapitalize='none'
            icon='person-outline'
            value={form.fullName}
            onChangeText={(value) => setForm({ ...form, fullName: value })}
          />
          <ThemeInput
            placeholder='Correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
            icon='mail-outline'
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}

          />
          <ThemeInput
            placeholder='Contraseña'
            secureTextEntry
            autoCapitalize='none'
            icon='lock-closed-outline'
            iconShow='eye'
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        {/*Spacer*/}
        <View style={{ marginVertical: 10 }}></View>

        {/*Boton*/}
        <ThemedBotton icon='arrow-forward-circle-outline' onPress={onRegister} disabled={isLoading}>
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