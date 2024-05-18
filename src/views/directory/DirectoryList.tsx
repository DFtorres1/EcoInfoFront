import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useCompanyType from "./hooks/useCompanyTypeDetail";
import { useEffect } from "react";
import useCompanyDetail from "./hooks/useCompanyDetail";
import useStoreList from "./hooks/useStoreList";
import { GlobalStyles } from "../Styles";

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

  if (companyTypeLoading || storeCompanyLoading)
    <View>
      <Text>Cargando Local</Text>
    </View>;

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
  const { data: storeList, isLoading: storesLoading, error } = useStoreList();

  useEffect(() => {
    console.log(error);
  }, [error]);

  if (storesLoading)
    <View>
      <Text>Cargando Empresa</Text>
    </View>;

  return (
    <SafeAreaView style={GlobalStyles.root}>
      <Text style={GlobalStyles.title}>Directorio</Text>
      <FlatList
        data={storeList}
        renderItem={({ item, index }) => (
          <RenderCompanyList key={index} store={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default DirectoryList;
