import { API_URL, productApi } from "@/core/api/productsApi";
import { type Product } from "../interface/product";

export const getProductsById = async (id: string):Promise<Product> => {


    try {

        const {data} =  await productApi.get<Product>(`/products/${id}`)

        return {
            ...data,
            images: data.images.map(
                image => `${API_URL}/files/product/${image}`
            )
        };
        
    } catch (error) {
        throw new Error(`Product not found by id ${id}`)
    }


}