import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Divider, Text } from "react-native-paper";
import { GlobalStyles } from "src/utils/Styles";

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
      <Card
        elevation={2}
        style={GlobalStyles.listItem}
        onPress={() => {
          navigation.navigate(item.navigate);
        }}
      >
        <Card.Content>
          <Text variant="headlineSmall" style={GlobalStyles.menuTitle}>
            {item.title}
          </Text>
        </Card.Content>
      </Card>
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

export default MainPage;
