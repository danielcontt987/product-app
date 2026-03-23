import { getProducts } from "@/core/product/actions/get-products.action";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProducts = () => {
    
    const productsQuery =  useInfiniteQuery({
        queryKey: ['products', 'infinite'],
        queryFn: ({pageParam}) => getProducts(20, pageParam * 20),
        //La data esta fresca para que no vuelva a hacer la petición si ya existe data
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => allPages.length,
    })

    return {
        productsQuery,

        //cargar la siguiente pagina

        //methods

        loadNextPage: productsQuery.fetchNextPage,
    }

}