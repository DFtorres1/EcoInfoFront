import { FlatList, SafeAreaView, Text, View } from "react-native";
import useCompanyType from "./hooks/useCompanyTypeDetail";
import { useEffect } from "react";
import useCompanyDetail from "./hooks/useCompanyDetail";
import useStoreList from "./hooks/useStoreList";
import { GlobalStyles } from "../../utils/Styles";
import LoadingScreen from "src/utils/LoadingScreen";

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
    console.log(companyTypeError, companyError);
  }, [companyTypeError, companyError]);

  if (companyTypeLoading || storeCompanyLoading) return <LoadingScreen />;

  return (
    <View style={GlobalStyles.listItem}>
      <Text style={GlobalStyles.listTitle}>{store.name}</Text>
      <Text style={GlobalStyles.listSubTitle}>
        {storeCompany?.name} - {companyType?.name}
      </Text>
      <Text style={GlobalStyles.listDescription}>{store.direction}</Text>
    </View>
  );
};

const DirectoryList = () => {
  const {
    data: storeList,
    isLoading: storesLoading,
    error: storeListError,
  } = useStoreList();

  useEffect(() => {
    console.log(storeListError);
  }, [storeListError]);

  if (storesLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={GlobalStyles.root}>
      <Text style={GlobalStyles.title}>Directorio</Text>
      {storeList ? (
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
