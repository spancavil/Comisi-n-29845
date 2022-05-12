import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import {useFonts} from 'expo-font';
import DetailScreen from './Screens/DetailScreen';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleCategory = (category) => {
    // console.log(category);
    setCategorySelected(category)
  }

  const handleProduct = (product) => {
    // console.log(category);
    setProductSelected(product)
  }

  // console.log(categorySelected);
  // console.log(productSelected);

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);
  console.log(productSelected);

  return (
    <View style={style.container}>
      { !categorySelected ?
        <CategoriesScreen handleCategory = {handleCategory}/>
        :
        !productSelected ?
        <ProductsScreen category={categorySelected} handleProduct={handleProduct}/>
        :
        <DetailScreen product={productSelected}/>
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
})
