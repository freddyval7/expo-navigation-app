import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: "indigo",
        sceneStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          drawerIcon: ({ color, size }) => {
            <Ionicons name="person-circle-outline" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: "Tabs + Stack",
          drawerIcon: ({ color, size }) => {
            <Ionicons name="person-circle-outline" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Schedule",
          drawerIcon: ({ color, size }) => {
            <Ionicons name="calendar-outline" size={size} color={color} />;
          },
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
