import { FlashList } from "@shopify/flash-list";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const OfferSlerder = () => {
  const data = [
    { id: 1, name: "Offer 1" },
    { id: 2, name: "Offer 2" },
    { id: 3, name: "Offer 3" },
    { id: 4, name: "Offer 4" },
    { id: 5, name: "Offer 5" },
    { id: 6, name: "Offer 6" },
    { id: 7, name: "Offer 7" },
    { id: 8, name: "Offer 8" },
    { id: 9, name: "Offer 9" },
    { id: 10, name: "Offer 10" },
    { id: 11, name: "Offer 11" },
    { id: 12, name: "Offer 12" },
    { id: 13, name: "Offer 13" },
    { id: 14, name: "Offer 14" },
    { id: 15, name: "Offer 15" },
    { id: 16, name: "Offer 16" },
    { id: 17, name: "Offer 17" },
  ];
  return (
    <View style={{ height: 200, width: Dimensions.get("screen").width }}>
      <FlashList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              height: 150,
              width: Dimensions.get("screen").width - 20,
              backgroundColor: "#eaeaea",
              margin: 10,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OfferSlerder;
