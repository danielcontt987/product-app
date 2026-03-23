import { productApi } from "@/core/api/productsApi";
import { Product } from "../interface/product";

export const updateCreateProduct = (product: Partial<Product>) => {

    product.stock = isNaN(Number(product.stock)) ? 0 : Number(product.stock);
    product.price = isNaN(Number(product.price)) ? 0 : Number(product.price);

    if (product.id && product.id !== 'new') {
        return udpateProduct(product)
        
    }

    return createProduct(product)


}

const udpateProduct = async (product: Partial<Product>) => {
    const {id, images = [], user, ...rest} = product
    try {
        const {data} = await productApi.patch(`/products/${id}`,{
            //TODO: Images
            ...rest
        })

        return data;
    } catch (error) {
        throw new Error("Error al actualizar el producto.");
    }
}
const createProduct = async (product: Partial<Product>) => {
    const {id, images = [], user, ...rest} = product
    try {
        const {data} = await productApi.post(`/products/`,{
            //TODO: Images
            ...rest
        })

        return data;
    } catch (error) {
        throw new Error("Error al actualizar el producto.");
    }
}

