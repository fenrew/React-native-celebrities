import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground} from "react-native";

import celebrities from "../celebrities.json";
import styles from "./celeb-styles"

const Celebrities = props => {
  const renderCelebrities = celebrities.slice(0, 5).map(ele => {
    return (
      <TouchableOpacity
        key={ele.id}
        style={{ flex: 1, alignItems: "center" }}
        onPress={() =>
          props.navigation.navigate("Celebrity", { celebrity: ele })
        }
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>{ele.name}</Text>
          {/* <Image source={require("../assets/icon.png")} /> */}
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: ele.pictureUrl }}
          />
        </View>
      </TouchableOpacity>
    );
  });

  const allCelebrities = celebrities.map((ele, index) => {
    let styleCeleb = styles.oddCeleb
    if(index%2 === 0){
        styleCeleb = styles.evenCeleb
    }

    return (
      <TouchableOpacity  key={ele.id} style={styleCeleb} onPress={() =>
        props.navigation.navigate("Celebrity", { celebrity: ele })
      }>
        <View
          style={{
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: "black"
          }}
        >
          <Text>{ele.name}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  console.log("HELLO");

  return (
    <ImageBackground style={{width: "100%", height: "100%"}} source={require("../assets/background-image.jpg")}>
    <View
      style={{
        flex: 1,
        alignItems: "center"
      }}
    >
      <Text style={{fontSize: 25, marginBottom: 20}}>CELEBES</Text>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ height: "94%" }}>
          <ScrollView>{allCelebrities}</ScrollView>
        </View>
        <View>{renderCelebrities}</View>
      </View>
    </View>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//     oddCeleb: {
//         backgroundColor: "rgb(230, 230, 230)"
//     },
//     evenCeleb: {
//         backgroundColor: "rgb(200, 200, 200)"
//     }
// })

export default Celebrities;
