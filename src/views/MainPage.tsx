import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type MenuItem = {
  id: string;
  title: string;
  image?: any;
  navigate: string;
  navProps?: {};
};

// Any due to recursive routes
type NavProps = NativeStackNavigationProp<any>;

const mockItems: MenuItem[] = [
  {
    id: "request_by_photo",
    title: "Consulta Planta por Imagen/Foto",
    navigate: "RequestByPhoto",
  },
  {
    id: "directory",
    title: "Directorio Negocio/Local",
    navigate: "Directory",
  },
  {
    id: "request_products",
    title: "Consultar Producto",
    navigate: "Products",
  },
  {
    id: "climate_monitoring",
    title: "Configurar Seguimiento climático",
    navigate: "ClimateMonitoring",
  },
  {
    id: "suggestions",
    title: "Enviar Sugerencias",
    navigate: "Suggestions",
  },
];

const MainPage = () => {
  const navigation = useNavigation<NavProps>();

  const renderItem = ({ item }: { item: MenuItem }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.navigate);
        }}
        style={[styles.item]}
      >
        <Text style={[styles.title]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={mockItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MainPage;
