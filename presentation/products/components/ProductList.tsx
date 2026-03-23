import { Product } from '@/core/product/interface/product'
import { FlatList } from 'react-native'
import { ProductCard } from './ProductCard'


interface Props {
    products: Product[],
    loadNextPage: () => void,
}


const ProductList = ({products, loadNextPage}: Props) => {
  return (
    <FlatList 
    data={products}
    numColumns={2}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => <ProductCard product={item} /> }
    />
  )
}

export default ProductList