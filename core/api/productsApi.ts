import { SecureStorageAdapter } from '@/helpers/adapters/secure-storage.adapter';
import axios from 'axios';
import { Platform } from 'react-native';

// TODO: Conectar mediante envs vars, Android y IOS

const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev'

export const API_URL =
    (STAGE === 'prod')
        ? process.env.EXPO_PUBLIC_API_URL
        : (Platform.OS) === 'ios'
            ? process.env.EXPO_PUBLIC_API_IOS
            : process.env.EXPO_PUBLIC_API_ANDROID

const productApi = axios.create({
    baseURL: API_URL,
})

// TODO: interceptores

productApi.interceptors.request.use( async(config) => {

    // Verificar si tenemos un token en el secure storage
    const token = await SecureStorageAdapter.getItem('token')
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export { productApi };



