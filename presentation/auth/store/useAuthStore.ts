import { User } from "@/core/auth/interfaces/user";
import { create } from 'zustand';

export type AuthStatus = 'autheticaded' | 'unautheticaded' | 'checking';

export interface authState{
    status: AuthStatus;
    token?: string;
    user?: User;


    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
}


export const useAuthStore = create<authState>()( (set) => ({

    //Properties
    status: 'checking',
    token: undefined,
    user: undefined,

    //Actions
    login: async(email: string, password: string) => {
        return true;
    },

    checkStatus: async() => {

    },

    logout: async() => {
        
    }
}));