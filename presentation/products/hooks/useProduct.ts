import { getProductsById } from "@/core/product/actions/get-product-by-id.action";
import { Product } from "@/core/product/interface/product";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert } from "react-native";

export const useProduct = (productId: string) => {
  

    const productQuery = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProductsById(productId),
        staleTime:  1000 * 60 * 60
    });


    //Mutacion jugar con el cache

    const productMutation = useMutation({
        mutationFn: async (data: Product) =>{
            //TODO: dispara a acción
            return data
        },
        onSuccess(data: Product){
            //TODO: Invalidar product queries

            Alert.alert('Producto guardado', 'el producto se guardo correctamente')
        }
    });


    //Mantener el ID del producto en caso de ser uno nuevo

    


    return {
        productQuery,
        productMutation
    }
}
