import OfferSlerder from "@/components/Offer_Slerder";
import Gender from "@/components/common/Gender";
import GirdProducts from "@/components/layout/GirdProducts";
import Colors from "@/lib/Color";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlashList
      showsVerticalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: Colors.light }}>
              {item == 1 && <OfferSlerder />}
              {item == 2 && <Gender />}
              {item == 3 && <GirdProducts />}
            </View>
          );
        }}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
