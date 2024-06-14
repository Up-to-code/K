import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import bgImage from "@/assets/images/bg/bg2.jpg";
import user from "@/assets/images/users/user1.jpg";
import Colors from "@/lib/Color";
import { FlashList } from "@shopify/flash-list";
const Index = () => {
  const bgImageURL = Image.resolveAssetSource(bgImage).uri;
  const userURL = Image.resolveAssetSource(user).uri;
  return (
    <View style={styles.container}>
      {/* profile page */}
      <FlashList
        data={[
          {
            id: 1,
            title: "Profile",
            image: userURL,
          },
          {
            id: 2,
            title: "Settings",
            image: userURL,
          },
          {
            id: 3,
            title: "Logout",
            image: userURL,
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              {item.id == 1 && (
                <View style={{ height: 220 }}>
                  <ImageBackground
                    source={{ uri: bgImageURL }}
                    style={styles.bgImage}
                  >
                    <Image src={userURL} style={styles.userImage} />
                    <Text style={styles.UserName}>Man</Text>
                  </ImageBackground>
                </View>
              )}
            </View>
          );
        }}
        estimatedItemSize={200}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  bgImage: {
    height: 150,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    position: "absolute",
    bottom: "-25%",
    borderColor: "white",
    borderWidth: 3,
    overflow: "hidden",
  },
  UserName: {
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    bottom: "-40%",
  },
});

export default Index;
