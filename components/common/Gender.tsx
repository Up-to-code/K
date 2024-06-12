import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ManImage from "../../assets/images/Catogres/men/man.jpg";
import WomanImage from "../../assets/images/Catogres/women/woman.jpg";
const Gender = () => {
  const ManImageURL = Image.resolveAssetSource(ManImage).uri;
  const WomanImageURL = Image.resolveAssetSource(WomanImage).uri;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: ManImageURL }}
        style={styles.ImageBox}
        loadingIndicatorSource={{ uri: ManImageURL }}
      >
        <View style={styles.BlackBox}>
          <Text style={{ color: "white", fontWeight: "bold" ,
            fontSize: 20
            ,fontFamily :"sans-serif-medium"
          }}>Man</Text>
        </View>
      </ImageBackground>

      <ImageBackground
        source={{ uri: WomanImageURL }}
        style={styles.ImageBox}
        loadingIndicatorSource={{ uri: WomanImageURL }}
      >
        <View style={styles.BlackBox}>
          <Text style={{ color: "white", fontWeight: "bold" ,
            fontSize: 20
            ,fontFamily :"sans-serif-medium"
          }}>Woman</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    flexDirection:"column",
    gap : 20
  },
  image: {
    width: "auto",
    height: 100,
  },
  ImageBox: {
    width: "auto",
    height: 100,
    position: "relative",
    marginHorizontal: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  BlackBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export default Gender;
