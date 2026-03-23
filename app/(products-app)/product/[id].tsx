import ProductImages from '@/presentation/products/components/ProductImages';
import { useProduct } from '@/presentation/products/hooks/useProduct';
import ThemeInput from '@/presentation/theme/components/theme-input';
import ThemedBotton from '@/presentation/theme/components/themed-botton';
import ThemedBottonGroup from '@/presentation/theme/components/themed-botton-group';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';




const ProductScreen = () => {
  const navigation = useNavigation();

  const {id} = useLocalSearchParams();

  const {productQuery} = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name='camera-outline' size={25} />
    });
  }, [])


   useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title
      })
    }
  }, [productQuery.data])


  if (productQuery.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={30} />
      </View>
    )
  }

  if (!productQuery.data) {
    <Redirect href={'/(products-app)/(home)'} />
  }

  const product = productQuery.data!;


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={60}>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/*TODO: Product Images */}
        <ProductImages images={product.images} />
        <ThemedView style={{ marginHorizontal: 12, marginTop: 20 }}>
          <ThemeInput placeholder='Titulo' style={{ marginVertical: 5 }} />
          <ThemeInput placeholder='Slug' style={{ marginVertical: 5 }} />
          <ThemeInput placeholder='Descripción' style={{ marginVertical: 5 }} multiline numberOfLines={5} />
        </ThemedView>
        <ThemedView style={{
          marginHorizontal: 12,
          marginVertical: 5,
          flexDirection: 'row',
          gap: 10
        }}>
          <ThemeInput
            placeholder='Precio'
            containerStyle={{ flex: 1 }}
          />

          <ThemeInput
            placeholder='Inventario'
            containerStyle={{ flex: 1 }}
          />
        </ThemedView>
        <ThemedView style={{marginHorizontal: 10}}>
          <ThemedBottonGroup options={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']}
            selectedOptions={product.sizes} 
              onSelect={(options) => console.log({options})}
          />
          <ThemedBottonGroup options={['kid', 'men', 'women', 'unisex']}
            selectedOptions={[product.gender]} 
              onSelect={(options) => console.log({options})}
          />
        </ThemedView>
        <ThemedView
          style={{marginHorizontal: 10, marginBottom: 50, marginTop: 20}}
        >
          <ThemedBotton icon='save-outline' onPress={() => console.log("hola")}>
            Guardar
          </ThemedBotton>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ProductScreen