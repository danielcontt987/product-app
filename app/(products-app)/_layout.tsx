import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const CheckAuthenticacionLayout = () => {


    const { status, checkStatus } = useAuthStore();

    useEffect(() => {
        checkStatus();
    }, [])


    if (status === 'checking') {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5
            }}>
                <ActivityIndicator />
            </View>
        );
    }

    if (status === 'unautheticaded') {
        return <Redirect href='/auth/login'/>
    }


    return (
    <Stack>
        <Stack.Screen 
            options={{
                title: 'Productos',
            }}
        />
    </Stack>
    )




}

export default CheckAuthenticacionLayout