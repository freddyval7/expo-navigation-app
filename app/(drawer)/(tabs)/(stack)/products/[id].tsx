import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((item) => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: product?.title || "",
    });
  }, [product]);

  if (!product) return <Redirect href={"/products"} />;

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product?.title}</Text>
      <Text className="mt-2">{product?.description}</Text>
      <View className="flex flex-row justify-between mt-2">
        <Text className="font-work-black">${product?.price}</Text>
      </View>
    </View>
  );
};

export default ProductScreen;
