import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "chevron-back-outline" : "menu-outline"}
            size={25}
            onPress={() => onHeaderLeftPress(canGoBack!)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Product Details",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
