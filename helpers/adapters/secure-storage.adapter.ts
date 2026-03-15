import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export class SecureStorageAdapter {

    static async setItem(key: string, value:string){
        try {
            await SecureStore.setItemAsync(key, value)
        } catch (error) {
            Alert.alert('Error', 'Fallo el guardado de los datos')
        }
    }

    static async getItem(key: string){
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            Alert.alert("Error", "Falló la obtención de los datos")
            return null
        }
    }

    static async deleteItem(key: string){
        try {
            return await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Falló la eliminación de los datos")
        }
    }


}