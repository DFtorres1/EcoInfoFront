import React, { lazy } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { routesConfig } from "./src/Routes";
import MainPage from "./src/views/MainPage";
import ClimateMonitoring from "./src/views/climateMonitoring/ClimateMonitoring";
import Directory from "./src/views/directory/DirectoryList";
import Products from "./src/views/products/ProductsList";
import RequestByPhoto from "./src/views/requestByPhoto/RequestByPhoto";
import Suggestions from "./src/views/suggestions/Suggestions";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaperProvider } from "react-native-paper";

export const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen
              name="ClimateMonitoring"
              component={ClimateMonitoring}
            />
            <Stack.Screen name="Directory" component={Directory} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="RequestByPhoto" component={RequestByPhoto} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
