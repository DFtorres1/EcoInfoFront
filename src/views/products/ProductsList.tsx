import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { GlobalStyles } from "src/utils/Styles";
import useProductCategory from "./hooks/useProductType";
import LoadingScreen from "src/utils/LoadingScreen";
import useProductsList from "./hooks/useProductsList";

const RenderProductList = ({ product }: { product: Product }) => {
  const {
    data: productCategory,
    isLoading: productCategoryLoading,
    error: productCategoryError,
  } = useProductCategory(product?.product_category_id);

  useEffect(() => {
    console.log(productCategoryError);
  }, [productCategoryError]);

  if (productCategoryLoading || productCategoryLoading)
    return <LoadingScreen />;

  return (
    <View style={GlobalStyles.listItem}>
      <Text style={GlobalStyles.listTitle}>{product.name}</Text>
      <Text style={GlobalStyles.listSubTitle}>{productCategory?.name}</Text>
      <Text style={GlobalStyles.listDescription}>{product.description}</Text>
    </View>
  );
};

const ProductsList = () => {
  const {
    data: productList,
    isLoading: productsLoading,
    error: productListError,
  } = useProductsList();

  useEffect(() => {
    console.log(productListError);
  }, [productListError]);

  if (productsLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={GlobalStyles.root}>
      <Text style={GlobalStyles.title}>Directorio</Text>
      {productList ? (
        <FlatList
          data={productList}
          renderItem={({ item, index }) => (
            <RenderProductList key={index} product={item} />
          )}
        />
      ) : (
        <Text style={GlobalStyles.title}>No hay items por mostrar</Text>
      )}
    </SafeAreaView>
  );
};

export default ProductsList;
