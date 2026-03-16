import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions";
import { User } from "@/core/auth/interfaces/user";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { create } from 'zustand';

export type AuthStatus = 'autheticaded' | 'unautheticaded' | 'checking';

export interface authState{
    status: AuthStatus;
    token?: string;
    user?: User;


    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
    changeStatus: (token?:string, user?:User) => Promise<boolean>;
}


export const useAuthStore = create<authState>()( (set, get) => ({

    //Properties
    status: 'checking',
    token: undefined,
    user: undefined,

     changeStatus: async (token?: string, user?: User) =>{
        if (!token || !user) {
            set({status: 'unautheticaded', token: undefined, user: undefined})
            // TODO: Llamar logout
            await SecureStorageAdapter.deleteItem('token')
            
            return false;
        }

        set({
            status: 'autheticaded',
            user: user,
            token: token
        })

         // TODO: guardar eñ token seccure stogare

         await SecureStorageAdapter.setItem('token', token)
         return true;

    },

    //Actions
    login: async(email: string, password: string) => {
        const resp = await authLogin(email, password);
        return get().changeStatus(resp?.token, resp?.user)
    },

    checkStatus: async() => {
        const resp = await authCheckStatus();
         get().changeStatus(resp?.token, resp?.user)

    },

    logout: async() => {
        // TODO: Clear token del secure storage
        SecureStorageAdapter.deleteItem('token')
        set({status: 'unautheticaded', token: undefined, user: undefined})
    }
}));