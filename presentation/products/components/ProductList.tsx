import { Product } from '@/core/product/interface/product'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { ProductCard } from './ProductCard'


interface Props {
  products: Product[],
  loadNextPage: () => void,
}


const ProductList = ({ products, loadNextPage }: Props) => {

  const [isRefreshing, setIsRefreshing] = useState(false)
  const queryClient = useQueryClient();

  const onPullRefresh = async () => {

    setIsRefreshing(true)


    await new Promise((resolve) => setTimeout(resolve, 2000))

    queryClient.invalidateQueries({
      queryKey: ['products', 'infinite']
    })

    setIsRefreshing(false)

  }


  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ProductCard product={item} />}

      // Se encarga de cargar la siguiete pagina
      onEndReached={loadNextPage}
      // Que es el 80% de la pantalla del dispositivo
      onEndReachedThreshold={0.8}
      // RefreshControl lleva un componente de react native con propiedades de refreshing que es un boolean y onRefresh es un metodo
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onPullRefresh} />
      }
    />
  )
}

export default ProductList