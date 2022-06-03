import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import InputText from "./components/InputText";
import ProductsInfo from "./components/ProductsInfo";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <InputText />
        <ProductsInfo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App