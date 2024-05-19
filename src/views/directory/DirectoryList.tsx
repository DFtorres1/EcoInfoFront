import { FlatList, SafeAreaView } from "react-native";
import useCompanyType from "./hooks/useCompanyTypeDetail";
import { useEffect } from "react";
import useCompanyDetail from "./hooks/useCompanyDetail";
import useStoreList from "./hooks/useStoreList";
import { GlobalStyles } from "../../utils/Styles";
import LoadingScreen from "src/utils/LoadingScreen";
import { Card, Text } from "react-native-paper";

const RenderCompanyList = ({ store }: { store: Store }) => {
  const {
    data: storeCompany,
    isLoading: storeCompanyLoading,
    error: companyError,
  } = useCompanyDetail(store.company_id);

  const {
    data: companyType,
    isLoading: companyTypeLoading,
    error: companyTypeError,
  } = useCompanyType(storeCompany?.company_type_id);

  useEffect(() => {
    console.log("Error en la compañia", companyTypeError, companyError);
  }, [companyTypeError, companyError]);

  if (companyTypeLoading || storeCompanyLoading) return <LoadingScreen />;

  return (
    <Card elevation={2} style={GlobalStyles.listItem}>
      <Card.Title
        title={store.name}
        subtitle={`${storeCompany?.name} - ${companyType?.name}`}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={GlobalStyles.listDescription}>
          {store.direction}
        </Text>
      </Card.Content>
    </Card>
  );
};

const DirectoryList = () => {
  const {
    data: storeList,
    isLoading: storesLoading,
    error: storeListError,
  } = useStoreList();

  useEffect(() => {
    console.log("Error en la tienda", storeListError);
  }, [storeListError]);

  return (
    <SafeAreaView style={GlobalStyles.root}>
      <Text style={GlobalStyles.title}>Directorio</Text>
      {storesLoading ? (
        <LoadingScreen />
      ) : storeList ? (
        <FlatList
          data={storeList}
          renderItem={({ item, index }) => (
            <RenderCompanyList key={index} store={item} />
          )}
        />
      ) : (
        <Text style={GlobalStyles.title}>No hay items por mostrar</Text>
      )}
    </SafeAreaView>
  );
};

export default DirectoryList;
