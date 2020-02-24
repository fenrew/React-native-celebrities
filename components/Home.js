import React, { Component } from "react";
import { View, Text, Button, TextInput, Image } from "react-native";

import celebrities from "../celebrities.json";

class Home extends Component {
  state = {
    search: 0
  };

  handleInput(input) {
    if (!(input >= 0)) input = 0;
    else if (input >= celebrities.length) input = celebrities.length - 1;
    else if (!input) input = 0

    console.log(input)

    this.setState({
      search: input
    });
  }

  renderCelebrity(celeb) {
    console.log(celeb);
    return (
      <View>
        <Text>{celeb.name}</Text>
        <Image
          style={{ height: 60, width: 60, marginLeft: "auto", marginRight: "auto" }}
          source={{ uri: celeb.pictureUrl }}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly", marginBottom: "45%", marginTop: "10%" }}>
        <View style={{flex: 1, alignItems: "center"}}>
          {this.renderCelebrity(celebrities[this.state.search])}

          <TextInput
            keyboardType="numeric"
            placeholder={"0"}
            style={{
              backgroundColor: "grey",
              width: 60,
              textAlign: "center",
            }}
            onChangeText={input => this.handleInput(input)}
          />
        </View>

        <Button
          title="See all celebs"
          onPress={() => this.props.navigation.navigate("Celebrities")}
        ></Button>
      </View>
    );
  }
}

export default Home;
