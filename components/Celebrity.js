import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from "react-native"

const Celebrity = (props) => {

    let ratingColor = props.navigation.state.params.celebrity.popularity * 0.05
    if(ratingColor < 0.1) ratingColor = 0.1

    return (
      <ImageBackground style={{height: "100%", width: "100%"}} source={require("../assets/background-image.jpg")}>
        <View style={{flex: 1, alignItems: "center"}}>
            <Text>ONE CELEB</Text>
            <Text style={[styles.header, {marginTop: 30}]}>{props.navigation.state.params.celebrity.name}</Text>
            <Image
            style={{ height: 200, width: 200, marginTop: 30 }}
            source={{ uri: props.navigation.state.params.celebrity.pictureUrl }}
          />
          <View style={[styles.rating,{flex: 1, flexDirection:"row"}]}>
            <Text>Rating: </Text>
          <Text style={{color: `rgba(0, 0, 0, ${ratingColor})`}}>{Math.floor(props.navigation.state.params.celebrity.popularity)}</Text>
            <Text>/20</Text>
          </View>
        </View>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold"
    },
    rating: {
        marginTop: 10,
    }
})

export default Celebrity;