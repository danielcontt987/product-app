import { getProductsById } from "@/core/product/actions/get-product-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productId: string) => {
  

    const productQuery = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProductsById(productId),
        staleTime:  1000 * 60 * 60
    });


    //Mutacion


    //Mantener el ID del producto en caso de ser uno nuevo

    


    return {
        productQuery
    }
}
