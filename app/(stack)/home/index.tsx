import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
