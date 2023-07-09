import React, { useState } from 'react'
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import horse from "./images/horse.jpg";

const App = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  let city = "Kanpur";

  const press = () => {
    setState(!state);
  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>{state ? "Con" : "dom"}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setValue(e)}
        />
        <Button title='Submit' onPress={() => press()} />
        <Image source={horse} />
      </View>
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
  text : {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
    height: 300,
    textAlignVertical: "center",
    fontWeight: "bold",
    borderWidth: 5,
    borderColor: "blue",
    margin: 10
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    borderRadius: 10,
    padding: 10
  }
})
export default App
