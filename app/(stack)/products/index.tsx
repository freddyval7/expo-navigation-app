import { products } from "@/store/products.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="mt-2">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">${item.price}</Text>
              <Link href={`/products/${item.id}`} asChild>
                <Text className="text-primary font-work-bold">
                  View Details
                </Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
