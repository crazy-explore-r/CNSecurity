import Body from "./components/Body"
import React, { useState } from 'react';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    "rocker": require("./assets/fonts/RubikMoonrocks-Regular.ttf")
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(err) => console.log(err)}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return <Body />;
}


