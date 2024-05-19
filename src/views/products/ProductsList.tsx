import { useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { GlobalStyles } from "src/utils/Styles";
import useProductCategory from "./hooks/useProductType";
import LoadingScreen from "src/utils/LoadingScreen";
import useProductsList from "./hooks/useProductsList";
import { Card, Text } from "react-native-paper";

const RenderProductList = ({ product }: { product: Product }) => {
  const {
    data: productCategory,
    isLoading: productCategoryLoading,
    error: productCategoryError,
  } = useProductCategory(product?.product_category_id);

  useEffect(() => {
    console.log("Error en el producto", productCategoryError);
  }, [productCategoryError]);

  return (
    <Card elevation={2} style={GlobalStyles.listItem}>
      <Card.Title title={product.name} subtitle={productCategory?.name} />
      <Card.Content>
        <Text variant="bodyMedium" style={GlobalStyles.listDescription}>
          {product.description}
        </Text>
      </Card.Content>
    </Card>
  );
};

const ProductsList = () => {
  const {
    data: productList,
    isLoading: productsLoading,
    error: productListError,
  } = useProductsList();

  useEffect(() => {
    console.log("Error en el producto", productListError);
  }, [productListError]);

  if (productsLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={GlobalStyles.root}>
      <Text style={GlobalStyles.title}>Productos</Text>
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
