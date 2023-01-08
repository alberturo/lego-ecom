import React from "react";
import { Appearance } from "react-native";
import { darkMode } from "./src/theme/themeMode";
import RootNavigator from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  const [theme, setTheme] = React.useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    console.log(scheme.colorScheme);
  });
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
