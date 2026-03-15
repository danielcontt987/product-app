import axios from 'axios'

//TODO: Conectar mediante envs vars, Android y IOS

const productApi = axios.create({
    baseURL: 'localhost:3000/api',
})

//TODO interceptores


export { productApi }



