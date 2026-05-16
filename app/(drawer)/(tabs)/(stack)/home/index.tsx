import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView>
      <View className="px-10">
        <CustomButton className="mb-2" onPress={() => router.push("/products")}>
          Products
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomButton>
        <Link href={"/profile"} asChild>
          <CustomButton variant="text-only" className="mb-2" color="secondary">
            Profile
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer} className="mt-5">
          Open menu
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
